// components/my-tab-control/my-tab-control.js
Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleItemClick(event) {
      const index = event.currentTarget.dataset.index;
      console.log(index);
     this.setData({
      currentIndex:index
     }),
     this.triggerEvent('TabItemClick',{index,titles:this.properties.titles[index]},{})
    }
  }
})
