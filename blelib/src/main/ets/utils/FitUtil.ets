import { FitActivityListInfo } from '../data/FitActivityListInfo';
import { cycling_data } from '../proto/cycling_data';

export class FitUtil{

  public static convertFitTimeToString(time: number, format: string): string {
    // 基准时间，加上输入时间的秒数转换为毫秒
    const baseTime = new Date(631065600000 + time * 1000);

    // 构造日期格式化选项
    const options: Intl.DateTimeFormatOptions = {
      year: format.includes('yyyy') ? 'numeric' : undefined,
      month: format.includes('MM') ? '2-digit' : undefined,
      day: format.includes('dd') ? '2-digit' : undefined,
      hour: format.includes('HH') ? '2-digit' : undefined,
      minute: format.includes('mm') ? '2-digit' : undefined,
      second: format.includes('ss') ? '2-digit' : undefined,
      hour12: false, // 使用24小时制
      timeZone: 'Asia/Shanghai',
    };

    // 使用 Intl.DateTimeFormat 格式化日期
    const formatter = new Intl.DateTimeFormat('zh-CN', options);
    const formattedDate = formatter.format(baseTime);

    return formattedDate;
  }


  // 解析和转换数据的主逻辑
  public static parseActivityList(data: ArrayBuffer): FitActivityListInfo[] {
    const parsedData = cycling_data.cycling_data_msg.decode(new Uint8Array(data))
    return parsedData.cyclingDataFileFlagMsg.map((item: cycling_data.Icycling_data_file_flag_message) => {
      const timestamp = item.timestamp - 28800;
      return new FitActivityListInfo(
        FitUtil.convertFitTimeToString(timestamp, "yyyy-MM-dd HH:mm:ss").replace(/\//g, '-'),
        item.timestamp,
        item.fileSize ?? 0 / 1024,
      );
    });
  }

}