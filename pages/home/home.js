Page({
  data: {
    counter: 0,
  },
  handleIncrement(event) {
    console.log('---------', event.detail.name);
    // console.log("5656");
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClick() {
    console.log("点击了");
  },
  handleTabClick(event) {
    console.log('--------', event);
  },
  handleIncrementCpn(e) {
    const my_sel = this.selectComponent('.sel-class');
    //   // 不合理，不规范
    // my_sel.setData({
    //   counter:10
    console.log(e);
    my_sel.incrementCounter(100)
  },
  
})