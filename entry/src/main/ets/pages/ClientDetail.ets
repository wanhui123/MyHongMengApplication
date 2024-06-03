import { ble, constant } from '@kit.ConnectivityKit';
import { promptAction, router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import Utils from '../utils/Util';
import { util } from '@kit.ArkTS';

//通道1
let UART_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"
let UART_RX_Characteristic_UUID = "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"//手机用于发送给设备
let UART_TX_Characteristic_UUID = "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"//手机用于接收

//通道2
let CONTROL_UART_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA8E"
let CONTRO_RX_Characteristic_UUID = "6E400002-B5A3-F393-E0A9-E50E24DCCA8E"
let CONTRO_TX_Characteristic_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA8E"


@Entry
@Component
struct ClientDetail {
  device: ble.ScanResult = router.getParams() as ble.ScanResult;

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

  // //通道1 服务的uuid
  // private serviceUuid = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E";
  // private RxCharacteristic = "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"//发送的特征
  // private TXCharacteristicUUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"//接收的特征
  // //通道1 的服务信息
  // @State gattServiceInfo: ble.GattService | undefined = undefined;


  //通道1 服务的uuid
  private serviceUuid = UART_SERVICE_UUID;
  //通道1 的服务信息
  @State gattServiceInfo: ble.GattService | undefined = undefined;



  @State characteristicValue: string = '';

  @State bleCharChangeSwitch: boolean = false;

  @State writeValueRecording: Array<string> = [];

  @State cValue: string = '';

  aboutToAppear(): void {
    if (!this.gattClient) {
      this.gattClient = ble.createGattClientDevice(this.device?.deviceId);
      this.getDeviceName()
    }
  }

  build() {
    Scroll(){
      Column({ space: 10 }){
        Text() {
          Span('设备名称：  ')
          Span(this.deviceName)
        }
        .itemStyle()

        //连接状态监听
        Row() {
          Text('连接状态监听')
          Blank()
          Toggle({ type: ToggleType.Switch, isOn: this.stateListenSwitch })
            .onChange((isOn: boolean) => {
              if (isOn) {
                this.onBLEConnectionStateChange()
              } else {
                this.offBLEConnectionStateChange()
              }
              console.info('ble server instanceSwitch status:' + isOn)
            })
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

        //获取所有服务
        Column({ space: 10 }) {
          Button('服务发现').onClick(() => {
            this.getServices()
          })
            .width('100%')

          Scroll() {
            if (this.gattServiceInfo) {
              Text(JSON.stringify(this.gattServiceInfo))
            } else {
              Text('暂无数据')
            }
          }
          .height(500)
          .scrollBar(BarState.Off)
        }
        .itemStyle()

        //读取指定通道（通道1）的特征
        Column({ space: 10 }) {
          Button('client端读取蓝牙低功耗设备特定服务的特征值').onClick(() => {
            this.readCharacteristicValue()
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



        //特征值变化事件
        Column({ space: 10 }) {
          Row() {
            Text('特征值变化事件')
            Blank()
            Toggle({ type: ToggleType.Switch, isOn: this.bleCharChangeSwitch })
              .onChange((isOn: boolean) => {
                if (isOn) {
                  this.onBleCharacteristicChange()
                } else {
                  this.offBleCharacteristicChange()
                }
                console.info('ble server instanceSwitch status:' + isOn)
              })
          }
          .width('100%')

          Scroll() {
            if (this.writeValueRecording.length > 0) {
              List({ space: 5 }) {
                ForEach(this.writeValueRecording, (item: string) => {
                  ListItem() {
                    Text(JSON.stringify(item))
                  }
                })
              }
            } else {
              Text('暂无数据')
            }
          }
          .height(100)
          .scrollBar(BarState.Off)
        }
        .itemStyle()

        //写特征值
        Row() {
          TextInput({ text: this.cValue })
            .onChange((value: string) => {
              this.cValue = value
            })
            .width('75%')
            .height(40)
            .borderRadius(0)
          Button('写特征值').onClick(() => {
            this.writeCharacteristicValue()
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
      this.gattClient.connect()
    }
  }

  /**
   * client端断开与远端蓝牙低功耗设备的连接 （断开ble设备）
   */
  disconnectServer() {
    if (this.gattClient && this.connectState != constant.ProfileConnectionState.STATE_DISCONNECTED) {
      this.gattClient.disconnect()
    }
  }

  /**
   * client端获取蓝牙低功耗设备的所有服务，即服务发现 (获取所有服务)
   */
  getServices() {
    if (this.gattClient) {
      this.gattServiceInfo = undefined;
      this.gattClient.getServices().then((result: Array<ble.GattService>) => {
        console.info('getServices successfully:' + JSON.stringify(result));
        result.filter(item => {
          console.info('getServices item= '+ JSON.stringify(item))

          if (item.serviceUuid == this.serviceUuid) {
            this.gattServiceInfo = item;
            //let characteristic = item?.characteristics[0]
            let characteristic1 = item?.characteristics[1]

            let characteristicValue = Utils.ArrayBuffer2String(characteristic1?.characteristicValue)
            console.info('getServices 通道1= ' + JSON.stringify(item.characteristics))
            console.info('getServices 通道1的特征= ' + JSON.stringify(characteristic1))
            console.info('getServices 通道1的特征characteristicValue= ' + characteristic1)

            //setNotification
            this.setNotificationChannel()
          }


        })


      });
    }
  }

  /**
   * client端读取蓝牙低功耗设备特定服务的特征值 (读取指定通道的特征)
   */
  readCharacteristicValue() {
    if (!this.gattServiceInfo) {
      this.characteristicValue = '';
      console.log('BluetoothPage bluetooth gattServiceInfo is undefined ');
      return
    }
    let services: ble.GattService = this.gattServiceInfo;

    let descriptors: Array<ble.BLEDescriptor> = [];
    // let bufferDesc = new ArrayBuffer(8);
    // let descV = new Uint8Array(bufferDesc);
    // descV[0] = 11;
    // let descriptor: ble.BLEDescriptor = {
    //   serviceUuid: services.characteristics[0].descriptors[0].serviceUuid,
    //   characteristicUuid: services.characteristics[0].descriptors[0].characteristicUuid,
    //   descriptorUuid: services.characteristics[0].descriptors[0].descriptorUuid,
    //   descriptorValue: bufferDesc
    // };
    // descriptors[0] = descriptor;

    let bufferCCC = new ArrayBuffer(8);
    let cccV = new Uint8Array(bufferCCC);
    cccV[0] = 1;
    let characteristic: ble.BLECharacteristic = {
      serviceUuid: services.characteristics[0].serviceUuid,
      characteristicUuid: services.characteristics[0].characteristicUuid,//发送的特征
      characteristicValue: bufferCCC,
      descriptors: descriptors
    };

    try {
      if (this.gattClient) {
        this.gattClient.readCharacteristicValue(characteristic, (err, bleCharacteristicDataOut) => {
          if (err != null) {
            console.error('readCharacteristicValue error, code = ' + (err as BusinessError).code)
            this.characteristicValue = '';
            return;
          }
          const decoder = util.TextDecoder.create('"utf-8"');
          const str = decoder.decodeWithStream(new Uint8Array(bleCharacteristicDataOut.characteristicValue));
          console.info('bluetooth readCharacteristicValue = ' + str);
          this.characteristicValue = '特征值：' + str;
        });
      }

    } catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
    }
  }

  /**
   * 订阅蓝牙低功耗设备的特征值变化事件
   */
  onBleCharacteristicChange() {
    try {
      if (this.gattClient) {
        //监听
        this.gattClient.on('BLECharacteristicChange', (characteristicChangeReq: ble.BLECharacteristic) => {
          let serviceUuid: string = characteristicChangeReq.serviceUuid;
          let characteristicUuid: string = characteristicChangeReq.characteristicUuid;
          console.log(`onBleCharacteristicChange serviceUuid:${serviceUuid}, characteristicUuid:${characteristicUuid}`)
          let value: Uint8Array = new Uint8Array(characteristicChangeReq.characteristicValue);
          console.log('BluetoothPage BLECharacteristicChange value = ' + JSON.stringify(characteristicChangeReq));
          this.writeValueRecording.push(`${new Date().getTime()}_变化： ` +
          Utils.ArrayBuffer2String(characteristicChangeReq.characteristicValue))
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
  writeCharacteristicValue() {
    if (!this.gattServiceInfo) {
      this.characteristicValue = '';
      console.log('BluetoothPage bluetooth gattServiceInfo is undefined ');
      return
    }
    let services: ble.GattService = this.gattServiceInfo;

    let descriptors: Array<ble.BLEDescriptor> = [];
    // let descriptor: ble.BLEDescriptor = {
    //   serviceUuid: services.serviceUuid,
    //   characteristicUuid: services.characteristics[0].characteristicUuid,
    //   descriptorUuid: services.characteristics[0].descriptors[0].descriptorUuid,
    //   descriptorValue: services.characteristics[0].descriptors[0].descriptorValue
    // };
    // descriptors[0] = descriptor;

    let characteristic: ble.BLECharacteristic = {
      serviceUuid: services.serviceUuid,
      characteristicUuid: services.characteristics[0].characteristicUuid,
      characteristicValue: Utils.string2ArrayBuffer(this.cValue),
      descriptors: descriptors
    };
    try {
      if (this.gattClient) {
        this.gattClient.writeCharacteristicValue(characteristic, ble.GattWriteType.WRITE_NO_RESPONSE);
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
  setNotificationChannel(isOn: boolean = true) {
    if (!this.gattServiceInfo) {
      this.characteristicValue = '';
      console.log('BluetoothPage bluetooth gattServiceInfo is undefined ');
      return
    }
    let services: ble.GattService = this.gattServiceInfo;

    let characteristic: ble.BLECharacteristic = services.characteristics[1]
    try {
      if (this.gattClient) {
        console.log(`setNotificationChannel characteristic UUID: ${characteristic.characteristicUuid}, isOn: ${isOn},characteristics[0]: ${services.characteristics[0].characteristicUuid} `)
        this.gattClient.setCharacteristicChangeNotification(services.characteristics[0], isOn)

        console.log('BluetoothPage setCharacteristicChangeNotification finish');
      }
    } catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
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