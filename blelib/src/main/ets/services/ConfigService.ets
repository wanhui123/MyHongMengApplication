import BleManager from '../BleManager';
import { Head20BytesInfo } from '../command/Head20BytesInfo';
import { common } from '../proto/common';
import { config } from '../proto/config';
import { TransmitCompleteCommand } from '../TransmitCompleteCommand';
import { ArrayBufferUtil } from '../utils/ArrayBufferUtil';
import { HexUtil } from '../utils/HexUtil';

export class ConfigService {
  private deviceBleManager: BleManager

  constructor(deviceBleManager: BleManager) {
    this.deviceBleManager = deviceBleManager
  }

  //写入声音配置
  async writeSoundSetting(soundSetMsg: config.sound_set_msg): Promise<ArrayBuffer> {
    const configMsg = config.config_msg.create({
      serviceType: common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG,
      configSeviceType:config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND,
      configOperateType: config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET,
      soundSetMessage: [soundSetMsg]
    })
    const sendPbBytes = config.config_msg.encode(configMsg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG)
      .setMainOperationByte(config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET)
      .setSecondServiceByte(config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray,sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
        && completeCommand.mainOperation === config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET
        && completeCommand.secondService === config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND;
    }

    return this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  }

  /**
   * 读取自动配置
   */
  async readAutomaticSetting(): Promise<config.Iauto_set_msg[]> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_AUTO
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_GET
    const commandTag = "readAutomaticSetting"

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType:configServiceType,
      configOperateType: configOperateType,
    })
    const sendPbBytes = config.config_msg.encode(configMsg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandMainServiceType)
      .setMainOperationByte(configOperateType)
      .setSecondServiceByte(configServiceType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray,sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandMainServiceType
        && completeCommand.secondService === configServiceType
        && completeCommand.mainOperation === configOperateType
    }

    const responseBytes = await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    const responseData:config.Iauto_set_msg[] = config.config_msg.decode(new Uint8Array(responseBytes)).autoSetMessage
    return responseData

  }

  /**
   * 写入自动配置
   */
  async writeAutomaticSetting(...configs: config.auto_set_msg[]): Promise<boolean> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_AUTO
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET
    const commandTag = "writeAutomaticSetting"

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType:configServiceType,
      configOperateType: configOperateType,
      autoSetMessage: configs,
    })
    const sendPbBytes = config.config_msg.encode(configMsg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandMainServiceType)
      .setMainOperationByte(configOperateType)
      .setSecondServiceByte(configServiceType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray,sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandMainServiceType
        && completeCommand.secondService === configServiceType
        && completeCommand.mainOperation === configOperateType
    }

    const responseBytes = await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

}