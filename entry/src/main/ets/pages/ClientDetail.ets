import { ble, constant } from '@kit.ConnectivityKit';
import { promptAction, router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import Utils from '../utils/Util';

import { BleManager, config } from '@ohos/blebib'

@Entry
@Component
struct ClientDetail {
  device: ble.ScanResult = router.getParams() as ble.ScanResult;

  bleManager = BleManager.create()

  @State gattClient: ble.GattClientDevice | undefined = undefined;
  @State deviceName: string = '';

  //连接开关
  @State connectSwitch: boolean = false;

  //是否连接成功
  @State connectStateSwitch: boolean = false;
  //连接状态
  @State connectState: ble.ProfileConnectionState = constant.ProfileConnectionState.STATE_DISCONNECTED;

  //读取的电池特征（电量）
  @State characteristicValue: string = '';

  //连接状态变化监听
  observerToRemove = (state: ble.BLEConnectionChangeState | null) => {
    // 观察者函数的逻辑
    let deviceId = state?.deviceId;
    console.log('蓝牙连接状态改变 state = ' + JSON.stringify(state?.state) + ', deviceId' + deviceId);
    if(state == null){
      return
    }
    this.connectState = state.state;

    //已断开连接
    if (this.connectState == constant.ProfileConnectionState.STATE_DISCONNECTED) {
      this.connectStateSwitch = false;
    }

    //已连接
    if (this.connectState == constant.ProfileConnectionState.STATE_CONNECTED) {
      this.connectStateSwitch = true;
    }
  };

  aboutToAppear(): void {
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
          Button('写特征值 (按键音 开)').onClick(async() =>  {
            const soundSetMsg = config.sound_set_msg.create({
              soundType: config.SOUND_TYPE.enum_SOUND_KEY,
              soundScene: config.SOUND_SCENE_TYPE.enum_ALL_SCENE,
              status: 1//0--关  1--开
            })
            //let data = Utils.hexStringWithoutSpacesToArrayBuffer("01 6A 03 FF 01 FF FF 00 0A A8 01 FF FF FF FF FF FF FF FF F9 08 6A 10 01 18 03 62 02 08 40")//VS1800 自定义模式设置
            //let data = Utils.hexStringWithoutSpacesToArrayBuffer("01 0C 11 FF 01 FF FF 00 0F F4 01 FF FF FF FF FF FF FF FF E7 08 0C 10 11 18 01 CA 01 06 08 20 10 01 18 01")
            console.log(`UART RX Characteristic write start responseData `)
            this.bleManager.writeSoundSetting(soundSetMsg).then((response: ArrayBuffer) => {
              console.log(`UART RX Characteristic write end response:${Utils.arrayBufferToHex(response)} `)
              //提示写入成功
              promptAction.showToast({message:'写入成功'})
            }).catch((error:Error) => {
              console.error('UART RX Characteristic write failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'写入失败'})
            })

            // console.log(`UART RX Characteristic write start responseData1 `)
            // const responseData1 = await this.bleManager.writeSoundSetting(data)
            // console.log(`UART RX Characteristic write end responseData1: ${Utils.arrayBufferToHex(responseData1)} `)
            //
            // console.log(`UART RX Characteristic write start responseData2 `)
            // const responseData2 = await this.bleManager.writeSoundSetting(data)
            // console.log(`UART RX Characteristic write end responseData2: ${Utils.arrayBufferToHex(responseData2)} `)


          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //写特征值 (630按键音 关)
        Row() {
          Button('写特征值 (按键音 关)').onClick(() => {

            const soundSetMsg = config.sound_set_msg.create({
              soundType: config.SOUND_TYPE.enum_SOUND_KEY,
              soundScene: config.SOUND_SCENE_TYPE.enum_ALL_SCENE,
              status: 0//0--关  1--开
            })

            //let data = Utils.hexStringWithoutSpacesToArrayBuffer("01 0C 11 FF 01 FF FF 00 0F AA 01 FF FF FF FF FF FF FF FF 32 08 0C 10 11 18 01 CA 01 06 08 20 10 01 18 00")
            this.bleManager.writeSoundSetting(soundSetMsg).then((response: ArrayBuffer) => {
              //console.log('UART RX Characteristic write successful');
              console.log(`UART RX Characteristic write end response:${Utils.arrayBufferToHex(response)} `)
              //提示写入成功
              promptAction.showToast({message:'写入成功'})
            }).catch((error:Error) => {
              console.error('UART RX Characteristic write failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'写入失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
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
   * client端发起连接远端蓝牙低功耗设备 （连接ble设备）
   */
  connectServer() {
    if (this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {
      //连接设备
      this.gattClient = this.bleManager.connect(this.device)!;

      //获取设备名称
      this.bleManager.getDeviceName().then(deviceName => {
        this.deviceName = deviceName
      }).catch((error: BusinessError)=> {
        console.error('获取设备名称 BusinessError:', error);
      })
    }
  }

  /**
   * client端断开与远端蓝牙低功耗设备的连接 （断开ble设备）
   */
  disconnectServer() {
    if (this.connectState != constant.ProfileConnectionState.STATE_DISCONNECTED) {
      this.bleManager.disconnect()
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