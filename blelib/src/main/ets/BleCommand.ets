import { ble } from '@kit.ConnectivityKit';
import { HexUtil } from './utils/HexUtil';
import { BusinessError } from '@kit.BasicServicesKit';

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

  // 用于标识命令是否完成的标志
  private resolveFn: () => void = () => {};
  private rejectFn: (reason?: object) => void = () => {};
  private timer: number|null = null;

  private resolve: ((value: ArrayBuffer | PromiseLike<ArrayBuffer>) => void) | null = null;
  private reject: ((reason?: object) => void) | null = null;
  private promise: Promise<ArrayBuffer>;

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
    retries: number = 3
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

        this.timer = setTimeout(() => {
          if (this.currentRetries < this.retries) {
            this.currentRetries++;
            console.log(`NEW SDK 执行命令-> 超时重试 开始 第${this.currentRetries}次重试`)
            this.execute().then(resolve).catch(reject);
          } else {
            console.log(`NEW SDK 执行命令-> 超时重试 结束 重试${this.currentRetries}次都失败了`)
            reject(`NEW SDK 执行命令-> 命令在 ${this.timeout}ms 后超时`);
          }
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
  onDeviceResponse(responseData: ArrayBuffer) {
    console.log('NEW SDK 执行命令-> 结束 收到设备回复')
    clearTimeout(this.timer);
    this.resolveFn();
    if (this.resolve) {
      this.resolve(responseData);
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