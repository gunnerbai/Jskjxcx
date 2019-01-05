// pages/jzym/jzym.js
var i1 =  1;
var i2 =  1;
var i3 =  1;
var i4 =  1;
var i5 =  1;
var i6 =  1;
var i7 =  1;
var i8 =  1;
var i9 =  1;
var i10 = 1;
var i11 = 1;
var i12 = 1;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    aaa:'',
    bbb: '',
    ccc: '',
    ddd: '',
    eee: '',
    fff: '',
    ggg: '',
    hhh: '',
    iii: '',
    jjj: '',
    kkk: '',
    lll: '',
    
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
  ,
  btn1:function(){
      var that = this;
    var bgColor = this.data.aaa == '' ? '#eec33d' : '';
    that.setData({
      aaa: bgColor


    })
    wx.reLaunch({
      url: '../index/index',
    })

  }
  ,
  btn2: function () {
    var that = this;
    var bgColor = this.data.bbb == '' ? '#eec33d' : '';
    that.setData({
      bbb: bgColor


    })
    wx.reLaunch({
      url: '../index/index',
    })

  }
  ,
  btn3: function () {
    var that = this;
    var bgColor = this.data.ccc == '' ? '#eec33d' : '';
    that.setData({
      ccc: bgColor


    })
    wx.reLaunch({
      url: '../index/index',
    })

  }
  ,
  btn4: function () {
    var that = this;
    var bgColor = this.data.ddd == '' ? '#eec33d' : '';
    that.setData({
      ddd: bgColor


    })
    wx.reLaunch({
      url: '../index/index',
    })

  }
  ,
  btn5: function () {
    var that = this;
    var bgColor = this.data.eee == '' ? '#eec33d' : '';
    that.setData({
      eee: bgColor


    })
    wx.reLaunch({
      url: '../index/index',
    })

  }
  ,
  btn6: function () {
    var that = this;
    var bgColor = this.data.fff == '' ? '#eec33d' : '';
    that.setData({
      fff: bgColor


    })

    wx.reLaunch({
      url: '../index/index',
    })
  }
  ,
  btn7: function () {
    var that = this;
    var bgColor = this.data.ggg == '' ? '#eec33d' : '';
    that.setData({
      ggg: bgColor


    })


  }
  ,
  btn8: function () {
    var that = this;
    var bgColor = this.data.hhh == '' ? '#eec33d' : '';
    that.setData({
      hhh: bgColor


    })


  }
  ,
  btn9: function () {
    var that = this;
    var bgColor = this.data.iii == '' ? '#eec33d' : '';
    that.setData({
      iii: bgColor


    })


  }
  ,
  btn10: function () {
    var that = this;
    var bgColor = this.data.jjj == '' ? '#eec33d' : '';
    that.setData({
      jjj: bgColor


    })


  }

  ,
  btn11: function () {
    var that = this;
    var bgColor = this.data.kkk == '' ? '#eec33d' : '';
    that.setData({
      kkk: bgColor


    })


  }

  ,
  btn12: function () {
    var that = this;
    var bgColor = this.data.lll == '' ? '#b81c25' : '';
    that.setData({
      lll: bgColor


    })


  }
  , 
  
  qcbtn:function(){
    console.log("11")
     wx.reLaunch({
       url: '../index/index',
     })




  }




})

