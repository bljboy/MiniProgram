// pages/home/home.js
const app = getApp()
console.log(app.globaData.name);

Page({
  data:{
    list:[]
  },

  // ---------------1.监听页面的生命周期函数-------------

  //页面被加载出来
  onLoad(){
    console.log('onload');
   this.getRequest()
  },
  getRequest(){
    var that = this;
    wx.request({
      url: 'http://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=0&num=10&appkey=28484dd6dafeebd7',
      success (res) {
        console.log(res);
        const data  = res.data.result.list;
        that.setData({
          list:data
        })
      }
    })
  },
  // 页面显示出来
  onShow(){
    console.log('onShow');

  },
  // 页面初次渲染完成时触发
  onReady(){
    console.log('onReady');
  },
  // 页面隐藏/切入后台时触发
  onHide(){
    console.log('onHide');

  },
  // 页面卸载时触发
  onUnload(){
    console.log('onUnload');

  },
  handleGetUserInfo:function (event) {
    console.log(event);
  },
  handleViewClick(){
    console.log('hahahah被点击')
  },
  //监听页面滚动
  onPageScroll(obj){
    // console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部');
  },
  onPullDownRefresh(){
    console.log('下拉刷新的事件');
  }
})
