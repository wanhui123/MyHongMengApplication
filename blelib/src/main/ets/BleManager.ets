import { ble, constant } from '@kit.ConnectivityKit'
import { BusinessError } from '@kit.BasicServicesKit'
import { HexUtil } from './utils/HexUtil'
import { BleCommandManager } from './BleCommandManager'
import { BleCommand } from './BleCommand'
import { TransmitCompleteCommand } from './TransmitCompleteCommand'
import { common } from './proto/common'
import { config } from './proto/config'
import { Head20BytesInfo } from './command/Head20BytesInfo'
import { cycling_data } from './proto/cycling_data'
import { FitUtil } from './utils/FitUtil'
import { FitActivityListInfo } from './data/FitActivityListInfo'
import { BaseHeaderData } from './command/BaseHeaderData'
import { FileDownloadResult, FileUtil } from './utils/FileUtil'
import { DeviceConnectStatus } from './data/DeviceConnectStatus'
import Observable from './utils/Observable'
import { ArrayBufferUtil } from './utils/ArrayBufferUtil'
import { sensor } from './proto/sensor'
import { ConfigService } from './services/ConfigService'
import { SensorService } from './services/SensorService'
import { ActivityService } from './services/ActivityService'
import { FirmwareService } from './services/FirmwareService'

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

   //同步活动相关
  activityService = new ActivityService(this)
  //传感器相关
  sensorService = new SensorService(this)
  //配置相关
  configService = new ConfigService(this);
  //固件相关(版本、更新)
  firmwareService = new FirmwareService(this);


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

  //设备连接状态
  deviceConnectStatus = new Observable<DeviceConnectStatus>();

  private constructor() {
    this.commandManager = new BleCommandManager();
  }

  public static create(): BleManager {
    return new BleManager()
  }

  public init(): void{
    console.log("BleManager initialization")
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

  //设备连接成功且通道加载完成
  isReady(): boolean {
    return this.deviceConnectStatus.getData() == DeviceConnectStatus.DeviceReady;
  }

  /**
   * 连接设备
   */
  connect(device: ble.ScanResult): ble.GattClientDevice | null {
    return this.connectById(device?.deviceId)
  }

  /**
   * 通过deviceId(address)连接设备
   * @param deviceId
   */
  connectById(deviceId: string): ble.GattClientDevice | null{
    const clientDevice = ble.createGattClientDevice(deviceId)
    this.gattClientDevice = clientDevice
    if (clientDevice) {

      //连接状态
      clientDevice.on('BLEConnectionStateChange', (state: ble.BLEConnectionChangeState) => {
        //let deviceId = state.deviceId;
        const connectState = state.state;
        console.log(`连接状态改变 state ${JSON.stringify(state)}`);

        switch (connectState) {
          case constant.ProfileConnectionState.STATE_DISCONNECTED: // 设备已断开连接
            this.deviceConnectStatus.notify(DeviceConnectStatus.DeviceDisconnected);
            break;

          case constant.ProfileConnectionState.STATE_CONNECTING: // 设备正在连接
            this.deviceConnectStatus.notify(DeviceConnectStatus.DeviceConnecting);
            break;

          case constant.ProfileConnectionState.STATE_CONNECTED: // 设备已连接
            this.deviceConnectStatus.notify(DeviceConnectStatus.DeviceConnected);
            this.getServices();
            break;

          case constant.ProfileConnectionState.STATE_DISCONNECTING: // 设备正在断开连接
            this.deviceConnectStatus.notify(DeviceConnectStatus.DeviceDisconnecting);
            break;

          default:
          // Handle unexpected states if necessary
            break;
        }

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
        //this.onBleCharacteristicChange()
      }

      //接收设备数据
      this.onBleCharacteristicChange()

      //通道加载完成
      this.deviceConnectStatus.notify(DeviceConnectStatus.DeviceReady)
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
  async writeUartRXCharacteristic(data: ArrayBuffer, isReceiveFinish: ((checkData: ArrayBuffer | null, storedData: Uint8Array) => boolean) | null): Promise<ArrayBuffer> {
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
  async writeThirdUartRXCharacteristic(
    data: ArrayBuffer,
    isReceiveFinish: ((checkData: ArrayBuffer | null, storedData: Uint8Array) => boolean) | null,
    retries: number = 0
  ): Promise<ArrayBuffer> {
    const command = new BleCommand(this.gattClientDevice, THIRD_UART_SERVICE_UUID, THIRD_UART_RX_CHARACTERISTIC_UUID, data);
    command.isReceiveFinish = isReceiveFinish
    command.setRetries(retries)
    this.addCommand(3, command);
    return command.awaitResponse()
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

  //-------------------------------------------  配置 相关命令 -----------------------------------------
  //写入声音配置
  // writeSoundSetting(soundSetMsg: config.sound_set_msg): Promise<ArrayBuffer> {
  //   const configMsg = config.config_msg.create({
  //     serviceType: common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG,
  //     configSeviceType:config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND,
  //     configOperateType: config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET,
  //     soundSetMessage: [soundSetMsg]
  //   })
  //   const sendPbBytes = config.config_msg.encode(configMsg).finish()
  //
  //   const headByteArray = new Head20BytesInfo()
  //     .setMainServiceType(common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG)
  //     .setMainOperationByte(config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET)
  //     .setSecondServiceByte(config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND)
  //     .setPbDataBytes(sendPbBytes)
  //     .confirmCommandByteArray()
  //
  //   const sendData = HexUtil.byteMerger(headByteArray,sendPbBytes)
  //
  //   const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
  //     if (!checkData) {
  //       return false
  //     }
  //     const completeCommand = new TransmitCompleteCommand(checkData)
  //     return completeCommand.mainService === common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
  //       && completeCommand.mainOperation === config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET
  //       && completeCommand.secondService === config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND;
  //   }
  //
  //   return this.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  // }
  //
  // /**
  //  * 读取自动配置
  //  */
  // async readAutomaticSetting(): Promise<config.Iauto_set_msg[]> {
  //   const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
  //   const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_AUTO
  //   const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_GET
  //   const commandTag = "readAutomaticSetting"
  //
  //   const configMsg = config.config_msg.create({
  //     serviceType: commandMainServiceType,
  //     configSeviceType:configServiceType,
  //     configOperateType: configOperateType,
  //   })
  //   const sendPbBytes = config.config_msg.encode(configMsg).finish()
  //
  //   const headByteArray = new Head20BytesInfo()
  //     .setMainServiceType(commandMainServiceType)
  //     .setMainOperationByte(configOperateType)
  //     .setSecondServiceByte(configServiceType)
  //     .setPbDataBytes(sendPbBytes)
  //     .confirmCommandByteArray()
  //
  //   const sendData = HexUtil.byteMerger(headByteArray,sendPbBytes)
  //
  //   const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
  //     if (!checkData) {
  //       return false
  //     }
  //     const completeCommand = new TransmitCompleteCommand(checkData)
  //     return completeCommand.mainService === commandMainServiceType
  //       && completeCommand.secondService === configServiceType
  //       && completeCommand.mainOperation === configOperateType
  //   }
  //
  //   const responseBytes = await this.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  //   const responseData:config.Iauto_set_msg[] = config.config_msg.decode(new Uint8Array(responseBytes)).autoSetMessage
  //   return responseData
  //
  // }
  //
  // /**
  //  * 写入自动配置
  //  */
  // async writeAutomaticSetting(...configs: config.auto_set_msg[]): Promise<boolean> {
  //   const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
  //   const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_AUTO
  //   const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET
  //   const commandTag = "writeAutomaticSetting"
  //
  //   const configMsg = config.config_msg.create({
  //     serviceType: commandMainServiceType,
  //     configSeviceType:configServiceType,
  //     configOperateType: configOperateType,
  //     autoSetMessage: configs,
  //   })
  //   const sendPbBytes = config.config_msg.encode(configMsg).finish()
  //
  //   const headByteArray = new Head20BytesInfo()
  //     .setMainServiceType(commandMainServiceType)
  //     .setMainOperationByte(configOperateType)
  //     .setSecondServiceByte(configServiceType)
  //     .setPbDataBytes(sendPbBytes)
  //     .confirmCommandByteArray()
  //
  //   const sendData = HexUtil.byteMerger(headByteArray,sendPbBytes)
  //
  //   const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
  //     if (!checkData) {
  //       return false
  //     }
  //     const completeCommand = new TransmitCompleteCommand(checkData)
  //     return completeCommand.mainService === commandMainServiceType
  //       && completeCommand.secondService === configServiceType
  //       && completeCommand.mainOperation === configOperateType
  //   }
  //
  //   const responseBytes = await this.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  //   return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  // }
  //
  // //-------------------------------------------  活动 相关命令 -----------------------------------------
  //
  //  //读取活动列表信息
  // async readActivityListInformation(): Promise<common.Ifile_list_get_message|undefined|null> {
  //   const msg = cycling_data.cycling_data_msg.create({
  //     serviceType: common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA,
  //     cyclingDataOperateType: cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET,
  //   })
  //   const sendPbBytes = cycling_data.cycling_data_msg.encode(msg).finish()
  //
  //   const headByteArray = new Head20BytesInfo()
  //     .setMainServiceType(common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA)
  //     .setMainOperationByte(cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET)
  //     .setPbDataBytes(sendPbBytes)
  //     .confirmCommandByteArray()
  //
  //   const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)
  //
  //   const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
  //     if (!checkData) {
  //       return false
  //     }
  //     const completeCommand = new TransmitCompleteCommand(checkData)
  //     return completeCommand.mainService === common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA
  //       && completeCommand.mainOperation === cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET;
  //   }
  //
  //   const responseBytes = await this.writeThirdUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  //   const responseData:common.Ifile_list_get_message|undefined|null = cycling_data.cycling_data_msg.decode(new Uint8Array(responseBytes)).listMsg
  //   return responseData
  // }
  //
  // //读取活动列表
  // async readActivityList(range: common.file_list_get_message | null = null): Promise<FitActivityListInfo[]> {
  //   const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA
  //   const commandOperateType = cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_GET
  //   const commandTag = "readActivityList"
  //
  //   const msg = cycling_data.cycling_data_msg.create({
  //     serviceType: commandServiceType,
  //     cyclingDataOperateType: commandOperateType,
  //     listMsg: range
  //   })
  //   const sendPbBytes = cycling_data.cycling_data_msg.encode(msg).finish()
  //
  //   const headByteArray = new Head20BytesInfo()
  //     .setMainServiceType(commandServiceType)
  //     .setMainOperationByte(commandOperateType)
  //     .setPbDataBytes(sendPbBytes)
  //     .confirmCommandByteArray()
  //
  //   const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)
  //
  //   const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
  //     if (!checkData) {
  //       return false
  //     }
  //     const completeCommand = new TransmitCompleteCommand(checkData)
  //     return completeCommand.mainService === commandServiceType
  //       && (completeCommand.mainOperation === commandOperateType
  //         || completeCommand.mainOperation === cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_SEND);
  //   }
  //
  //   const responseBytes = await this.writeThirdUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  //   const responseData = FitUtil.parseActivityList(responseBytes)
  //   return responseData
  // }
  //
  // //获取某一条活动FIT文件
  // async readActivityFitFile(id: number): Promise<FileDownloadResult> {
  //   const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA
  //   const commandOperateType = cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_FILE_GET
  //   const commandTag = "readActivityFitFile"
  //
  //   const msg = cycling_data.cycling_data_msg.create({
  //     serviceType: commandServiceType,
  //     cyclingDataOperateType: commandOperateType,
  //     cyclingDataFileFlagMsg: [
  //       cycling_data.cycling_data_file_flag_message.create({
  //         timestamp: id
  //       })
  //     ]
  //   })
  //   const sendPbBytes = cycling_data.cycling_data_msg.encode(msg).finish()
  //
  //   const headByteArray = new Head20BytesInfo()
  //     .setMainServiceType(commandServiceType)
  //     .setMainOperationByte(commandOperateType)
  //     .setPbDataBytes(sendPbBytes)
  //     .confirmCommandByteArray()
  //   let head = new TransmitCompleteCommand(headByteArray.buffer as ArrayBuffer).getByteArray()
  //   head[3] = 0x55 //获取文件标识（文件上传或者文件下载需要）
  //
  //   const sendData = HexUtil.byteMerger(BaseHeaderData.updateCRC(head), sendPbBytes)
  //
  //   const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
  //     if (!checkData) {
  //       return false
  //     }
  //     const completeCommand = new TransmitCompleteCommand(checkData)
  //     return completeCommand.mainService === commandServiceType
  //       && completeCommand.mainOperation === cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_FILE_SEND;
  //   }
  //
  //   const responseBytes = await this.writeThirdUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  //   const responseData = FileUtil.getFileInfoAndFile(responseBytes)
  //   return responseData
  // }
  //
  // //-------------------------------------------  传感器 相关命令 -----------------------------------------
  //
  // //读取传感器列表
  // async readSensorList():Promise<sensor.Isensor_data_message[]> {
  //   const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_SENSOR
  //   const commandOperateType = sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_GET
  //   const commandTag = "readSensorList"
  //
  //   const msg = sensor.sensor_message.create({
  //     serviceType: commandServiceType,
  //     sensorOperateType: commandOperateType
  //   })
  //
  //   const sendPbBytes = sensor.sensor_message.encode(msg).finish()
  //
  //   const headByteArray = new Head20BytesInfo()
  //     .setMainServiceType(commandServiceType)
  //     .setMainOperationByte(commandOperateType)
  //     .setPbDataBytes(sendPbBytes)
  //     .confirmCommandByteArray()
  //
  //   const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)
  //
  //   const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
  //     if (!checkData) {
  //       return false
  //     }
  //     const completeCommand = new TransmitCompleteCommand(checkData)
  //     return completeCommand.mainService === commandServiceType
  //       && completeCommand.mainOperation === sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_SEND
  //   }
  //
  //   const responseBytes = await this.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  //   const responseData:sensor.Isensor_data_message[] = sensor.sensor_message.decode(new Uint8Array(responseBytes)).sensorDataMsg
  //   return responseData
  // }
  //
  // //连接指定传感器
  // async connectSensor(sensorDataMsg: sensor.sensor_data_message): Promise<boolean> {
  //   const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_SENSOR
  //   const commandOperateType = sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_CONNECT
  //   const commandTag = "connectSensor"
  //
  //   const msg = sensor.sensor_message.create({
  //     serviceType: commandServiceType,
  //     sensorOperateType: commandOperateType,
  //     sensorDataMsg:[sensorDataMsg]
  //   })
  //
  //   const sendPbBytes = sensor.sensor_message.encode(msg).finish()
  //
  //   const headByteArray = new Head20BytesInfo()
  //     .setMainServiceType(commandServiceType)
  //     .setMainOperationByte(commandOperateType)
  //     .setPbDataBytes(sendPbBytes)
  //     .confirmCommandByteArray()
  //
  //   const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)
  //
  //   const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
  //     if (!checkData) {
  //       return false
  //     }
  //     const completeCommand = new TransmitCompleteCommand(checkData)
  //     return completeCommand.mainService === commandServiceType
  //       && completeCommand.mainOperation === commandOperateType
  //   }
  //
  //   const responseBytes = await this.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  //   return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  // }

}

export default BleManager;