Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    var books_contents = [
      {
        date: "Dec 5 2018",
        title: "月亮与六便士",
        book_img: "/image/books/moon.png",
        content: "一个原本平凡的伦敦证券经纪人思特里克兰德，突然着了艺术的魔，抛妻弃子，绝弃了旁人看来优裕美满的生活，奔赴南太平洋的塔希提岛，用圆笔谱写出自己光辉灿烂的生命，把生命的价值全部注入绚烂的画布的故事。",
        author:"威廉· 萨默赛特·毛姆",
        view_num: "112",
        collect_num: "97",
        author_img: "/image/books/moon.png"
      },
      {
        date: "Dec 6 2018",
        title: "变量",
        book_img: "/image/books/bianliang.png",
        content: "这套书的写作时间跨度是30年，我会每年写一本，一共写30本，记录中国历史上一段激动人心的时期。",
        author: "何帆",
        view_num: "112",
        collect_num: "97",
        author_img: "/image/books/bianliang.png"
      },
    ]
    this.setData({
      books_key: books_contents
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
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