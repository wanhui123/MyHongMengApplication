
export class TimeoutManager {
  private timerId: number | null = null;

  /**
   * 启动或重置定时器
   * @param callback 超时后的回调函数
   * @param timeout 超时时间（毫秒）
   */
  start(callback: () => void, timeout: number): void {
    this.clear(); // 清除当前定时器（如果有）
    this.timerId = setTimeout(callback, timeout); // 启动新的定时器
  }

  /**
   * 取消并销毁定时器
   */
  cancel(): void {
    this.clear(); // 取消当前定时器
  }

  /**
   * 清除定时器
   */
  private clear(): void {
    if (this.timerId !== null) {
      clearTimeout(this.timerId); // 清除定时器
      this.timerId = null; // 重置 timerId
    }
  }
}