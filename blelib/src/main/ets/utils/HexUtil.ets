
export class HexUtil{

  /**
   * 将 ArrayBuffer 转十六进制字符串
   * @param buffer
   * @param hasSpace
   * @returns
   */
  // public static arrayBufferToHex(buffer: ArrayBuffer, hasSpace: boolean = true): string {
  //   const byteArray = new Uint8Array(buffer);
  //   const hexParts: string[] = [];
  //
  //   byteArray.forEach(byte => {
  //     // 将字节转换为两位十六进制字符串，并推入数组
  //     const hex = byte.toString(16).padStart(2, '0');
  //     hexParts.push(hex);
  //   });
  //
  //   // 根据hasSpace参数选择是否添加空格
  //   return hasSpace ? hexParts.join(' ') : hexParts.join('');
  // }

  /**
   * 将 ArrayBuffer 或 Uint8Array 转十六进制字符串
   * @param input
   * @param hasSpace
   * @returns
   */
  public static arrayBufferToHex(input: ArrayBuffer | Uint8Array, hasSpace: boolean = true): string {
    let byteArray: Uint8Array;

    // 检查输入类型，并转换为 Uint8Array
    if (input instanceof ArrayBuffer) {
      byteArray = new Uint8Array(input);
    } else {
      byteArray = input;
    }

    const hexParts: string[] = [];

    byteArray.forEach(byte => {
      // 将字节转换为两位十六进制字符串，并推入数组
      const hex = byte.toString(16).padStart(2, '0');
      hexParts.push(hex);
    });

    // 根据 hasSpace 参数选择是否添加空格
    return hasSpace ? hexParts.join(' ') : hexParts.join('');
  }

  /**
   * 将16进制字符串转换为ArrayBuffer
   * @param hexString
   * @returns
   */
  public static hexStringToArrayBuffer(hexString: string): ArrayBuffer {
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

  /**
   * 去掉字符串中的空格，然后将剩余的字符串转换成ArrayBuffer
   * @param hexString
   * @returns
   */
  public static hexStringWithoutSpacesToArrayBuffer(hexString: string): ArrayBuffer {
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

  /**
   * 将ArrayBuffer切分成固定长度的块
   * @param data
   * @param chunkSize
   * @returns
   */
  public static splitArrayBuffer(data: ArrayBuffer, chunkSize: number): ArrayBuffer[] {
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

  /**
   * 将多个字节数组合并为一个字节数组。
   * @param byteArrays - 要合并的 Uint8Array 数组。
   * @returns 单个合并的 Uint8Array。
   */
  public static byteMerger(...byteArrays: Uint8Array[]): Uint8Array {
    // 计算所有字节数组的总长度
    const totalLength = byteArrays.reduce((acc, byteArray) => acc + byteArray.length, 0);

    // 创建一个新的 Uint8Array 并指定总长度
    const mergedArray = new Uint8Array(totalLength);

    // 将每个字节数组复制到合并数组中
    let offset = 0;
    for (const byteArray of byteArrays) {
      mergedArray.set(byteArray, offset);
      offset += byteArray.length;
    }

    return mergedArray;
  }

  /**
   * 截取指定长度数组
   * @param src 源数组
   * @param begin 起始索引
   * @param count 需要截取的长度
   * @returns 截取后的数组
   */
  public static subBytes(src: Uint8Array, begin: number, count: number): Uint8Array {
    const bs = new Uint8Array(count);
    bs.set(src.subarray(begin, begin + count));
    return bs;
  }

}