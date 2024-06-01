
import ble from '@ohos.bluetooth.ble';
import { BusinessError } from '@kit.BasicServicesKit';
import PermissionsUtil from '../utils/PermissionsUtil';

@Entry
@Component
struct Index {
  @State scanSwitch: boolean = false;
  @State bleDevices: Array<ble.ScanResult> = [];

  @State bleDeviceMap: Map<string,ble.ScanResult> = new Map<string, ble.ScanResult>();

  build() {
    Column({ space: 15 }) {

      Stack(){
        Row(){
          Text('BLE扫描')
          Blank()
          Toggle({type: ToggleType.Switch, isOn: this.scanSwitch})
            .onChange((isOn: boolean) => {
              if (isOn) {
                this.startScan()
                this.onBLEDeviceFind()
              } else {
                this.stopScan()
                this.offBLEDeviceFind()
              }
              console.info('ble server instanceSwitch status:' + isOn)
            })
        }
        .itemStyle()
      }
      .width('100%')
      .padding({ left: 15, right: 15, top: 0, bottom: 0 })


      Column(){
        Scroll(){
          if (Array.from(this.bleDeviceMap.values()).length > 0) {
            List(){

              ForEach(Array.from(this.bleDeviceMap.values()).filter(it => it.deviceName.length > 0).sort((a, b) => {
                return b.rssi - a.rssi
              }), (item: ble.ScanResult) => {
                ListItem(){
                  Row(){
                    Column(){
                      Text(item.deviceName).fontSize(14).margin({ bottom: 2 }).fontWeight(FontWeight.Medium)
                      Text(item.deviceId).fontSize(12).margin({ bottom: 2 })
                      Text(`${item.connectable}`).fontSize(12)
                    }
                    .padding({ left: 10, right: 10, top: 10, bottom: 10 })
                    .layoutWeight(1)
                    .margin({ left: 10 })
                    .alignItems(HorizontalAlign.Start)

                    Row({space : 10}){
                      Text('' + item.rssi).fontSize(14)
                      Button('连接')
                        .width(90)
                        .height(40)
                        .fontSize(12)
                        .onClick(()=>{})
                    }
                    .padding({ left: 0, right: 10, top: 0, bottom: 0 })

                  }
                  .width('100%')

                }
              })
            }
            .width('100%')
            .height('100%')
            .divider({ strokeWidth: 0.5, color: '#aaa' })
          } else {
            Text('暂无设备发现')
          }
        }
        .width('100%')
        .layoutWeight(1)
        .backgroundColor(Color.White)
        .borderRadius(10)
        .scrollBar(BarState.Off)
      }
      .height("100%")
      .width("100%")

    }
    .width('100%')
    .height('100%')
    .padding({ left: 0, right: 0, top: 20, bottom: 0 })
    .backgroundColor(Color.White)
  }

  //组件即将出现时回调该接口，具体时机为在创建自定义组件的新实例后，在执行其build()函数之前执行
  aboutToAppear(): void {
    PermissionsUtil.requestPermissions(['ohos.permission.ACCESS_BLUETOOTH'])
  }

  //函数在自定义组件析构销毁之前执行
  aboutToDisappear() {
  }

  //开始扫描
  startScan() {
    try {
      //let scanFilter: ble.ScanFilter = {
      // manufactureId: manufactureId,
      // manufactureData: manufactureData.buffer,
      //};
      let scanOptions: ble.ScanOptions = {
        interval: 1000,
        dutyMode: ble.ScanDuty.SCAN_MODE_LOW_LATENCY,
        matchMode: ble.MatchMode.MATCH_MODE_AGGRESSIVE,
      }
      ble.startBLEScan(null, scanOptions)
      console.info('ble Client start BLE Scan success')
      this.scanSwitch = true;
    } catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
    }
  }

  //停止扫描
  stopScan(){
    try {
      ble.stopBLEScan();
      console.info('ble Client stop BLE Scan success')
      this.scanSwitch = false;
    } catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
    }
  }

  //在 BLE 设备上查找
  onBLEDeviceFind() {
    ble.on('BLEDeviceFind', (data: Array<ble.ScanResult>) => {
      console.info('bluetooth device find on = '+ data.length.toString() + JSON.stringify(data));
      this.bleDevices = data
      for (let i = 0; i < data.length; i++){
        let item = data[i];
        this.bleDeviceMap.set(item.deviceId, item)
      }
    });
    //this.deviceFindSwitch = true;
  }

  //关闭 BLE 设备查找
  offBLEDeviceFind(){
    ble.off('BLEDeviceFind', (data: Array<ble.ScanResult>) => {
      console.info('bluetooth device find off = ' + JSON.stringify(data));
      // this.bleDevices = data;
    });
    //this.deviceFindSwitch = false;
  }

}

@Styles
function itemStyle() {
  .width('100%')
  .padding({ left: 15, right: 15, top: 8, bottom: 8 })
  .backgroundColor(Color.White)
  .borderRadius(10)
  .borderColor(Color.Gray)
  .borderWidth(0.5)
}