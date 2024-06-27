import BleManager from '../BleManager';
import { BaseHeaderData } from '../command/BaseHeaderData';
import { Head20BytesInfo } from '../command/Head20BytesInfo';
import { FitActivityListInfo } from '../data/FitActivityListInfo';
import { common } from '../proto/common';
import { cycling_data } from '../proto/cycling_data';
import { TransmitCompleteCommand } from '../TransmitCompleteCommand';
import { FileDownloadResult, FileUtil } from '../utils/FileUtil';
import { FitUtil } from '../utils/FitUtil';
import { HexUtil } from '../utils/HexUtil';

export class ActivityService {
  private deviceBleManager: BleManager

  constructor(deviceBleManager: BleManager) {
    this.deviceBleManager = deviceBleManager
  }

  //读取活动列表信息
  async readActivityListInformation(): Promise<common.Ifile_list_get_message|undefined|null> {
    const msg = cycling_data.cycling_data_msg.create({
      serviceType: common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA,
      cyclingDataOperateType: cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET,
    })
    const sendPbBytes = cycling_data.cycling_data_msg.encode(msg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA)
      .setMainOperationByte(cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()

    const sendData = HexUtil.byteMerger(headByteArray, sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA
        && completeCommand.mainOperation === cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_NUM_GET;
    }

    const responseBytes = await this.deviceBleManager.writeThirdUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    const responseData:common.Ifile_list_get_message|undefined|null = cycling_data.cycling_data_msg.decode(new Uint8Array(responseBytes)).listMsg
    return responseData
  }

  //读取活动列表
  async readActivityList(range: common.file_list_get_message | null = null): Promise<FitActivityListInfo[]> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA
    const commandOperateType = cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_GET
    const commandTag = "readActivityList"

    const msg = cycling_data.cycling_data_msg.create({
      serviceType: commandServiceType,
      cyclingDataOperateType: commandOperateType,
      listMsg: range
    })
    const sendPbBytes = cycling_data.cycling_data_msg.encode(msg).finish()

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
        && (completeCommand.mainOperation === commandOperateType
          || completeCommand.mainOperation === cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_LIST_SEND);
    }

    const responseBytes = await this.deviceBleManager.writeThirdUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    const responseData = FitUtil.parseActivityList(responseBytes)
    return responseData
  }

  //获取某一条活动FIT文件
  async readActivityFitFile(id: number): Promise<FileDownloadResult> {
    const commandServiceType = common.service_type_index.enum_SERVICE_TYPE_INDEX_CYCLING_DATA
    const commandOperateType = cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_FILE_GET
    const commandTag = "readActivityFitFile"

    const msg = cycling_data.cycling_data_msg.create({
      serviceType: commandServiceType,
      cyclingDataOperateType: commandOperateType,
      cyclingDataFileFlagMsg: [
        cycling_data.cycling_data_file_flag_message.create({
          timestamp: id
        })
      ]
    })
    const sendPbBytes = cycling_data.cycling_data_msg.encode(msg).finish()

    const headByteArray = new Head20BytesInfo()
      .setMainServiceType(commandServiceType)
      .setMainOperationByte(commandOperateType)
      .setPbDataBytes(sendPbBytes)
      .confirmCommandByteArray()
    let head = new TransmitCompleteCommand(headByteArray.buffer as ArrayBuffer).getByteArray()
    head[3] = 0x55 //获取文件标识（文件上传或者文件下载需要）

    const sendData = HexUtil.byteMerger(BaseHeaderData.updateCRC(head), sendPbBytes)

    const isReceiveFinish = (checkData: ArrayBuffer | null, storedData: Uint8Array) => {
      if (!checkData) {
        return false
      }
      const completeCommand = new TransmitCompleteCommand(checkData)
      return completeCommand.mainService === commandServiceType
        && completeCommand.mainOperation === cycling_data.CYCLING_DATA_OPERATE_TYPE.enum_CYCLING_DATA_OPERATE_TYPE_FILE_SEND;
    }

    const responseBytes = await this.deviceBleManager.writeThirdUartRXCharacteristic(sendData.buffer as ArrayBuffer, isReceiveFinish)
    const responseData = FileUtil.getFileInfoAndFile(responseBytes)
    return responseData
  }

}