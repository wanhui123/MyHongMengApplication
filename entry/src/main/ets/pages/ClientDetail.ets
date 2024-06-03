import { ble, constant } from '@kit.ConnectivityKit';
import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct ClientDetail {
  device: ble.ScanResult = router.getParams() as ble.ScanResult;

  @State gattClient: ble.GattClientDevice | undefined = undefined;
  @State deviceName: string = '';

  @State connectSwitch: boolean = false;

  //开启 or 关闭 连接状态监听
  @State stateListenSwitch: boolean = false;
  //是否连接成功
  @State connectStateSwitch: boolean = false;
  //连接状态
  @State connectState: ble.ProfileConnectionState = constant.ProfileConnectionState.STATE_DISCONNECTED;

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