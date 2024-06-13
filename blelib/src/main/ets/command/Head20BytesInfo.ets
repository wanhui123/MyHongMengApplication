import { BaseHeaderData } from './BaseHeaderData';

// Head20BytesInfo class extending BaseHeaderData
export class Head20BytesInfo extends BaseHeaderData {
  ///设置发送的数据
  setPbDataBytes(pbData: Uint8Array): Head20BytesInfo {
    this.pbData = pbData;
    return this;
  }

  ///head[1]  主服务 （mainService）
  setMainServiceType(byte: number): Head20BytesInfo {
    this.mainServiceType = byte;
    return this;
  }

  ///head[2]  二级服务 （secondService）
  setSecondServiceByte(byte: number): Head20BytesInfo {
    this.secondServiceByte = byte;
    return this;
  }

  //head[3]  0xaa.toByte()//下发文件标识（文件上传或者文件下载需要） 第4代协议
  setSendFileTag(byte: number): Head20BytesInfo {
    this.byte3 = byte;
    return this;
  }

  //head[4]  主服务操作 （mainOperation）
  setMainOperationByte(byte: number): Head20BytesInfo {
    this.mainCommandByte = byte;
    return this;
  }

  //head[5]  二级服务操作 （secondOperation）
  setSecondOperationByte(byte: number): Head20BytesInfo {
    this.secondCommandByte = byte;
    return this;
  }

  //head[7] head[8]  数据长度
  //head[9] protoBufCRC
  //head[10] endType
  //head[19] totalCRC
}