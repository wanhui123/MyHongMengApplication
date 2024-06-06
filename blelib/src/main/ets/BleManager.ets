import { ble } from '@kit.ConnectivityKit'
import { BusinessError } from '@kit.BasicServicesKit'

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

  private gattClientDevice: ble.GattClientDevice | null = null;

  //连接状态
  private connectionState: ble.BLEConnectionChangeState | null = null;
  //连接状态观察者
  private connectionStateObservers: ((state: ble.BLEConnectionChangeState | null) => void)[] = [];

  private constructor() {
  }

  public static create(): BleManager {
    return new BleManager()
  }

  public init(): void{
    console.log("BleManager initialization")
  }

  // 设置连接状态，并通知观察者
  setConnectionState(state: ble.BLEConnectionChangeState | null) {
    this.connectionState = state;
    this.notifyObservers();
  }

  // 添加观察者
  addObserver(observer: (state: ble.BLEConnectionChangeState | null) => void) {
    this.connectionStateObservers.push(observer);
    // 如果连接状态已经存在，则立即通知观察者
    if (this.connectionState !== null) {
      observer(this.connectionState);
    }
  }

  // 移除观察者
  removeObserver(observer: (state: ble.BLEConnectionChangeState | null) => void) {
    const index = this.connectionStateObservers.indexOf(observer);
    if (index !== -1) {
      this.connectionStateObservers.splice(index, 1);
    }
  }

  // 通知观察者连接状态变化
  private notifyObservers() {
    for (const observer of this.connectionStateObservers) {
      observer(this.connectionState);
    }
  }

  /**
   * client获取远端蓝牙低功耗设备名
   */
  getDeviceName(gattClient: ble.GattClientDevice) {
    gattClient.getDeviceName((err: BusinessError, data: string) => {
      console.info('device name err ' + JSON.stringify(err));
      console.info('device name' + JSON.stringify(data));
      let deviceName = data
    })
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

        console.log('BluetoothPage bluetooth connectState ' + JSON.stringify(state));
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
  disconnect(gattClient: ble.GattClientDevice) {
    if (gattClient) {
      gattClient.disconnect()
    }
  }

}

export default BleManager;