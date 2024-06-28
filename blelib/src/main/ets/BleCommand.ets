import { ble } from '@kit.ConnectivityKit';
import { HexUtil } from './utils/HexUtil';
import { BusinessError } from '@kit.BasicServicesKit';
import { TimeoutManager } from './TimeoutManager';
import { TransmitCompleteCommand } from './TransmitCompleteCommand';
import { file_download } from './proto/file_download';

/**
 * 基础命令类：包含通道信息、特征、数据、超时时间、重试机制等属性和方法。
 */
export class BleCommand {
  private gatt: ble.GattClientDevice | null;
  private serviceUuid: string;
  private characteristicUuid: string;
  private data: ArrayBuffer;
  private timeout: number;
  private retries: number;
  private currentRetries: number = 0;
  private commandTag:String = "";//命令标签

  // 用于标识命令是否完成的标志
  private resolveFn: () => void = () => {};
  private rejectFn: (reason?: object) => void = () => {};
  //private timer: number|null = null;

  private resolve: ((value: ArrayBuffer | PromiseLike<ArrayBuffer>) => void) | null = null;
  private reject: ((reason?: object) => void) | null = null;
  private promise: Promise<ArrayBuffer>;

  //发送超时定时器
  private sendTimeoutManager = new TimeoutManager();
  //接收超时定时器
  private receiveTimeoutManager = new TimeoutManager();

  //保存设备返回的数据
  storedData = new ArrayBuffer(0);

  async writeData(data: ArrayBuffer) {
    this.storedData = concatenateArrayBuffers([this.storedData, data]);
  }

