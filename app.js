App({
  onLaunch: function () {
    console.log("小程序初始化完成");
    // wx.request({
    //   url: '',
    // })
    // wx.getUserInfo({
    //   //数据拿到之后，再进行回调
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    setTimeout(function () {
      const err = new Error()
      throw err
    },1000)
  },
  onShow: function (options) {
    console.log("小程序界面显示出来:onShow")
  },
  onHide: function () {
    console.log("小程序界面被隐藏出来:onHide")
  },
  onError: function (msg) {
    console.log('小程序中发生了一些错误时会执行')
  }
})
