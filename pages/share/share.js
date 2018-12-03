// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currHave:'',
    cost:'',
    buyin:'',
    currPrice:'',
    nowPrice:''
  },
  currHaveInput:function(e){
    this.setData({
      currHave:e.detail.value
    })
  },
  costInput: function (e) {
    this.setData({
      cost: e.detail.value
    })
  },
  buyinInput: function (e) {
    this.setData({
      buyin: e.detail.value
    })
  },
  currPriceInput: function (e) {
    this.setData({
      currPrice: e.detail.value
    })
  },
  lastPriceInput: function (e) {
    this.setData({
      lastPrice: e.detail.value
    })
  },
  btnCal:function(){    
    var total = Number(this.data.currHave) * Number(this.data.cost) + Number(this.data.buyin) * Number(this.data.currPrice);
    console.log(total);
    var have = Number(this.data.currHave) + Number(this.data.buyin);
    console.log(have);
    var newPrice= total/have;
    console.log(newPrice);
    this.setData({"nowPrice":newPrice.toFixed(2)});
  },
  btnReset:function(){
    /*
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    }) 
    */
    this.setData({ "nowPrice":""});
    this.setData({"currHave":""});
    this.setData({ "cost": "" });
    this.setData({ "buyin": "" });
    this.setData({ "currPrice": "" });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})