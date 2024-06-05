

export class BleManager{

  private constructor() {
  }

  public static create(): BleManager {
    return new BleManager()
  }

  public init(): void{
    console.log("BleManager initialization")
  }

}