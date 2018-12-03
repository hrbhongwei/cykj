Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log("onLoad");
        var posts_contents = [
        {
            date: "Dec 5 2018",
            title: "我的第一篇blog",
            post_img: "/image/posts/3.jpg",
            content: "我的第一篇blog，也是我的第一个小程序，坚持自律，成就美好的自己，且行且珍惜！",
            view_num: "112",
            collect_num: "97",
            author_img: "/image/png/3.png"
        },
        {
                date: "Dec 6 2018",
                title: "我的第二篇blog",
                post_img: "/image/posts/2.jpg",
                content: "我的第一篇blog，也是我的第一个小程序，坚持自律，成就美好的自己，且行且珍惜！",
                view_num: "112",
                collect_num: "97",
                author_img: "/image/png/2.png"
        },
        ]
        this.setData({
            posts_key: posts_contents
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log("onReady");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log("onShow");
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log("onHide");
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log("onUnload");
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})