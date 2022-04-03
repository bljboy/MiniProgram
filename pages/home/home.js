// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '123',

  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好啊',
    })
  }
})