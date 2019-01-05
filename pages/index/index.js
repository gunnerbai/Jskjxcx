let app = getApp();
var imagepath = new Array();
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
    console.log("进入index页面");
    new app.WeToast();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  //倒计时
  daojishi: function () {
    var that = this;
    if (!that.data.counting) {
      //开始倒计时5秒
      countDown(that, 3);

    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("index的onShow") 
  }, 

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
    var that = this;
    clearInterval(this.data.daojishi);
    clearTimeout(this.data.daojishi);
  

      console.log(imagepath)
      
      wx.setStorage({

        key: 'imagepath',
        data: imagepath,
      })
      
      // that.setData({
        
      //   imagepath:""

      // })
      imagepath =new Array()
   
    // wx.showToast({
    //   title: '这是弹窗',
    //   icon:'../image/psy2.png'
    // })
    // this.count=0
   
  
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
  , ym2view:function(){
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    var that = this;
    // that.wetoast.toast({
    //   title: 'WeToast'
    //   // img: 'http://gunnerbai.mynatapp.cc/XCXWebPro/ymsm.png',
    //   // imgClassName: 'my_wetoast_img',
    //   // imgMode: 'scaleToFill'
    // })
    console.log("点击了button");
    wx.reLaunch({
      // url: '../main/load/load'
      url: '/pages/main/recharge/text'
      
    })
  }
  , ym2bdtp:function(){
      var that = this;
      wx.chooseImage({
        count: 4, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function(res) {
          console.log("success")
          var a = res.tempFilePaths
          console.log(a)
          imagepath.push(a)
          // that.setData({

          //   imagepath :a

          // })
          console.log(imagepath)
          wx.showLoading({
            title: '正在加载请稍后',
          })
          setTimeout(function () {

            wx.reLaunch({

              url: '/pages/main/imagecc/iamgecc'

            })
          wx.hideLoading();
          }, 2000)
        },
        fail: function () {
          // fail
       
          console.log("fail")
        },
      })    




  }
})

