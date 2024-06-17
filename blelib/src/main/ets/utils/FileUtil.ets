import { file_download } from '../proto/file_download';
import { ArrayBufferUtil } from './ArrayBufferUtil';
import { HexUtil } from './HexUtil';

export class FileUtil {

  /**
   * 获取文件信息和文件内容
   * @param byteArrayOrBuffer 前4个字节：pb长度  +  pbBytes  + fileBytes
   * @return 文件信息和文件内容
   */
  public static getFileInfoAndFile(byteArrayOrBuffer: Uint8Array | ArrayBuffer): FileDownloadResult {
    let byteArray: Uint8Array;
    if (byteArrayOrBuffer instanceof ArrayBuffer) {
      byteArray = new Uint8Array(byteArrayOrBuffer);
    } else {
      byteArray = byteArrayOrBuffer;
    }

    // 读取前4个字节的长度数据
    const lengthData = HexUtil.subBytes(byteArray, 0, 4);
    const pbSize = ArrayBufferUtil.readInt32BE(lengthData, 0);

    // 读取pbBytes
    const pbBytes = HexUtil.subBytes(byteArray, 4, pbSize);

    // 解析pbInfo
    const pbInfo: file_download.file_download = file_download.file_download.decode(pbBytes);

    // 读取文件内容
    const file = HexUtil.subBytes(byteArray, 4 + pbSize, pbInfo.fileSize);

    console.log(`getFileInfoAndFilePair: fileName = ${pbInfo.fileName}, storedData = ${byteArray.length}, pbSize = ${pbSize}, pbInfo = ${JSON.stringify(pbInfo)}`);

    return { fileInfo: pbInfo, file };
  }
}

export interface FileDownloadResult {
  fileInfo: file_download.file_download;
  file: Uint8Array;
}