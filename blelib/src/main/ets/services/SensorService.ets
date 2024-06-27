import BleManager from '../BleManager';
import { Head20BytesInfo } from '../command/Head20BytesInfo';
import { common } from '../proto/common';
import { sensor } from '../proto/sensor';
import { TransmitCompleteCommand } from '../TransmitCompleteCommand';
import { ArrayBufferUtil } from '../utils/ArrayBufferUtil';
import { HexUtil } from '../utils/HexUtil';

export class SensorService {
  private deviceBleManager: BleManager

  constructor(deviceBleManager: BleManager) {
    this.deviceBleManager = deviceBleManager
  }

  //读取传感器列表
  async readSensorList(): Promise<sensor.Isensor_data_message[]> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_SENSOR
    const commandOperateType = sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_GET
    const commandTag = "readSensorList"

    const msg = sensor.sensor_message.create({
      serviceType: commandServiceType,
      sensorOperateType: commandOperateType
    })

    const sendPbBytes = sensor.sensor_message.encode(msg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandServiceType)
      .setMainOperationByte(commandOperateType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandServiceType
        && completeCommand.mainOperation === sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_SEND
    }

    const responseBytes = await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    const responseData: sensor.Isensor_data_message[] = sensor.sensor_message.decode(new Uint8Array(responseBytes))
      .sensorDataMsg
    return responseData
  }

  //连接指定传感器
  async connectSensor(sensorDataMsg: sensor.sensor_data_message): Promise<boolean> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_SENSOR
    const commandOperateType = sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_CONNECT
    const commandTag = "connectSensor"

    const msg = sensor.sensor_message.create({
      serviceType: commandServiceType,
      sensorOperateType: commandOperateType,
      sensorDataMsg: [sensorDataMsg]
    })

    const sendPbBytes = sensor.sensor_message.encode(msg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandServiceType)
      .setMainOperationByte(commandOperateType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandServiceType
        && completeCommand.mainOperation === commandOperateType
    }

    const responseBytes = await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

  //设置传感器
  async setSensor(sensorDataMsg: sensor.sensor_data_message): Promise<boolean> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_SENSOR
    const commandOperateType = sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_SET
    const commandTag = "setSensor"

    const msg = sensor.sensor_message.create({
      serviceType: commandServiceType,
      sensorOperateType: commandOperateType,
      sensorDataMsg: [sensorDataMsg]
    })

    const sendPbBytes = sensor.sensor_message.encode(msg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandServiceType)
      .setMainOperationByte(commandOperateType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandServiceType
        && completeCommand.mainOperation === commandOperateType
    }

    const responseBytes = await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

  //功率校准
  async sensorPowerCalibration(): Promise<boolean> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_SENSOR
    const commandOperateType = sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_POW_CALIB
    const commandTag = "sensorPowerCalibration"

    const msg = sensor.sensor_message.create({
      serviceType: commandServiceType,
      sensorOperateType: commandOperateType,
    })

    const sendPbBytes = sensor.sensor_message.encode(msg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandServiceType)
      .setMainOperationByte(commandOperateType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandServiceType
        && completeCommand.mainOperation === commandOperateType
    }

    const responseBytes = await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

  //忽略传感器
  async deleteSensor(sensorDataMsg: sensor.sensor_data_message): Promise<boolean> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_SENSOR
    const commandOperateType = sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_DEL
    const commandTag = "deleteSensor"

    const msg = sensor.sensor_message.create({
      serviceType: commandServiceType,
      sensorOperateType: commandOperateType,
      sensorDataMsg: [sensorDataMsg]
    })

    const sendPbBytes = sensor.sensor_message.encode(msg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandServiceType)
      .setMainOperationByte(commandOperateType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandServiceType
        && completeCommand.mainOperation === commandOperateType
    }

    const responseBytes = await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

  //退出传感器设置界面
  async exitSensorPage(): Promise<boolean> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_SENSOR
    const commandOperateType = sensor.SENSOR_OPERATE_TYPE.enum_SENSOR_OPERATE_TYPE_EXIT
    const commandTag = "exitSensorPage"

    const msg = sensor.sensor_message.create({
      serviceType: commandServiceType,
      sensorOperateType: commandOperateType,
    })

    const sendPbBytes = sensor.sensor_message.encode(msg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandServiceType)
      .setMainOperationByte(commandOperateType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandServiceType
        && completeCommand.mainOperation === commandOperateType
    }

    const responseBytes = await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }
}