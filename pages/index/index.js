let app = getApp();
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
    clearInterval(this.data.daojishi);
    clearTimeout(this.data.daojishi);
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
      url: '../main/load/load'
      
    })
  }
})

