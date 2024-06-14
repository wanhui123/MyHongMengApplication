import { ble, constant } from '@kit.ConnectivityKit'
import { BusinessError } from '@kit.BasicServicesKit'
import { HexUtil } from './utils/HexUtil'
import { BleCommandManager } from './BleCommandManager'
import { BleCommand } from './BleCommand'
import { TransmitCompleteCommand } from './TransmitCompleteCommand'
import { common } from './proto/common'
import { config } from './proto/config'
import { Head20BytesInfo } from './command/Head20BytesInfo'

//通道1
const UART_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"
const UART_RX_Characteristic_UUID = "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"//手机用于发送给设备
const UART_TX_Characteristic_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"//手机用于接收

//通道2
const CONTROL_UART_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA8E"
const CONTROL_RX_CHARACTERISTIC_UUID = "6E400002-B5A3-F393-E0A9-E50E24DCCA8E"
const CONTROL_TX_CHARACTERISTIC_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA8E"

//通道3
const THIRD_UART_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA7E"
const THIRD_UART_RX_CHARACTERISTIC_UUID = "6E400002-B5A3-F393-E0A9-E50E24DCCA7E"
const THIRD_UART_TX_CHARACTERISTIC_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA7E"

//通道4
const FOURTH_UART_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA6E"
const FOURTH_UART_RX_CHARACTERISTIC_UUID = "6E400002-B5A3-F393-E0A9-E50E24DCCA6E"
const FOURTH_UART_TX_CHARACTERISTIC_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA6E"

