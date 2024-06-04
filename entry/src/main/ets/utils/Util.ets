import { buffer, util } from '@kit.ArkTS';

class Utils {
  string2Buffer(value: string) {
    let buf = buffer.from(value);
    return buf;
  }

  buffer2String(buf: buffer.Buffer) {
    let string = buf.toString();
    return string;
  }

  string2ArrayBuffer(value: string) {
    let buf = buffer.from(value,'utf16le').buffer;
    return buf;
  }

  ArrayBuffer2String(buf: ArrayBuffer) {
    const decoder = util.TextDecoder.create("utf-8");
    const str = decoder.decodeWithStream(new Uint8Array(buf));
    return str;
  }

  string2ArrayBuffer2(str: string): ArrayBuffer {
    let array = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
      array[i] = str.charCodeAt(i);
    }
    return array.buffer;
  }

  charString2ArrayBuffer(value: string) {
    let encoder = new util.TextEncoder();
    let buffer = new ArrayBuffer(value.length);
    let dest = new Uint8Array(buffer);
    encoder.encodeIntoUint8Array(value, dest);
    Uint8Array
    return buffer;
  }

  //将 ArrayBuffer 转十六进制字符串
  arrayBufferToHex(buffer: ArrayBuffer, hasSpace: boolean = true): string {
    const byteArray = new Uint8Array(buffer);
    const hexParts: string[] = [];

    byteArray.forEach(byte => {
      // 将字节转换为两位十六进制字符串，并推入数组
      const hex = byte.toString(16).padStart(2, '0');
      hexParts.push(hex);
    });

    // 根据hasSpace参数选择是否添加空格
    return hasSpace ? hexParts.join(' ') : hexParts.join('');
  }

  //将16进制字符串转换为ArrayBuffer
  hexStringToArrayBuffer(hexString: string): ArrayBuffer {
    // 如果字符串长度不是偶数，补0
    if (hexString.length % 2 !== 0) {
      hexString = '0' + hexString;
    }

    const buffer = new Uint8Array(hexString.length / 2);

    for (let i = 0; i < hexString.length; i += 2) {
      buffer[i / 2] = parseInt(hexString.substring(i, i + 2), 16);
    }

    return buffer.buffer;
  }

  //去掉字符串中的空格，然后将剩余的字符串转换成ArrayBuffer
  hexStringWithoutSpacesToArrayBuffer(hexString: string): ArrayBuffer {
    // 去掉空格
    let hexWithoutSpaces = hexString.replace(/\s/g, '');

    // 如果字符串长度不是偶数，补0
    if (hexWithoutSpaces.length % 2 !== 0) {
      hexWithoutSpaces = '0' + hexWithoutSpaces;
    }

    const buffer = new Uint8Array(hexWithoutSpaces.length / 2);

    for (let i = 0; i < hexWithoutSpaces.length; i += 2) {
      buffer[i / 2] = parseInt(hexWithoutSpaces.substring(i, i + 2), 16);
    }

    return buffer.buffer;
  }

  //将ArrayBuffer切分成固定长度的块
  splitArrayBuffer(data: ArrayBuffer, chunkSize: number): ArrayBuffer[] {
    const dataArray = new Uint8Array(data);
    const chunks: ArrayBuffer[] = [];

    for (let i = 0; i < dataArray.length; i += chunkSize) {
      const chunk = dataArray.slice(i, i + chunkSize);
      // 创建一个新的ArrayBuffer，并将切片数据复制进去
      const chunkBuffer = chunk.buffer.slice(chunk.byteOffset, chunk.byteOffset + chunk.byteLength);
      chunks.push(chunkBuffer);
    }

    return chunks;
  }

}

export default new Utils()