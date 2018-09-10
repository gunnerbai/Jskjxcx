// pages/main/mine/text.js
var app = getApp();//取得全局App({..})实例
Page({
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)},
  /**
   * 页面的初始数据
   */
  data: {
    videurl :"",
    showOrHidden: false,
    showView: true,
    imgUrls: [
      'http://gunnerbai.mynatapp.cc/XCXWebPro/ymsm.png',
    
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
    flag: true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)

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
  
  },
   onChangeShowState: function () {

    var that = this;
     console.log("showView" + that.data.showView),
    that.setData({

      showView: (!that.data.showView)

    })

  },
  show: function () {

    this.setData({ flag: false })

  },
  //消失

  hide: function () {

    this.setData({ flag: true })

  },
  minebutton:function(){
   
    // this.setData({
    //   // src: res.tempImagePath
    //   videurl ="http://75mpn9.natappfree.cc/XCXWebPro/cup.mp4",
    // })
    var that = this;

    console.log("showView" +that.data.showView),
    that.setData({
      showView: (!that.data.showView)

    })
   
    console.log("res.data");

    wx.getStorage({
      key: 'cargo',
      success: function (res) {
        console.log("成功" + res.data);

        that.setData({ videurl: "https://gunnerbai.mynatapp.cc/XCXWebPro/" + res.data + ".mp4" })

      },
    })


    
  }, showButton: function () {  
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
})