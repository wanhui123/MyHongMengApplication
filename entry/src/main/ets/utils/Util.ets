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

    return buffer;
  }
}

export default new Utils()