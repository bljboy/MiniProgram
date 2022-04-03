
Page({
  handleShowModal() {
    wx.showModal({
      title: "标题",
      duration: 3000,
      content: "我是内容，哈昂哈",
      // showCancel:false,
      cancelText: "退出",
      success(res) {
        console.log(res);
        if (res.cancel) {
          console.log("取消按钮");
        }
        if (res.confirm) {
          console.log("确定按钮");
        }
      },
    })
  },
  handleShowToast() {
    wx.showToast({
      title: '点击了',
      duration: 5000,
      icon: "",
      mask: true,
      success() {
        console.log("弹窗成功")
      },
      fail() {
        console.log("弹窗失败");
      },
      complete() {
        console.log("完成函数的调用");
      }
    })
  },
  handleLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    }),
      setTimeout(() => {
        // 必须手动hideLoading才会让loading消失
        wx.hideLoading()
      }, 1000);
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success() {
        console.log(res);
      }
    })
  },
  handleShareAppMessage(options){
  },
  onShareAppMessage:function (params) {
    return {
      title:"你好啊",
      path:"/pages/about/about",
      imageUrl:"https://img1.baidu.com/it/u=147756509,42215431&fm=253&fmt=auto&app=120&f=JPEG?w=801&h=800"
    }
  }
})