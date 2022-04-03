// pages/detail/detail.js
Page({
  data: {
  },

  onLoad: function (options) {
    console.log(options);
  },
  onUnload() {
    console.log("页面退出");
    // 1.获取首页页面对象
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages()
    console.log(pages);
    const home = pages[pages.length - 2]

    // 2.调用页面对象的setData
    home.setData({
      title: 'jejej '
    })
  },
  handleBack() {
    wx.navigateBack({
      delta: 1
    })
  }
})