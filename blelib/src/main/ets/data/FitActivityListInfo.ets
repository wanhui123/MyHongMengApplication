
export class FitActivityListInfo{
  public displayTime: string;//显示时间 (yyyy-MM-dd HH:mm:ss)
  public timestamp: number;//fit返回的时间戳，同时表示fileID
  public fileSizeKB: number;//文件大小.(单位：kb)

  constructor(
    displayTime: string,
    timestamp: number,
    fileSizeKB: number,
  ) {
    this.displayTime = displayTime;
    this.timestamp = timestamp;
    this.fileSizeKB = fileSizeKB;
  }
}