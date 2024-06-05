
import ble from '@ohos.bluetooth.ble';
import PermissionsUtil from '../utils/PermissionsUtil';
import BluetoothScanner from '@ohos/blebib/src/main/ets/scan/BluetoothScanner';

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
              } else {
                this.stopScan()
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
                      Navigator({ target: 'pages/ClientDetail', type: NavigationType.Push }){
                        Button('连接')
                          .width(90)
                          .height(40)
                          .fontSize(12)
                          //.onClick(()=>{})
                      }
                      .params(item)

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

    let scanFilters: Array<ble.ScanFilter> | null = [{
      name: "iGS800"
    }]
    scanFilters = null//搜索所有 不过滤

    BluetoothScanner.getInstance().startScan(scanFilters,(data: Array<ble.ScanResult>)=>{
      console.info('bluetooth device find on = '+ data.length.toString() + JSON.stringify(data));
      this.bleDevices = data
      for (let i = 0; i < data.length; i++){
        let item = data[i];
        this.bleDeviceMap.set(item.deviceId, item)
      }
    }).then(() => {
      console.log('Scanning started...');
    }).catch((err: Error) => {
      console.error('Error starting scan:', err);
    });
  }

  //停止扫描
  stopScan(){
    BluetoothScanner.getInstance().stopScan().then(() => {
      console.log('Scanning stopped');
    }).catch((err: Error) => {
      console.error('Error stopping scan:', err);
    });
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