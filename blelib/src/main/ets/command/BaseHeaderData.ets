// 常量
import { CRC8 } from './CRC8';

const reservedByte: number = 0xff;

// BaseHeaderData class
export class BaseHeaderData {
  //0
  firstCommand: number = 0x01;
  //1 主服务 （mainService）
  mainServiceType: number = 0x00;
  //2 二级服务 （secondService）
  secondServiceByte: number = reservedByte;
  //3 预留
  byte3: number = reservedByte;
  //4 主服务操作 （mainOperation）
  mainCommandByte: number = reservedByte;
  //5 二级服务操作 （secondOperation）
  secondCommandByte: number = reservedByte;
  //6 预留
  byte6: number = reservedByte;
  //7、8  数据长度

  //9  PB数据的crc

  //10  END_TYPE
  endType: number = 0x01;
  //11..18  预留

  //19   前19个字节的crc


  //PB数据
  pbData: Uint8Array = new Uint8Array(0);

  confirmCommandByteArray(): Uint8Array {
    const data = new Uint8Array([
      this.firstCommand,
      this.mainServiceType,
      this.secondServiceByte,
      this.byte3,
      this.mainCommandByte,
      this.secondCommandByte,
      this.byte6,
      ...Array.from(intTo2Bytes(this.pbData.length)),//7、8
      CRC8.makeCRC8(this.pbData, 0, this.pbData.length),//9  PB数据的crc
      this.endType,//10
      ...Array.from(this.getReservedByteArray(8))//11..18
    ]);

    return BaseHeaderData.updateCRC(data);
  }

  // 更新 CRC
  // public static updateCRC(noneCrcData: Uint8Array): Uint8Array {
  //   const crc = CRC8.makeCRC8(noneCrcData, 0, noneCrcData.length);
  //   const crcByteArray = new Uint8Array([...noneCrcData, crc]);
  //   return crcByteArray;
  // }

  // 更新 CRC
  public static updateCRC(data: Uint8Array): Uint8Array {
    const noneCRCByteArray = new Uint8Array(19);
    noneCRCByteArray.set(data.subarray(0, noneCRCByteArray.length));

    const crc = CRC8.makeCRC8(noneCRCByteArray, 0, noneCRCByteArray.length);
    const result = new Uint8Array(noneCRCByteArray.length + 1);
    result.set(noneCRCByteArray);
    result[noneCRCByteArray.length] = crc;

    return result;
  }

  ///预留字段
  getReservedByteArray(number: number): Uint8Array {
    return new Uint8Array(number).fill(reservedByte);
  }
}

// Helper functions for Int to byte array conversion
function intTo2Bytes(value: number): Uint8Array {
  const buffer = new Uint8Array(2);
  buffer[0] = (value >> 8) & 0xff;
  buffer[1] = value & 0xff;
  return buffer;
}

function intTo4Bytes(value: number): Uint8Array {
  const buffer = new Uint8Array(4);
  buffer[0] = (value >> 24) & 0xff;
  buffer[1] = (value >> 16) & 0xff;
  buffer[2] = (value >> 8) & 0xff;
  buffer[3] = value & 0xff;
  return buffer;
}

function intTo8Bytes(value: number): Uint8Array {
  if (value > Number.MAX_SAFE_INTEGER) {
    throw new Error('Value exceeds maximum safe integer limit');
  }
  const bigValue = BigInt(value);
  const buffer = new Uint8Array(8);
  const dataView = new DataView(buffer.buffer);
  dataView.setBigUint64(0, bigValue, false); // false for big-endian
  return buffer;
}