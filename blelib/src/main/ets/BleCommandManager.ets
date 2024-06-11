
import { BleCommand } from './BleCommand'

/**
 * 命令管理器：管理和调度不同通道的命令执行
 */
export class BleCommandManager{
  private commands: Record<number, BleCommand[]> = {};

  /**
   * 添加命令到指定通道
   * @param channel 通道编号
   * @param command 命令实例
   */
  addCommand(channel: number, command: BleCommand) {
    if (!this.commands[channel]) {
      this.commands[channel] = [];
    }
    this.commands[channel].push(command);
    if (this.commands[channel].length === 1) {
      this.executeNextCommand(channel);
    }
  }

  /**
   * 执行指定通道的下一个命令
   * @param channel 通道编号
   */
  private async executeNextCommand(channel: number) {
    if (this.commands[channel].length === 0) {
      return;
    }

    const command = this.commands[channel][0];
    try {
      await command.execute();
      console.log(`通道 ${channel} 命令执行成功`);
    } catch (err) {
      console.error(`通道 ${channel} 命令执行失败: ${err}`);
    } finally {
      this.commands[channel].shift();
      if (this.commands[channel].length > 0) {
        this.executeNextCommand(channel);
      }
    }
  }

}