import BleManager from '../BleManager'
import { Head20BytesInfo } from '../command/Head20BytesInfo'
import { common } from '../proto/common'
import { firmware } from '../proto/firmware'
import { TransmitCompleteCommand } from '../TransmitCompleteCommand'
import { HexUtil } from '../utils/HexUtil'

export class FirmwareService {
  private deviceBleManager: BleManager

  constructor(deviceBleManager: BleManager) {
    this.deviceBleManager = deviceBleManager
  }

  private async sendCommand(
    commandServiceType: number,
    commandOperateType: number,
    firmwareMsg: firmware.firmware_msg,
    isReceiveFinish: ((checkData: ArrayBuffer | null, storedData: Uint8Array) => boolean) | null = null
  ): Promise<ArrayBuffer> {
    const sendPbBytes = firmware.firmware_msg.encode(firmwareMsg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandServiceType)
      .setMainOperationByte(commandOperateType)
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
          completeCommand.mainService === commandServiceType && completeCommand.mainOperation === commandOperateType
        )
      }
    }

    return await this.deviceBleManager.writeUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
  }

  /**
   * 读取固件版本
   */
  async readFirmwareVersion(): Promise<firmware.Ifirmware_data_message | null | undefined> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_FIRMWARE
    const commandOperateType = firmware.FIRMWARE_OPERATE_TYPE.enum_FIRMWARE_OPERATE_TYPE_GET_VERSION
    const commandTag = "readFirmwareVersion"

    const configMsg = firmware.firmware_msg.create({
      serviceType: commandServiceType,
      firmwareOperateType: commandOperateType,
    })

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return (
        completeCommand.mainService === commandServiceType
          && completeCommand.mainOperation === firmware.FIRMWARE_OPERATE_TYPE.enum_FIRMWARE_OPERATE_TYPE_SEND_VERSION
      )
    }

    const responseBytes = await this.sendCommand(commandServiceType, commandOperateType, configMsg, isReceiveFinish)
    return firmware.firmware_msg.decode(new Uint8Array(responseBytes)).firmwareDataMsg
  }

}