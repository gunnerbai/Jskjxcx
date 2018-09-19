// pages/main/videoshow/videoshow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sxxbfb:"",
    bxx1bfb:"",
    bxx2bfb: "",
    data1:"",
    data2: "",
    data3: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.data1);
    console.log(options.data2);
    console.log(options.data3);
    // this.setDada({
     


    // })
    this.setData({
      // src: res.tempImagePath
      sxxbfb: "匹配度" + options.dadabf1,
      bxx1bfb: "匹配度" + options.dadabf2,
      bxx2bfb: "匹配度" + options.dadabf3,
      data1: options.data1,
      data2: options.data2,
      data3: options.data3,
    })
    
    console.log(options.dadabf1);
    console.log(options.dadabf2);
    console.log(options.dadabf3);
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
  ,

  SXX:function(){
    var that = this;
    wx.navigateTo({
      url: '../simple/text?data1=' + that.data.data1,
    })

  },
  BXX1: function () {
    var that = this;
    wx.navigateTo({
      url: '../simple/text?data1=' + that.data.data2,
    })

  },
  BXX2: function () {
    var that = this;
    wx.navigateTo({
      url: '../simple/text?data1=' + that.data.data3,
    })
 
  },
  simplebtnback:function(){

    wx.navigateTo({
      url: '/pages/logs/logs'
    })


  }
})