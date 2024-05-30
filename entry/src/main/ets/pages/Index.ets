

@Entry
@Component
struct Index {
  @State isLoading:Boolean = false

  build() {
    Column() {
      Stack() {
        Button("开始扫描")
          .onClick(() => this.onSearchClick())
          .fontSize(18)
          .height(48)
          .fontWeight(FontWeight.Bold)
        // LoadingProgress()
        //   .width(40)
        //   .height(40)
        //   .align(Alignment.Center)
        //   .color($r('app.color.colorPrimary'))
        //   .markAnchor({ x: 40 + 10, y: -20 })
        //   .position({ x: '100%', y: 0 })
        //   .visibility(this.isLoading ? Visibility.Visible : Visibility.None)
      }
      .alignContent(Alignment.Center)
      .width('100%')

    }
    .width('100%')
    .height('100%')
  }

  //组件即将出现时回调该接口，具体时机为在创建自定义组件的新实例后，在执行其build()函数之前执行
  aboutToAppear() {
  }

  //aboutToDisappear函数在自定义组件析构销毁之前执行
  aboutToDisappear() {
  }

  private onSearchClick(): void{

  }


}