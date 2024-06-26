

export class ArrayBufferUtil {
  /**
   * 连接多个ArrayBuffer
   * @param buffers ArrayBuffer数组
   * @return 连接后的ArrayBuffer
   */
  public static concatenate(buffers: ArrayBuffer[]): ArrayBuffer {
    const totalLength = buffers.reduce((acc, buffer) => acc + buffer.byteLength, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const buffer of buffers) {
      result.set(new Uint8Array(buffer), offset);
      offset += buffer.byteLength;
    }
    return result.buffer;
  }

  /**
   * 提取ArrayBuffer的子ArrayBuffer
   * @param buffer 原始ArrayBuffer
   * @param start 起始位置
   * @param length 提取的长度
   * @return 提取的子ArrayBuffer
   */
  public static subArrayBuffer(buffer: ArrayBuffer, start: number, length?: number): ArrayBuffer {
    return buffer.slice(start, length ? start + length : undefined);
  }

  /**
   * 从ArrayBuffer中读取32位大端整数
   * @param buffer ArrayBuffer
   * @param offset 读取的起始位置
   * @return 读取的整数
   */
  // public static readInt32BE(buffer: ArrayBuffer, offset: number): number {
  //   const view = new DataView(buffer);
  //   return view.getInt32(offset, false);
  // }

  /**
   * 从ArrayBuffer或Uint8Array中读取32位大端整数
   * @param buffer ArrayBuffer或Uint8Array
   * @param offset 读取的起始位置
   * @return 读取的整数
   */
  public static readInt32BE(buffer: ArrayBuffer | Uint8Array, offset: number): number {
    if (buffer instanceof Uint8Array) {
      buffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }
    const view = new DataView(buffer);
    return view.getInt32(offset, false);
  }

  /**
   * 将ArrayBuffer转换为Uint8Array
   * @param buffer ArrayBuffer
   * @return 转换后的Uint8Array
   */
  public static toByteArray(buffer: ArrayBuffer): Uint8Array {
    return new Uint8Array(buffer);
  }

  // head[7] 等于 00 表示命令成功 其他表示失败
  public static  isCommandStatusSuccess(headerBytes: ArrayBuffer | Uint8Array | null): boolean | null {
    try {
      if (headerBytes) {
        let view: Uint8Array;

        // 检查 headerBytes 是 ArrayBuffer 还是 Uint8Array，并进行相应处理
        if (headerBytes instanceof ArrayBuffer) {
          view = new Uint8Array(headerBytes);
        } else {
          view = headerBytes;
        }

        // 确保视图长度大于 7
        if (view.length > 7) {
          return view[7] === 0x00;
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  }
}
