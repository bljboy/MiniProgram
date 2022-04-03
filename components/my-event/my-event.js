Component({

  methods:{
    handleIncrement(){
      // console.log('------------ '),
      this.triggerEvent('increment',{name:'why',age:80},{})
    }
  },
  data:{
    counter:0
  }
})