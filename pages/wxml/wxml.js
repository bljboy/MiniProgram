Page({
  data: {
    message: "hello world",
    firstname: "bao",
    lastname: "LJ",
    age: 18,
    nowTime: new Date().toLocaleString(),
    isAction: false,
    isShow:true,
    movies:['bbb','ccc','ddd']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      }, 1000)
    })
  },
  handleSetColors(){
    this.setData({
      isAction:!this.data.isAction
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  }
})