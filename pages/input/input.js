Page({
  handleInput(event){
    console.log('输入的内容：',event);
  },
  handleFocus(event){
    console.log('获取焦点',(event));

  },
  handleBlur(event){
    console.log('失去焦点',event);

  },
})