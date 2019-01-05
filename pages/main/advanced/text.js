Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1: 'nihao',
    data2: 'buhao',
    data3: false,
    src:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    var _this = this;
    console.log(_this.data1)
    console.log(_this.data3)
    this.setData({
      data1: "111"

    })
    // this.setData({
    //   data1: "nihao"

    // })
    console.log(_this.data2)
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    console.log(_this.data.data3)
    console.log(_this.data.data1)
  
    // console.log(data1)
    // console.log(park1)
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
  
  nihao:function(){
    var _this = this;
    
        console.log("1")
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        _this.setData({
          src: res.tempFilePaths
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  }
  ,
  fasong:function(){
    console.log("2")
    var that = this;
    console.log("res:"+that.data.src)
    wx.uploadFile({
      url: 'http://localhost:8080/XCXWebPro/NewJSServlet',
      filePath: that.data.src[0],
      name: 'file',
      success: (res) => {
        console.log(res.data)
        // console.log(JSON.parse(res.data).result[0].brief)
        // var dadabf1 = toPercent(JSON.parse(res.data).result[0].score);
        // var dadabf2 = toPercent(JSON.parse(res.data).result[1].score);
        // var dadabf3 = toPercent(JSON.parse(res.data).result[2].score);
        wx.setStorage({
          key: 'cargo',
          // data: JSON.parse(res.data).result[0].brief,
        })
        // wx.reLaunch({
        //   url: '../videoshow/videoshow?data1=' + JSON.parse(res.data).result[0].brief + '&data2=' + JSON.parse(res.data).result[1].brief + '&data3=' + JSON.parse(res.data).result[2].brief + '&dadabf1=' + dadabf1 + '&dadabf2=' + dadabf2 + '&dadabf3=' + dadabf3,
        // })

        // wx.hideLoading();
      },
      fail: function (res) {
        console.log("addfood fail", res);
      },

    })


  }
})