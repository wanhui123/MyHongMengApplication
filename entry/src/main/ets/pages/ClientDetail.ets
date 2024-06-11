import { ble, constant } from '@kit.ConnectivityKit';
import { promptAction, router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import Utils from '../utils/Util';

import { BleManager } from '@ohos/blebib'

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


@Entry
@Component
struct ClientDetail {
  device: ble.ScanResult = router.getParams() as ble.ScanResult;

  bleManager = BleManager.create()

  @State gattClient: ble.GattClientDevice | undefined = undefined;
  @State deviceName: string = '';

  //连接开关 （可以移除）
  @State connectSwitch: boolean = false;

  //开启 or 关闭 连接状态监听
  @State stateListenSwitch: boolean = false;
  //是否连接成功
  @State connectStateSwitch: boolean = false;
  //连接状态
  @State connectState: ble.ProfileConnectionState = constant.ProfileConnectionState.STATE_DISCONNECTED;

  //通道1 的服务信息
  @State gattServiceInfo: ble.GattService | undefined = undefined;
  //通道2 的服务信息
  @State uart2gattServiceInfo: ble.GattService | undefined = undefined;
  //通道3 的服务信息
  @State uart3gattServiceInfo: ble.GattService | undefined = undefined;
  //通道4 的服务信息
  @State uart4gattServiceInfo: ble.GattService | undefined = undefined;
  //电池 的服务信息
  @State batteryGattServiceInfo: ble.GattService | undefined = undefined;

  @State characteristicValue: string = '';

  @State bleCharChangeSwitch: boolean = false;

  @State writeValueRecording: Array<string> = [];

  @State cValue: string = '';


  observerToRemove = (state: ble.BLEConnectionChangeState | null) => {
    // 观察者函数的逻辑
    console.log('BluetoothPage bluetooth connect state changed');
    let deviceId = state?.deviceId;
    console.log('BluetoothPage deviceId connectState ' + deviceId);
    this.connectState = state!.state;

    //已断开连接
    if (this.connectState == constant.ProfileConnectionState.STATE_DISCONNECTED) {
      this.connectStateSwitch = false;
    }

    //已连接
    if (this.connectState == constant.ProfileConnectionState.STATE_CONNECTED) {
      this.connectStateSwitch = true;
    }
    console.log('BluetoothPage bluetooth connectState ' + JSON.stringify(this.connectState));
  };

  aboutToAppear(): void {
    if (!this.gattClient) {
      this.gattClient = ble.createGattClientDevice(this.device?.deviceId);
      this.getDeviceName()
    }

    this.bleManager.addObserver(this.observerToRemove)
  }

  aboutToDisappear(): void {
    this.bleManager.removeObserver(this.observerToRemove);
  }

  build() {
    Scroll(){
      Column({ space: 10 }){
        Text() {
          Span('设备名称：  ')
          Span(this.deviceName)
        }
        .itemStyle()

        //连接状态
        Row() {
          Text('连接状态')
          Blank()
          if (this.connectState == constant.ProfileConnectionState.STATE_CONNECTING) {
            LoadingProgress().height(15).width(15)
          } else {
            Toggle({ type: ToggleType.Switch, isOn: this.connectStateSwitch })
              .enabled(false)
          }
        }
        .itemStyle()

        //连接
        Row() {
          Text('连接开关')
          Blank()
          Toggle({ type: ToggleType.Switch, isOn: this.connectSwitch })
            .onChange((isOn: boolean) => {
              if (isOn) {
                this.connectServer()
              } else {
                this.disconnectServer()
              }
              console.info('ble server instanceSwitch status:' + isOn)
            })
        }
        .itemStyle()

        //读取指定通道（电量）的特征
        Column({ space: 10 }) {
          Button('client端读取蓝牙低功耗设备电量的特征值').onClick(async () => {
            const characteristicValue = await this.bleManager.readBattery()
            if (characteristicValue) {
              // 创建一个DataView来读取ArrayBuffer
              const dataView = new DataView(characteristicValue);
              // 从DataView中获取第一个字节的值
              const firstByte = dataView.getUint8(0); // 这里假设你想要获取的是无符号整数
              this.characteristicValue = '特征值：' + firstByte;
            }

          })

          Scroll() {
            if (this.characteristicValue) {
              Text(JSON.stringify(this.characteristicValue))
            } else {
              Text('暂无数据')
            }
          }
          .height(50)
          .scrollBar(BarState.Off)
        }
        .itemStyle()

        //写特征值(630按键音 开)
        Row() {
          TextInput({ text: this.cValue })
            .onChange((value: string) => {
              this.cValue = value
            })
            .width('50%')
            .height(40)
            .borderRadius(0)
          Button('写特征值 (按键音 开)').onClick(() => {
            //let data = Utils.hexStringWithoutSpacesToArrayBuffer("01 6A 03 FF 01 FF FF 00 0A A8 01 FF FF FF FF FF FF FF FF F9 08 6A 10 01 18 03 62 02 08 40")//VS1800 自定义模式设置
            let data = Utils.hexStringWithoutSpacesToArrayBuffer("01 0C 11 FF 01 FF FF 00 0F F4 01 FF FF FF FF FF FF FF FF E7 08 0C 10 11 18 01 CA 01 06 08 20 10 01 18 01")
            this.bleManager.writeUartRXCharacteristic(data)
          })
            .type(ButtonType.Normal)
            .width('25%')
        }

        //写特征值 (630按键音 关)
        Row() {
          TextInput({ text: this.cValue })
            .onChange((value: string) => {
              this.cValue = value
            })
            .width('50%')
            .height(40)
            .borderRadius(0)
          Button('写特征值 (按键音 关)').onClick(() => {
            let data = Utils.hexStringWithoutSpacesToArrayBuffer("01 0C 11 FF 01 FF FF 00 0F AA 01 FF FF FF FF FF FF FF FF 32 08 0C 10 11 18 01 CA 01 06 08 20 10 01 18 00")
            this.bleManager.writeUartRXCharacteristic(data)
          })
            .type(ButtonType.Normal)
            .width('25%')
        }


      }
      .width('100%')
      .padding({
        left: 15,
        right: 15,
        top: 20,
        bottom: 20
      })
      .backgroundColor($r('app.color.light_gray'))
    }
    .scrollBar(BarState.Off)
  }

  /**
   * client获取远端蓝牙低功耗设备名
   */
  getDeviceName() {
    if (this.gattClient) {
      this.gattClient.getDeviceName((err: BusinessError, data: string) => {
        console.info('device name err ' + JSON.stringify(err));
        console.info('device name' + JSON.stringify(data));
        this.deviceName = data
      })
    }
  }

  /**
   * 添加连接状态变化事件监听
   */
  onBLEConnectionStateChange() {
    if (this.gattClient) {
      this.gattClient.on('BLEConnectionStateChange', (state: ble.BLEConnectionChangeState) => {
        console.log('BluetoothPage bluetooth connect state changed');
        let deviceId = state.deviceId;
        console.log('BluetoothPage deviceId connectState ' + deviceId);
        this.connectState = state.state;

        //已断开连接
        if (this.connectState == constant.ProfileConnectionState.STATE_DISCONNECTED) {
          this.connectStateSwitch = false;
        }

        //已连接
        if (this.connectState == constant.ProfileConnectionState.STATE_CONNECTED) {
          this.connectStateSwitch = true;
        }
        console.log('BluetoothPage bluetooth connectState ' + JSON.stringify(this.connectState));
      })
      this.stateListenSwitch = true;
    }
  }

  /**
   * 关闭连接状态变化事件监听
   */
  offBLEConnectionStateChange() {
    if (this.gattClient) {
      this.gattClient.off('BLEConnectionStateChange')
      this.stateListenSwitch = false;
    }
  }

  /**
   * client端发起连接远端蓝牙低功耗设备 （连接ble设备）
   */
  connectServer() {
    if (this.gattClient && this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {
      //this.gattClient.connect()
      this.gattClient = this.bleManager.connect(this.device)!;
    }
  }

  /**
   * client端断开与远端蓝牙低功耗设备的连接 （断开ble设备）
   */
  disconnectServer() {
    if (this.gattClient && this.connectState != constant.ProfileConnectionState.STATE_DISCONNECTED) {
      //this.gattClient.disconnect()
      this.bleManager.disconnect()
    }
  }

  /**
   * client端获取蓝牙低功耗设备的所有服务，即服务发现 (获取所有服务)
   */
  async getServices() {
    if (this.gattClient) {
      this.gattServiceInfo = undefined;
      const result: Array<ble.GattService> = await this.gattClient.getServices();
      console.info('getServices successfully:' + JSON.stringify(result));

      let gatt = this.gattClient;

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
        }

        this.onBLEMtuChange()
      }
    }
  }

  /**
   * client端读取蓝牙低功耗设备特定服务的特征值 (读取指定通道的特征)
   */
  async readCharacteristicValue(
    gatt: ble.GattClientDevice | null | undefined,
    characteristic: ble.BLECharacteristic,
  ): Promise<ArrayBuffer | null> {
    return new Promise<ArrayBuffer | null>(async (resolve, reject) => {
      if (!gatt) {
        this.characteristicValue = '';
        console.log('gatt is not available ');
        resolve(null);
      }

      try {
        if (gatt) {
          const bleCharacteristicDataOut = await gatt.readCharacteristicValue(characteristic);
          const characteristicValue: ArrayBuffer = bleCharacteristicDataOut.characteristicValue;
          console.info(`NEW SDK readCharacteristicValue : ${Utils.arrayBufferToHex(characteristicValue)}, for: ${bleCharacteristicDataOut.characteristicUuid}`);
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
   * 订阅蓝牙低功耗设备的特征值变化事件 (接收消息)
   */
  onBleCharacteristicChange() {
    try {
      if (this.gattClient) {
        //监听
        this.gattClient.on('BLECharacteristicChange', (characteristicChangeReq: ble.BLECharacteristic) => {
          let serviceUuid: string = characteristicChangeReq.serviceUuid;
          let characteristicUuid: string = characteristicChangeReq.characteristicUuid;
          //let value: Uint8Array = new Uint8Array(characteristicChangeReq.characteristicValue);
          //console.log('BluetoothPage BLECharacteristicChange value = ' + JSON.stringify(characteristicChangeReq));
          const characteristicValue = characteristicChangeReq.characteristicValue
          this.writeValueRecording.push(`${new Date().toDateString()}_变化： ` + Utils.arrayBufferToHex(characteristicValue))
          //console.log( `BluetoothPage BLECharacteristicChange Hex: `+ Utils.arrayBufferToHex(characteristicValue))

          //通道1
          if(serviceUuid == UART_SERVICE_UUID){
            console.log(`NEW SDK Channel 1<------ Receive data: ${Utils.arrayBufferToHex(characteristicValue)} , for: ${characteristicUuid} `)
          }
          //通道2
          else if (serviceUuid === CONTROL_UART_SERVICE_UUID){
            console.log(`NEW SDK Channel 2<------ Receive data: ${Utils.arrayBufferToHex(characteristicValue)} , for: ${characteristicUuid} `)
          }
          //通道3
          else if (serviceUuid === THIRD_UART_SERVICE_UUID){
            console.log(`NEW SDK Channel 3<------ Receive data: ${Utils.arrayBufferToHex(characteristicValue)} , for: ${characteristicUuid} `)
          }
          //通道4
          else if (serviceUuid === THIRD_UART_SERVICE_UUID){
            console.log(`NEW SDK Channel 4<------ Receive data: ${Utils.arrayBufferToHex(characteristicValue)} , for: ${characteristicUuid} `)
          }

        })
        this.bleCharChangeSwitch = true;
        console.log('BluetoothPage bleCharacteristicChange ' + this.bleCharChangeSwitch);
      }
    } catch (err) {
      console.error('bleCharacteristicChange errCode: ' + (err as BusinessError).code + ', errMessage: ' +
      (err as BusinessError).message);
    }
  }

  /**
   * 取消订阅蓝牙低功耗设备的特征值变化事件
   */
  offBleCharacteristicChange() {
    try {
      if (this.gattClient) {
        this.gattClient.off('BLECharacteristicChange')
        this.bleCharChangeSwitch = false;
        console.log('BluetoothPage bleCharacteristicChange ' + this.bleCharChangeSwitch);
      }
    } catch (err) {
      console.error('bleCharacteristicChange errCode: ' + (err as BusinessError).code + ', errMessage: ' +
      (err as BusinessError).message);
    }
  }

  //写特征值
  async writeCharacteristicValue(
    data: ArrayBuffer,
    gatt: ble.GattClientDevice | null | undefined,
    characteristic: ble.BLECharacteristic,
  ) {
    if (!this.gattServiceInfo) {
      this.characteristicValue = '';
      console.log('BluetoothPage bluetooth gattServiceInfo is undefined ');
      return
    }
    try {
      if (gatt) {

        //根据MTUSize 分包
        const arrayBuffer = Utils.splitArrayBuffer(data, 20)
        for (let i = 0; i < arrayBuffer.length; i++) {
          const value = arrayBuffer[i]
          characteristic.characteristicValue = value
          await gatt.writeCharacteristicValue(characteristic, ble.GattWriteType.WRITE_NO_RESPONSE);
          console.log(`writeCharacteristicValue wrValue--> :  ${Utils.arrayBufferToHex(value)}`)
        }


        // characteristic.characteristicValue = data
        // await gatt.writeCharacteristicValue(characteristic, ble.GattWriteType.WRITE_NO_RESPONSE);
        promptAction.showToast({
          message: '特征值写结束'
        })
        console.log('BluetoothPage writeCharacteristicValue finish');
      }
    } catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
    }
  }

  /**
   * 向服务端发送设置通知此indicate征值请求
   */
  async setNotificationChannel(
    gatt: ble.GattClientDevice | null ,
    gattService: ble.GattService | undefined,
    characteristic: ble.BLECharacteristic,
    enable: boolean
  ): Promise<boolean>{
    if (!gattService) {
      this.characteristicValue = '';
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
   * client端订阅MTU状态变化事件
   */
  onBLEMtuChange(){
    try {
      if (this.gattClient){
        this.gattClient.on('BLEMtuChange', (mtu: number) => {
          console.info('BLEMtuChange, mtu: ' + mtu);
        })
      }
    } catch (err) {
      console.error('onBLEMtuChange errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message)
    }
  }


}

@Styles
function itemStyle() {
  .width('100%')
  .padding({
    left: 15,
    right: 15,
    top: 8,
    bottom: 8
  })
  .backgroundColor($r('app.color.white'))
  .borderRadius(10)
}