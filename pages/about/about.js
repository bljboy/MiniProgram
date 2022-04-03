import request from "../../service/network.js";
Page({
  handleNetWork(){
    request({
      url:"https://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&start=0&num=10&appkey=28484dd6dafeebd7",
    }).then(res=>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
})