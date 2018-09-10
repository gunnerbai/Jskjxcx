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
    console.log("进入Log页面");
    this.daojishi();//一进来就拍照倒计时
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
})


function countDown(that, count) {
  console.log(that.nuller);
  if (count == 0) {
    //等于0时拍照
    wx.reLaunch({
      url: '../index/index',
    })
    that.setData({
      counting: false
    })
    return;
  }
  wx.showLoading({//加载时显示倒计时
    // title:  count + '秒',
  })

  setTimeout(function () {
    wx.hideLoading()
  }, 1000)
  that.setData({
    counting: true,
  })
  setTimeout(function () {
    count--;
    countDown(that, count);
  }, 1000);
}