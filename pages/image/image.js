// pages/image/image.js
Page({
  data:{
    imagePath:''
  },
  hadnleImageLoad(){
    console.log('图片加载完成');
  },
  handleChooes(){
    const that = this;
    //系统API，让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      success(res){
        console.log(res);
        const path = res.tempFilePaths[0]
        that.setData({
          imagePath:path
        })
      }
    })
  }
})