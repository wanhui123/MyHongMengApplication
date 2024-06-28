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

  private async sendConfigCommand(
    commandMainServiceType: number,
    configServiceType: number,
    configOperateType: number,
    configMsg: config.config_msg,
    isReceiveFinish: ((checkData: ArrayBuffer | null, storedData: Uint8Array) => boolean) | null = null
  ): Promise<ArrayBuffer> {
    const sendPbBytes = config.config_msg.encode(configMsg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandMainServiceType)
      .setMainOperationByte(configOperateType)
      .setSecondServiceByte(configServiceType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)

    if (isReceiveFinish == null) {
      isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
        if (!checkData) {
          return false
        }
        const completeCommand = new TransmitCompleteCommand(checkData)
        return (
          completeCommand.mainService === commandMainServiceType &&
            completeCommand.mainOperation === configOperateType &&
            completeCommand.secondService === configServiceType
        )
      }
    }


    return await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  }

  /**
   * 写入声音配置
   * @param soundSetMsg
   * @returns
   */
  async writeSoundSetting(soundSetMsg: config.sound_set_msg): Promise<boolean> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_SOUND
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
      soundSetMessage: [soundSetMsg]
    })
    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

  /**
   * 读取自动配置
   */
  async readAutomaticSetting(): Promise<config.Iauto_set_msg[]> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_AUTO
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_GET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
    })

    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg)
    return config.config_msg.decode(new Uint8Array(responseBytes)).autoSetMessage
  }

  /**
   * 写入自动配置
   */
  async writeAutomaticSetting(...configs: config.auto_set_msg[]): Promise<boolean> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_AUTO
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
      autoSetMessage: configs,
    })

    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

  //---------------------------------------------------- 警示提醒配置----------------------------------------------------------------------------

  /**
   * 读取警示提醒配置
   * @param mode 骑行模式
   * @returns
   */
  async readAlarmConfig(mode: number | null = null): Promise<config.Ialarm_msg[]> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_ALARM
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_GET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
      curOperateMode: mode
    })

    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg)
    return config.config_msg.decode(new Uint8Array(responseBytes)).alarmMessage
  }

  /**
   * 写入警示提醒配置
   */
  async writeAlarmConfig(mode: number | null = null, ...alarmMsgs: config.alarm_msg[]): Promise<boolean> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_ALARM
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
      curOperateMode: mode,
      alarmMessage: alarmMsgs
    })

    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

  /**
   * 读取页面配置信息
   * @param mode 模式下标 0-7：返回单个页面配置 8种模式 （默认4种模式：骑行、通勤、旅行、室内）
   *
   */
  async readPage(mode: number | null = null): Promise<config.Ipage_msg[]> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_PAGE
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_GET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
      curOperateMode: mode
    })

    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg)
    return config.config_msg.decode(new Uint8Array(responseBytes)).pageMessage
  }

  /**
   * 写入页面配置
   */
  async writePage(mode: number | null = null, ...pageMsgs: config.page_msg[]): Promise<boolean> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_PAGE
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
      curOperateMode: mode,
      pageMessage: pageMsgs
    })

    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }

  /**
   * 读取公英制配置信息
   */
  async readUnit(): Promise<config.Iunit_msg[]> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_UNIT
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_GET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
    })

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return (
        completeCommand.mainService === commandMainServiceType &&
          completeCommand.mainOperation === config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SEND &&
          completeCommand.secondService === configServiceType
      )
    }

    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg, isReceiveFinish)
    return config.config_msg.decode(new Uint8Array(responseBytes)).unitMessage
  }

  /**
   * 配置公英制
   */
  async writeUnit(...unitMsgs: config.unit_msg[]): Promise<boolean> {
    const commandMainServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CONFIG
    const configServiceType = config.CONFIG_SERVICE_TYPE.enum_CONFIG_SERVICE_TYPE_UNIT
    const configOperateType = config.CONFIG_OPERATE_TYPE.enum_CONFIG_OPERATE_TYPE_SET

    const configMsg = config.config_msg.create({
      serviceType: commandMainServiceType,
      configSeviceType: configServiceType,
      configOperateType: configOperateType,
      unitMessage: unitMsgs
    })

    const responseBytes = await this.sendConfigCommand(commandMainServiceType, configServiceType, configOperateType, configMsg)
    return ArrayBufferUtil.isCommandStatusSuccess(responseBytes) ?? false
  }
}