//Battery服务
const BATTERY_SERVICE_UUID = "0000180F-0000-1000-8000-00805F9B34FB"
const BATTERY_LEVEL_CHARACTERISTIC_UUID = "00002A19-0000-1000-8000-00805F9B34FB"

 class BleManager{
  private commandManager: BleCommandManager;

   //Gatt 客户端设备实例
  private gattClientDevice: ble.GattClientDevice | null = null;

  //通道1 的服务信息
  gattServiceInfo: ble.GattService | undefined = undefined;
  //通道2 的服务信息
  uart2gattServiceInfo: ble.GattService | undefined = undefined;
  //通道3 的服务信息
  uart3gattServiceInfo: ble.GattService | undefined = undefined;
  //通道4 的服务信息
  uart4gattServiceInfo: ble.GattService | undefined = undefined;

  //电池 的服务信息
  batteryGattServiceInfo: ble.GattService | undefined = undefined;

  //连接状态
  private connectionState: ble.BLEConnectionChangeState | null = null;
  //连接状态观察者
  private connectionStateObservers: ((state: ble.BLEConnectionChangeState | null) => void)[] = [];

  private constructor() {
    this.commandManager = new BleCommandManager();
  }

  public static create(): BleManager {
    return new BleManager()
  }

  public init(): void{
    console.log("BleManager initialization")
  }

  // 设置连接状态，并通知观察者（连接状态）
  private setConnectionState(state: ble.BLEConnectionChangeState | null) {
    this.connectionState = state;
    this.notifyObservers();
  }

  // 添加观察者（连接状态）
  addObserver(observer: (state: ble.BLEConnectionChangeState | null) => void) {
    this.connectionStateObservers.push(observer);
    // 如果连接状态已经存在，则立即通知观察者
    if (this.connectionState !== null) {
      observer(this.connectionState);
    }
  }

  // 移除观察者（连接状态）
  removeObserver(observer: (state: ble.BLEConnectionChangeState | null) => void) {
    const index = this.connectionStateObservers.indexOf(observer);
    if (index !== -1) {
      this.connectionStateObservers.splice(index, 1);
    }
  }

  // 通知观察者连接状态变化（连接状态）
  private notifyObservers() {
    for (const observer of this.connectionStateObservers) {
      observer(this.connectionState);
    }
  }

  /**
   * client获取远端蓝牙低功耗设备名
   */
  getDeviceName(): Promise<string> {
    return new Promise((resolve, reject) => {
      const gattClient = this.gattClientDevice
      if(gattClient == null) {
        reject("gattClientDevice is null")
        return
      }
      gattClient.getDeviceName((err: BusinessError, data: string) => {
        if (err) {
          console.info('device name err ' + JSON.stringify(err));
          reject(err);
        } else {
          console.info('device name ' + JSON.stringify(data));
          resolve(data);
        }
      });
    });
  }

  /**
   * 连接设备
   */
  connect(device: ble.ScanResult): ble.GattClientDevice | null {
    const clientDevice = ble.createGattClientDevice(device?.deviceId)
    this.gattClientDevice = clientDevice
    if (clientDevice) {

      //连接状态
      clientDevice.on('BLEConnectionStateChange', (state: ble.BLEConnectionChangeState) => {
        console.log('BluetoothPage bluetooth connect state changed');
        let deviceId = state.deviceId;
        console.log('BluetoothPage deviceId connectState ' + deviceId);
        const connectState = state.state;

        console.log('BluetoothPage bluetooth connectState ' + JSON.stringify(state));

        //已连接
        if (connectState == constant.ProfileConnectionState.STATE_CONNECTED) {
          this.getServices()
        }
        
        this.setConnectionState(state); // 设置连接状态
      })

      //连接
      try {
        this.gattClientDevice.connect()
      } catch (e) {

      }

    }
    return clientDevice
  }

  /**
   * client端断开与远端蓝牙低功耗设备的连接 （断开ble设备）
   */
  disconnect() {
    const gattClient = this.gattClientDevice
    if (gattClient) {
      //gattClient.off('BLEConnectionStateChange')
      gattClient.disconnect()
    }
  }

  /**
   * client端获取蓝牙低功耗设备的所有服务，即服务发现 (获取所有服务)
   */
  private async getServices() {
    if (this.gattClientDevice) {
      const result: Array<ble.GattService> = await this.gattClientDevice.getServices();
      console.info('getServices successfully:' + JSON.stringify(result));

      let gatt = this.gattClientDevice;

      for (const item of result) {
        console.info('getServices item= ' + JSON.stringify(item));

        // 通道1
        if (item.serviceUuid === UART_SERVICE_UUID) {
          this.gattServiceInfo = item;
          const characteristic = item.characteristics.find(c => c.characteristicUuid === UART_TX_Characteristic_UUID);
          console.log(`getServices 通道1 characteristic = '${characteristic?.characteristicUuid}'`);
          // setNotification
          if (characteristic) {
            const success = await this.setNotificationChannel(gatt, item, characteristic, true);
            if (success) {
              console.log(`Notification set successfully for characteristic（通道1） ${characteristic.characteristicUuid}`);
            } else {
              console.log(`Failed to set notification for characteristic（通道1） ${characteristic.characteristicUuid}`);
            }
          }
        }
        // 通道2
        else if (item.serviceUuid === CONTROL_UART_SERVICE_UUID) {
          this.uart2gattServiceInfo = item;
          const characteristic = item.characteristics.find(c => c.characteristicUuid === CONTROL_TX_CHARACTERISTIC_UUID);
          console.log(`getServices 通道2 characteristic = '${characteristic?.characteristicUuid}'`);
          // setNotification
          if (characteristic) {
            const success = await this.setNotificationChannel(gatt, item, characteristic, true);
            if (success) {
              console.log(`Notification set successfully for characteristic（通道2） ${characteristic.characteristicUuid}`);
            } else {
              console.log(`Failed to set notification for characteristic（通道2） ${characteristic.characteristicUuid}`);
            }
          }
        }
        // 通道3
        else if (item.serviceUuid === THIRD_UART_SERVICE_UUID) {
          this.uart3gattServiceInfo = item;
          const characteristic = item.characteristics.find(c => c.characteristicUuid === THIRD_UART_TX_CHARACTERISTIC_UUID);
          console.log(`getServices 通道3 characteristic = '${characteristic?.characteristicUuid}'`);
          // setNotification
          if (characteristic) {
            const success = await this.setNotificationChannel(gatt, item, characteristic, true);
            if (success) {
              console.log(`Notification set successfully for characteristic（通道3） ${characteristic.characteristicUuid}`);
            } else {
              console.log(`Failed to set notification for characteristic（通道3） ${characteristic.characteristicUuid}`);
            }
          }
        }
        // 通道4
        else if (item.serviceUuid === FOURTH_UART_SERVICE_UUID) {
          this.uart4gattServiceInfo = item;
          const characteristic = item.characteristics.find(c => c.characteristicUuid === FOURTH_UART_TX_CHARACTERISTIC_UUID);
          console.log(`getServices 通道4 characteristic = '${characteristic?.characteristicUuid}'`);
          // setNotification
          if (characteristic) {
            const success = await this.setNotificationChannel(gatt, item, characteristic, true);
            if (success) {
              console.log(`Notification set successfully for characteristic（通道4） ${characteristic.characteristicUuid}`);
            } else {
              console.log(`Failed to set notification for characteristic（通道4） ${characteristic.characteristicUuid}`);
            }
          }
        }
        //电池
        else if (item.serviceUuid == BATTERY_SERVICE_UUID){
          this.batteryGattServiceInfo = item
          console.log(`getServices 电池服务 `);
        }

        //this.onBLEMtuChange()

        //接收设备数据
        this.onBleCharacteristicChange()
      }
    }
  }

  /**
   * 向服务端发送设置通知此indicate征值请求
   */
  private async setNotificationChannel(
    gatt: ble.GattClientDevice | null ,
    gattService: ble.GattService | undefined,
    characteristic: ble.BLECharacteristic,
    enable: boolean
  ): Promise<boolean>{
    if (!gattService) {
      console.log('bluetooth gattServiceInfo is undefined ');
      return false; // 返回失败
    }

    if (gatt == null){
      console.log('gatt is null')
      return false; // 返回失败
    }

    try {
      if (gatt) {
        console.log(`setNotificationChannel characteristic UUID: ${characteristic.characteristicUuid}, enable: ${enable}`);
        await gatt?.setCharacteristicChangeNotification(characteristic, enable)
        console.log('BluetoothPage setCharacteristicChangeNotification finish');
        return true; // 返回成功
      }
    } catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
      return false; // 返回失败
    }
    return false; // 如果没有gatt，返回失败
  }

  /**
   * 订阅蓝牙低功耗设备的特征值变化事件 (接收消息)
   */
  private onBleCharacteristicChange() {
    try {
      if (this.gattClientDevice) {
        //监听
        this.gattClientDevice.on('BLECharacteristicChange', (characteristicChangeReq: ble.BLECharacteristic) => {
          let serviceUuid: string = characteristicChangeReq.serviceUuid;
          let characteristicUuid: string = characteristicChangeReq.characteristicUuid;
          //let value: Uint8Array = new Uint8Array(characteristicChangeReq.characteristicValue);
          //console.log('BluetoothPage BLECharacteristicChange value = ' + JSON.stringify(characteristicChangeReq));
          const characteristicValue = characteristicChangeReq.characteristicValue
          //console.log( `BluetoothPage BLECharacteristicChange Hex: `+ Utils.arrayBufferToHex(characteristicValue))

          //通道1
          if(serviceUuid == UART_SERVICE_UUID){
            console.log(`NEW SDK Channel 1<------ Receive data: ${HexUtil.arrayBufferToHex(characteristicValue)} , for: ${characteristicUuid} `)
            this.commandManager.onDeviceResponse(1, characteristicValue);
          }
          //通道2
          else if (serviceUuid === CONTROL_UART_SERVICE_UUID){
            console.log(`NEW SDK Channel 2<------ Receive data: ${HexUtil.arrayBufferToHex(characteristicValue)} , for: ${characteristicUuid} `)

            //收到外设主动发送的信息(2代、3代、4代)
            if(characteristicValue.byteLength > 0 && new Uint8Array(characteristicValue)[0] === 0x03){
              const completeCommand = new TransmitCompleteCommand(characteristicValue)
              console.log(`NEW SDK Channel 2 <-------收到外设主动发送的信息: ${HexUtil.arrayBufferToHex(characteristicValue)}`)
              return
            }
            //this.commandManager.onDeviceResponse(2, characteristicValue);
          }
          //通道3
          else if (serviceUuid === THIRD_UART_SERVICE_UUID){
            console.log(`NEW SDK Channel 3<------ Receive data: ${HexUtil.arrayBufferToHex(characteristicValue)} , for: ${characteristicUuid} `)
            this.commandManager.onDeviceResponse(3, characteristicValue);
          }
          //通道4
          else if (serviceUuid === THIRD_UART_SERVICE_UUID){
            console.log(`NEW SDK Channel 4<------ Receive data: ${HexUtil.arrayBufferToHex(characteristicValue)} , for: ${characteristicUuid} `)
            this.commandManager.onDeviceResponse(4, characteristicValue);
          }

        })
        //this.bleCharChangeSwitch = true;
        console.log('BluetoothPage bleCharacteristicChange ');
      }
    } catch (err) {
      console.error('bleCharacteristicChange errCode: ' + (err as BusinessError).code + ', errMessage: ' +
      (err as BusinessError).message);
    }
  }

  //写特征值
  private async writeCharacteristicValue(
    data: ArrayBuffer,
    gatt: ble.GattClientDevice | null | undefined,
    characteristic: ble.BLECharacteristic,
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

  /**
   * client端读取蓝牙低功耗设备特定服务的特征值 (读取指定通道的特征)
   */
  private async readCharacteristicValue(
    gatt: ble.GattClientDevice | null | undefined,
    characteristic: ble.BLECharacteristic,
  ): Promise<ArrayBuffer | null> {
    return new Promise<ArrayBuffer | null>(async (resolve, reject) => {
      if (!gatt) {
        console.log('gatt is not available ');
        resolve(null);
      }

      try {
        if (gatt) {
          const bleCharacteristicDataOut = await gatt.readCharacteristicValue(characteristic);
          const characteristicValue: ArrayBuffer = bleCharacteristicDataOut.characteristicValue;
          console.info(`NEW SDK readCharacteristicValue : ${HexUtil.arrayBufferToHex(characteristicValue)}, for: ${bleCharacteristicDataOut.characteristicUuid}`);
          resolve(characteristicValue);
        }
      } catch (err) {
        const errorMessage = 'Error occurred while reading characteristic value';
        console.error(errorMessage + ', err: ', err);
        reject(new Error(errorMessage));
      }
    });
  }


  /**
   * 添加命令并执行
   * @param channel 通道编号
   * @param command 命令实例
   */
  private addCommand(channel: number, command: BleCommand) {
    this.commandManager.addCommand(channel, command);
  }

  /**
   * 通道1 写特征
   * @param data 要写入的数据
   * @returns Promise<void>
   */
  private async writeUartRXCharacteristic(data: ArrayBuffer, isReceiveFinish: ((checkData: ArrayBuffer | null, storedData: Uint8Array) => boolean) | null): Promise<ArrayBuffer> {
    const command = new BleCommand(this.gattClientDevice, UART_SERVICE_UUID, UART_RX_Characteristic_UUID, data);
    command.isReceiveFinish = isReceiveFinish
    this.addCommand(1, command);
    return command.awaitResponse()
  }

  /**
   * 通道2 写特征
   * @param data 要写入的数据
   * @returns Promise<void>
   */
  private async writeControlUartRXCharacteristic(data: ArrayBuffer): Promise<void> {
    const command = new BleCommand(this.gattClientDevice, CONTROL_UART_SERVICE_UUID, CONTROL_RX_CHARACTERISTIC_UUID, data);
    this.addCommand(2, command);
  }

  /**
   * 通道3 写特征
   * @param data 要写入的数据
   * @returns Promise<void>
   */
  private async writeThirdUartRXCharacteristic(data: ArrayBuffer): Promise<void> {
    const command = new BleCommand(this.gattClientDevice, THIRD_UART_SERVICE_UUID, THIRD_UART_RX_CHARACTERISTIC_UUID, data);
    this.addCommand(3, command);
  }

  /**
   * 通道4 写特征
   * @param data 要写入的数据
   * @returns Promise<void>
   */
  private async writeFourthUartRXCharacteristic(data: ArrayBuffer): Promise<void> {
    const command = new BleCommand(this.gattClientDevice, FOURTH_UART_SERVICE_UUID, FOURTH_UART_RX_CHARACTERISTIC_UUID, data);
    this.addCommand(4, command);
  }

  //通道1 写特征
  // async writeUartRXCharacteristic(data: ArrayBuffer): Promise<void> {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const uartRxCharacteristic = this.gattServiceInfo?.characteristics.find(c => c.characteristicUuid === UART_RX_Characteristic_UUID);
  //       if (uartRxCharacteristic) {
  //         await this.writeCharacteristicValue(data, this.gattClientDevice, uartRxCharacteristic);
  //         resolve();
  //       } else {
  //         reject(new Error('UART RX Characteristic not found'));
  //       }
  //     } catch (err) {
  //       reject(err);
  //     }
  //   });
  // }
  //
  // //通道2 写特征
  // async readControlUartRXCharacteristic(data: ArrayBuffer): Promise<void> {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const uartRxCharacteristic = this.uart2gattServiceInfo?.characteristics.find(c => c.characteristicUuid === CONTROL_RX_CHARACTERISTIC_UUID);
  //       if (uartRxCharacteristic) {
  //         await this.writeCharacteristicValue(data, this.gattClientDevice, uartRxCharacteristic);
  //         resolve();
  //       } else {
  //         reject(new Error('CONTROL RX Characteristic not found'));
  //       }
  //     } catch (err) {
  //       reject(err);
  //     }
  //   });
  // }
  //
  // //通道3 写特征
  // async readThirdUartRXCharacteristic(data: ArrayBuffer): Promise<void> {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const uartRxCharacteristic = this.uart3gattServiceInfo?.characteristics.find(c => c.characteristicUuid === THIRD_UART_RX_CHARACTERISTIC_UUID);
  //       if (uartRxCharacteristic) {
  //         await this.writeCharacteristicValue(data, this.gattClientDevice, uartRxCharacteristic);
  //         resolve();
  //       } else {
  //         reject(new Error('CONTROL RX Characteristic not found'));
  //       }
  //     } catch (err) {
  //       reject(err);
  //     }
  //   });
  // }
  //
  // //通道4 写特征
  // async readFourthUartRXCharacteristic(data: ArrayBuffer): Promise<void> {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const uartRxCharacteristic = this.uart4gattServiceInfo?.characteristics.find(c => c.characteristicUuid === FOURTH_UART_RX_CHARACTERISTIC_UUID);
  //       if (uartRxCharacteristic) {
  //         await this.writeCharacteristicValue(data, this.gattClientDevice, uartRxCharacteristic);
  //         resolve();
  //       } else {
  //         reject(new Error('CONTROL RX Characteristic not found'));
  //       }
  //     } catch (err) {
  //       reject(err);
  //     }
  //   });
  // }

  //-------------------------------------------  读取设备特征相关 -----------------------------------------

  /**
   * 读取电池电量
   */
  async readBattery() : Promise<ArrayBuffer | null>{
    const batteryCharacteristic = this.batteryGattServiceInfo?.characteristics.find(c => c.characteristicUuid === BATTERY_LEVEL_CHARACTERISTIC_UUID);
    if(batteryCharacteristic){
      try {
        const characteristicValue = await this.readCharacteristicValue(this.gattClientDevice, batteryCharacteristic)
        return characteristicValue
      }catch (error) {
        console.error('Error occurred while reading characteristic value:', error);
      }
    }
    return null
  }

   //-------------------------------------------  发送数据给设备 相关命令 -----------------------------------------

  //写入声音配置
  writeSoundSetting(soundSetMsg: config.sound_set_msg): Promise<ArrayBuffer> {
    const configMsg = config.config_msg.create({
      serviceType: common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG,
      configSeviceType:config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND,
      configOperateType: config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET,
      soundSetMessage: [soundSetMsg]
    })
    const sendPbBytes = config.config_msg.encode(configMsg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG)
      .setMainOperationByte(config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET)
      .setSecondServiceByte(config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray,sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
        && completeCommand.mainOperation === config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET
        && completeCommand.secondService === config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND;
    }

    return this.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  }



}

export default BleManager;