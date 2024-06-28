import { ble, constant } from '@kit.ConnectivityKit';
import { promptAction, router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import Utils from '../utils/Util';

import { BleManager, common, config, sensor, firmware } from '@ohos/blebib'
import { FitActivityListInfo } from '@ohos/blebib/src/main/ets/data/FitActivityListInfo';
import { FileDownloadResult } from '@ohos/blebib/src/main/ets/utils/FileUtil';
import { DeviceConnectStatus } from '@ohos/blebib/src/main/ets/data/DeviceConnectStatus';

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
  @State devConnectState: DeviceConnectStatus = DeviceConnectStatus.DeviceDisconnected;

  //读取的电池特征（电量）
  @State characteristicValue: string = '';

  // 设备连接状态观察者
  deviceConnectStatusObserver = (connectStatus: DeviceConnectStatus) => {
    console.log(`设备连接状态观察者-> connectStatusObserver ${DeviceConnectStatus[connectStatus]}`);

    if (connectStatus == DeviceConnectStatus.DeviceReady) {
      this.connectStateSwitch = true;
    } else{
      this.connectStateSwitch = false;
    }
    this.devConnectState = connectStatus
  };

  aboutToAppear(): void {
    this.bleManager.deviceConnectStatus.subscribe(this.deviceConnectStatusObserver)
  }

  aboutToDisappear(): void {
    this.bleManager.deviceConnectStatus.unsubscribe(this.deviceConnectStatusObserver)
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

          if (this.devConnectState == DeviceConnectStatus.DeviceConnecting || this.devConnectState == DeviceConnectStatus.DeviceConnected) {
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
            this.bleManager.configService.writeSoundSetting(soundSetMsg).then((response: Boolean) => {
              console.log(`UART RX Characteristic write end response:${response} `)
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

            this.bleManager.configService.writeSoundSetting(soundSetMsg).then((response: Boolean) => {
              console.log(`UART RX Characteristic write end response:${response} `)
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

        //读取活动列表信息
        Row() {
          Button('读取活动列表信息').onClick(() => {
            this.bleManager.activityService.readActivityListInformation().then((response: common.Ifile_list_get_message|undefined|null) => {
              console.log(`读取活动列表信息 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'读取活动列表信息成功'})
            }).catch((error:Error) => {
              console.error('读取活动列表信息 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'读取活动列表信息失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //读取活动列表
        Row() {
          Button('读取活动列表').onClick(() => {

            const range = common.file_list_get_message.create({
              fileIndexStart: 0,
              fileIndexEnd: 1
            })

            this.bleManager.activityService.readActivityList(range).then((response: FitActivityListInfo[]) => {
              console.log(`读取活动列表 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'读取活动列表 成功'})
            }).catch((error:Error) => {
              console.error('读取活动列表 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'读取活动列表 失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //读取活动fit文件
        Row() {
          Button('读取活动fit文件').onClick(() => {

            const range = common.file_list_get_message.create({
              fileIndexStart: 0,
              fileIndexEnd: 1
            })

            this.bleManager.activityService.readActivityFitFile(1065435805).then((response: FileDownloadResult) => {
              console.log(`读取活动fit文件 response:${JSON.stringify(response.fileInfo)}, ${response.file.length} `)
              //提示写入成功
              promptAction.showToast({message:'读取活动fit文件 成功'})
            }).catch((error:Error) => {
              console.error('读取活动fit文件 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'读取活动fit文件 失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //读取自动配置
        Row() {
          Button('读取自动配置').onClick(() => {
            this.bleManager.configService.readAutomaticSetting().then((response: config.Iauto_set_msg[]) => {
              console.log(`读取自动配置 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'读取自动配置 成功'})
            }).catch((error:Error) => {
              console.error('读取自动配置 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'读取自动配置 失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //写入自动配置
        Row() {
          Button('写入自动配置').onClick(() => {
            this.bleManager.configService.writeAutomaticSetting(
              config.auto_set_msg.create({
                status: 1,
                autoType: config.AUTO_TYPE.enum_SLEEP
              }),
              config.auto_set_msg.create({
                status: 1,
                autoType: config.AUTO_TYPE.enum_POWER_OFF
              }),
            ).then((response: boolean) => {
              console.log(`写入自动配置 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'写入自动配置 成功'})
            }).catch((error:Error) => {
              console.error('写入自动配置 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'写入自动配置 失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //读取传感器列表
        Row() {
          Button('读取传感器列表').onClick(() => {
            this.bleManager.sensorService.readSensorList().then((response: sensor.Isensor_data_message[]) => {
              console.log(`读取传感器列表 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'读取传感器列表 成功'})
            }).catch((error:Error) => {
              console.error('读取传感器列表 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'读取传感器列表 失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //连接指定传感器
        Row() {
          Button('连接指定传感器').onClick(() => {
            this.bleManager.sensorService.connectSensor(
              sensor.sensor_data_message.create({
                sensorType: sensor.SENSOR_TYPE.enum_SENSOR_TYPE_SPD,
                sensorRadioType: sensor.SENSOR_RADIO_TYPE.enum_SENSOR_RADIO_TYPE_ANT,
                sensorKey: "55606"
              })
            ).then((response: boolean) => {
              console.log(`连接指定传感器 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'连接指定传感器 成功'})
            }).catch((error:Error) => {
              console.error('连接指定传感器 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'连接指定传感器 失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //读取页面配置信息
        Row() {
          Button('读取页面配置信息').onClick(() => {
            this.bleManager.configService.readPage(0).then((response: config.Ipage_msg[]) => {
              console.log(`读取页面配置信息 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'读取页面配置信息 成功'})
            }).catch((error:Error) => {
              console.error('读取页面配置信息 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'读取页面配置信息 失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //读取公英制配置信息
        Row() {
          Button('读取公英制配置信息').onClick(() => {
            this.bleManager.configService.readUnit().then((response: config.Iunit_msg[]) => {
              console.log(`读取公英制配置信息 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'读取公英制配置信息 成功'})
            }).catch((error:Error) => {
              console.error('读取公英制配置信息 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'读取公英制配置信息 失败'})
            })
          })
            .type(ButtonType.Normal)
            .width('100%')
        }

        //读取固件版本
        Row() {
          Button('读取固件版本').onClick(() => {
            this.bleManager.firmwareService.readFirmwareVersion().then((response: firmware.Ifirmware_data_message | null | undefined) => {
              console.log(`读取固件版本 response:${JSON.stringify(response)} `)
              //提示写入成功
              promptAction.showToast({message:'读取固件版本 成功'})
            }).catch((error:Error) => {
              console.error('读取固件版本 failed:', error.message);
              //提示写入失败
              promptAction.showToast({message:'读取固件版本 失败'})
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
    if (!this.bleManager.isReady()) {
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
    this.bleManager.disconnect()
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