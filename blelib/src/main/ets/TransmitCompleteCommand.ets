

export class TransmitCompleteCommand {
  private mByteArray: Uint8Array;
  commandType: number;
  mainService: number;
  secondService: number;
  mainOperation: number;
  secondOperation: number;
  protoBufCRC: number;
  endType: number;
  totalCRC: number;

  constructor(arrayBuffer: ArrayBuffer) {
    this.mByteArray = new Uint8Array(arrayBuffer);
    this.commandType = this.mByteArray[0];
    this.mainService = this.mByteArray[1];
    this.secondService = this.mByteArray[2];
    this.mainOperation = this.mByteArray[4];
    this.secondOperation = this.mByteArray[5];
    this.protoBufCRC = this.mByteArray[9];
    this.endType = this.mByteArray[10];
    this.totalCRC = this.mByteArray[19];
  }

  get dataSize(): number {
    let firstSize = this.mByteArray[7];
    if (firstSize < 0) {
      firstSize += 256;
    }
    let secondSize = this.mByteArray[8];
    if (secondSize < 0) {
      secondSize += 256;
    }
    return firstSize * 256 + secondSize;
  }

  getByteArray(): Uint8Array {
    return this.mByteArray;
  }

  setEndType(byte: number): void {
    this.mByteArray[10] = byte;
  }
}