type Callback<T> = (data: T) => void;

class Observable<T> {
  private observers: Callback<T>[] = [];
  private _data: T | null = null;

  // 订阅观察者
  subscribe(callback: Callback<T>): void {
    this.observers.push(callback);
    // 如果有数据，立即通知新的观察者
    if (this._data !== null) {
      callback(this._data);
    }
  }

  // 取消订阅
  unsubscribe(callback: Callback<T>): void {
    this.observers = this.observers.filter(observer => observer !== callback);
  }

  // 通知所有观察者
  notify(data: T): void {
    this._data = data;
    this.observers.forEach(observer => observer(data));
  }

  // 获取当前数据
  getData(): T | null {
    return this._data;
  }
}

export default Observable;