  /**
   * 创建一个新的蓝牙命令实例
   * @param gatt Gatt 客户端设备实例
   * @param serviceUuid 服务 UUID
   * @param characteristicUuid 特征 UUID
   * @param data 要写入的数据
   * @param timeout 命令超时时间（毫秒）
   * @param retries 命令失败后的重试次数
   */
  constructor(
    gatt: ble.GattClientDevice | null,
    serviceUuid: string,
    characteristicUuid: string,
    data: ArrayBuffer,
    timeout: number = 5000,
    retries: number = 0
  ) {
    this.gatt = gatt;
    this.serviceUuid = serviceUuid;
    this.characteristicUuid = characteristicUuid;
    this.data = data;
    this.timeout = timeout;
    this.retries = retries;

    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  /**
   * 设置命令失败后的重试次数
   * @param retries 新的重试次数
   */
  setRetries(retries: number): void {
    this.retries = retries;
  }

  fail(error: object) {
    if (this.reject) {
      this.reject(error);
    }
  }

  awaitResponse(): Promise<ArrayBuffer> {
    return this.promise;
  }

  /**
   * 执行命令
   * @returns Promise<void>
   */
  execute(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      console.log('NEW SDK 执行命令-> 开始')
      this.resolveFn = resolve;
      this.rejectFn = reject;
      if (!this.gatt) {
        return reject('Gatt 客户端设备实例为空');
      }

      //Gatt service
      let gattServiceList = await this.gatt.getServices()

      try {
        const service = gattServiceList.find(s => s.serviceUuid === this.serviceUuid);
        if (!service) {
          return reject(`NEW SDK 执行命令-> 未找到服务 ${this.serviceUuid}`);
        }

        const characteristic = service.characteristics.find(c => c.characteristicUuid === this.characteristicUuid);
        if (!characteristic) {
          return reject(`NEW SDK 执行命令-> 未找到特征 ${this.characteristicUuid}`);
        }

        // this.timer = setTimeout(() => {
        //   if (this.currentRetries < this.retries) {
        //     this.currentRetries++;
        //     console.log(`NEW SDK 执行命令-> 超时重试 开始 第${this.currentRetries}次重试`)
        //     this.execute().then(resolve).catch(reject);
        //   } else {
        //     console.log(`NEW SDK 执行命令-> 超时重试 结束 重试${this.currentRetries}次都失败了`)
        //     reject(`NEW SDK 执行命令-> 命令在 ${this.timeout}ms 后超时`);
        //   }
        // }, this.timeout);

        this.sendTimeoutManager.start(() => {
          this.retry()
          // if (this.currentRetries < this.retries) {
          //   this.currentRetries++;
          //   console.log(`NEW SDK 执行命令-> 超时重试 开始 第${this.currentRetries}次重试`);
          //   this.execute().then(resolve).catch(reject);
          // } else {
          //   console.log(`NEW SDK 执行命令-> 超时重试 结束 重试${this.currentRetries}次都失败了`);
          //   reject(`NEW SDK 执行命令-> 命令在 ${this.timeout}ms 后超时`);
          // }
        }, this.timeout);

        await this.writeCharacteristicValue(this.data, this.gatt, characteristic);
        //clearTimeout(timer);
        //resolve();
        // 不再直接调用 resolve，而是在收到设备回复时调用
      } catch (err) {
        reject(err);
      }
    });
  }

  // 当设备回复时调用
  async onDeviceResponse(responseData: ArrayBuffer) {
    console.log('NEW SDK 执行命令-> 结束 收到设备回复')
    //clearTimeout(this.timer);
    this.sendTimeoutManager.cancel();
    this.receiveTimeoutManager.start(() =>{
      this.retry()
    }, this.timeout);
    // this.resolveFn();
    // if (this.resolve) {
    //   this.resolve(responseData);
    // }
    //this.success(responseData);

    await this.storeData(responseData);
  }

  success(responseData: ArrayBuffer) {
    this.resolveFn();
    if (this.resolve) {
      this.resolve(responseData);
    }
  }

  failure() {
    this.rejectFn()
    if (this.reject){
      this.reject()
    }
  }

  //重试
  retry(){
    if (this.currentRetries < this.retries) {
      this.currentRetries++;
      console.log(`NEW SDK 执行命令-> 超时重试 开始 第${this.currentRetries}次重试`);
      this.execute().then(this.resolveFn).catch(this.rejectFn);
    } else {
      console.log(`NEW SDK 执行命令-> 超时重试 结束 重试${this.currentRetries}次都失败了`);
      this.rejectFn(Error(`NEW SDK 执行命令-> 命令在 ${this.timeout}ms 后超时`));
    }
  }

  private async storeData(data: ArrayBuffer | null){
    // Write data to the stream
    if (data) {
      await this.writeData(data);
    }

    if (this.storedData.byteLength >= 20){
      //头部数据 前20字节 (原来命令通道数据)
      const headerBytes = subArrayBuffer(this.storedData, 0, 20);
      //数据长度（不包含前20个字节）
      const dataSize = new TransmitCompleteCommand(headerBytes).dataSize;
      //数据是否接收完成
      let isComplete = this.storedData.byteLength === dataSize + 20;

      const headerBytesView = new Uint8Array(headerBytes);

      //码表返回出错了
      if (headerBytesView[0] === 0x02 && headerBytesView[7] !== 0x00) {
        console.log("NEW SDK", `${this.commandTag} ----错误----  errCode = ${headerBytesView[7]}， ${Array.from(headerBytesView).map(b => b.toString(16)).join(' ')}`);
        if (headerBytesView[7] === 0x01) {
          //重试
          this.retry()
          return;
        }
      }

      //---不等于01:表示只有20个头字节   其他值:20个头字节后面还有数据，需要根据数据长度判断是否完成
      if (headerBytesView[0] !== 0x01) {
        this.checkIsFinish(headerBytes);
        return;
      }

      //---是否获取文件 （比如：同步活动fit文件、获取Log文件 ） 头:20  pbSize：4   PB   文件
      const isGetFile = headerBytesView[3] === 0x55;//获取文件标识（文件获取 和 其他命令存在差别）

      if (isGetFile && this.storedData.byteLength >= 24){
        const pbSize = readInt32BE(this.storedData, 20);
        if (this.storedData.byteLength >= 24 + pbSize){
          const pbBytes = subArrayBuffer(this.storedData, 24, pbSize);

          const pbInfo = file_download.file_download.decode(new Uint8Array(pbBytes))

          //头:20字节   描述pb长度：4字节   PB   文件
          isComplete = this.storedData.byteLength === 20 + 4 + pbSize + pbInfo.fileSize;

          console.log("NEW SDK", `文件获取：fileSize = ${pbInfo.fileSize}`);
        }
      }

      console.log("NEW SDK", `isComplete = ${isComplete}, dataSize = ${dataSize}, mtuData = ${data?.byteLength}, all = ${this.storedData.byteLength}, isGetFile = ${isGetFile}, head = ${Array.from(headerBytesView).map(b => b.toString(16)).join(' ')}`);

      if (isComplete) {
        const begin = 20;
        const mData = subArrayBuffer(this.storedData, begin);

        //const.log("NEW SDK", `校验数据是否正确 fileVerifyVal = ${storeDataInfo.pbInfo?.fileVerifyVal}`);

        //校验数据是否正确  （对文件byteArray求和  和 设备返回的求和值比较 相等：数据正确  不相等：数据存在错误）
        // （支持校验的设备 && 630 && 读取活动fit）
        // if (storeDataInfo.pbInfo?.fileVerifyVal !== 0 && manager.iGPDeviceType?.deviceName === "iGS630" && commandTag === WriteCommand.ReadActivityFitFile) {
        //   const getFileBytesSum = new Uint8Array(mData).reduce((sum, byte) => sum + (byte & 0xFF), 0);
        //   const.log("NEW SDK", `校验数据是否正确 size = ${mData.byteLength}, sum = ${getFileBytesSum}, ${storeDataInfo.pbInfo?.fileVerifyVal}`);
        //
        //   if (getFileBytesSum !== storeDataInfo.pbInfo?.fileVerifyVal) {
        //     retry({ errorType: 'GetFitFilePartialByteError', checkData: null });
        //     return;
        //   }
        // }

        this.storedData = new ArrayBuffer(0);
        await this.writeData(mData);
        this.checkIsFinish(headerBytes);

      }

    }

  }

  isReceiveFinish: ((checkData: ArrayBuffer | null, storedData: Uint8Array) => boolean) | null = null;
  //translation: ((storedData: Uint8Array, checkData: ArrayBuffer | null) => object) | null = null;

  checkIsFinish(checkData: ArrayBuffer) {
    if (!this.isReceiveFinish) {
      throw new Error(" 需要设置 isReceiveFinish 方法");
    }

    // if (!this.translation) {
    //   throw new Error(" 需要设置 translation 方法");
    // }

    const storedDataByteArray = arrayBufferToByteArray(this.storedData);

    if (this.isReceiveFinish(checkData, storedDataByteArray)){
      this.sendTimeoutManager.cancel();
      this.receiveTimeoutManager.cancel();

      try {

        console.log("NEW SDK", `头部命令： ${HexUtil.arrayBufferToHex(checkData)}, [0]：${checkData ? new Uint8Array(checkData)[0] : null}, [7]：${checkData ? new Uint8Array(checkData)[7] : null}`);

        const checkDataView = new Uint8Array(checkData ?? new ArrayBuffer(0));

        //针对620wifi 做处理  （head[7]==0x17: 表示码表正在使用Wi-FiWi-Fi）
        if (checkDataView[0] === 0x02 && checkDataView[7] === 0x17){
          this.failure()
          return;
        }

        //02  06  不支持命令  执行下一个命令
        if (checkDataView[0] === 0x02 && checkDataView[7] === 0x06) {
          this.failure()
          return;
        }

        //02  01 数据错误  重试
        if (checkDataView[0] === 0x02 && checkDataView[7] === 0x01) {
          this.retry()
          return;
        }

        console.log("NEW SDK", `commandTag=${this.commandTag}  --命令成功！--`);
        this.success(this.storedData)

      } catch (e) {
        this.retry()
        console.log("NEW SDK", `checkIsFinish commandTag=${this.commandTag}  --异常！--`);
      }

    }


  }

  /**
   * 写入特征值
   * @param data 要写入的数据
   * @param gatt Gatt 客户端设备实例
   * @param characteristic 特征实例
   * @returns Promise<void>
   */
  private async writeCharacteristicValue(
    data: ArrayBuffer,
    gatt: ble.GattClientDevice | null,
    characteristic: ble.BLECharacteristic
  ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        if (gatt) {
          // 根据 MTUSize 分包
          const arrayBuffer = HexUtil.splitArrayBuffer(data, 20);
          for (let i = 0; i < arrayBuffer.length; i++) {
            const value = arrayBuffer[i]
            characteristic.characteristicValue = value
            await gatt.writeCharacteristicValue(characteristic, ble.GattWriteType.WRITE_NO_RESPONSE);
            console.log(`writeCharacteristicValue wrValue--> :  ${HexUtil.arrayBufferToHex(value)}`)
          }
          console.log('BluetoothPage writeCharacteristicValue finish');
          resolve();
        } else {
          reject(new Error('Gatt client device is null or undefined'));
        }
      } catch (err) {
        const errorCode = (err as BusinessError).code;
        const errorMessage = (err as BusinessError).message;
        console.error('errCode: ' + errorCode + ', errMessage: ' + errorMessage);
        reject(new Error(`errCode: ${errorCode}, errMessage: ${errorMessage}`));
      }

    });
  }
}

function concatenateArrayBuffers(buffers: ArrayBuffer[]): ArrayBuffer {
  const totalLength = buffers.reduce((acc, buffer) => acc + buffer.byteLength, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    result.set(new Uint8Array(buffer), offset);
    offset += buffer.byteLength;
  }
  return result.buffer;
}

function subArrayBuffer(buffer: ArrayBuffer, start: number, length?: number): ArrayBuffer {
  return buffer.slice(start, length ? start + length : undefined);
}

function readInt32BE(buffer: ArrayBuffer, offset: number): number {
  const view = new DataView(buffer);
  return view.getInt32(offset, false);
}

function arrayBufferToByteArray(buffer: ArrayBuffer): Uint8Array {
  return new Uint8Array(buffer);
}