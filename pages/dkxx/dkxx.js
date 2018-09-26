// pages/dkxx/dkxx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesrc: 'http://gunnerbai.mynatapp.cc/XCXWebPro/wsz.png',
    dkimage:"",
    dkname:"",
    dkjj:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.data2);
      
    that.setData({
      dkimage: options.data1,
      dkname: options.data2,
      dkjj: options.data3

    })

    // 拼接请求url
    const url = 'https://gunnerbai.mynatapp.cc/XCXWebPro/ShowDataServlet';
    // 请求数据
    wx.request({
      url: url,
      data: {
        showdata: options.data2,
        cxId: "BZMC"


      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        // var j =JSON.parse(res.data);
        console.log(res.data.list.length);
        var j = res.data.list;
        for (var i = 0; i < res.data.list.length; i++) {

          var a = {};

          j[i]


        }

        // 赋值
        that.setData({
          title: '美妆信息',
          list: j,
          type: 'us_box',
          loading: false // 关闭等待框
        })



      }
    })



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

})