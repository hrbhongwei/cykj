// pages/book-create/book-create.js
var bookService = require('../../service/book-service.js');
var appInstance = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    wx.showToast({
      title: '保存中',
      icon: 'loading'
    });

    bookService.createBook(e.detail.value, res => {
      wx.hideToast();

      wx.navigateBack({
        
      })

    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  }

})