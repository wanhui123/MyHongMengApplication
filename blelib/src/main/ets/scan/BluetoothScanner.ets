import { ble } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class BluetoothScanner{
  private static instance: BluetoothScanner;
  private isScanning: boolean = false;

  private constructor() {
  }

  static getInstance(): BluetoothScanner {
    if (!BluetoothScanner.instance) {
      BluetoothScanner.instance = new BluetoothScanner();
    }
    return BluetoothScanner.instance;
  }

  async startScan(filters: Array<ble.ScanFilter> | null  = null, callback: (devices: Array<ble.ScanResult>) => void): Promise<void> {
    if (this.isScanning) return; // 已经在扫描中
    try {
      const scanOptions: ble.ScanOptions = {
        interval: 1000,
        dutyMode: ble.ScanDuty.SCAN_MODE_LOW_LATENCY,
        matchMode: ble.MatchMode.MATCH_MODE_AGGRESSIVE,
      };

      // 订阅 BLEDeviceFind 事件
      ble.on('BLEDeviceFind', (data: Array<ble.ScanResult>) => {
        console.info('bluetooth device find on = '+ data.length.toString() + JSON.stringify(data));
        callback(data);
      });

      // 开始扫描
      ble.startBLEScan(filters, scanOptions);
      console.info('BLE scan started successfully');
      this.isScanning = true;
    } catch (err) {
      console.error('Error starting BLE scan errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
      throw new Error('Failed to start BLE scan');
    }
  }

  async stopScan(): Promise<void> {
    if (!this.isScanning) return; // 未在扫描中
    try {
      ble.stopBLEScan();
      console.info('BLE scan stopped successfully');
      this.isScanning = false;

      // 取消订阅 BLEDeviceFind 事件
      ble.off('BLEDeviceFind', (data: Array<ble.ScanResult>) => {
        console.info('bluetooth device find off = ' + JSON.stringify(data));
      });
    } catch (err) {
      console.error('Error stopping BLE scan errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
      throw new Error('Failed to stop BLE scan');
    }
  }

}

export default BluetoothScanner;
