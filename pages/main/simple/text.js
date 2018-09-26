// pages/main/simple/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesrc: 'http://gunnerbai.mynatapp.cc/XCXWebPro/wsz.png',
    job: [],
    jobList: [],
    id: '',
    isClick: false,
    jobStorage: [],
    jobId: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.data1);
    that.setData({ videurl: "https://gunnerbai.mynatapp.cc/XCXWebPro/spsc/" + options.data1 + ".mp4" })
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
  btn1:function(){
    wx.switchTab({
      url: '../advanced/text',
     
    })

  },
  simplebtnback:function(){

    // wx.reLaunch({
    //   url: '/packageShop/pages/index/index',
    //   })

    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
  ,
  simplebtnmore: function () {

   wx.showToast({
     title: '敬请期待后续内容...',
     icon:'none'
   })


  },
  haveSave(e) {
    if (!this.data.isClick == true) {
      let jobData = this.data.jobStorage;
      jobData.push({
        jobid: jobData.length,
        id: this.data.job.id
      })
      wx.setStorageSync('jobData', jobData);//设置缓存
      wx.showToast({
        title: '已收藏',
      });
    } else {
      wx.showToast({
        title: '已取消收藏',
      });
    }
    this.setData({
      isClick: !this.data.isClick
    })
  }
  ,
  itemgz: function () {
    var that = this;
    that.setData({
      imagesrc: 'http://gunnerbai.mynatapp.cc/XCXWebPro/ysz.png'
    })
    wx.showToast({
      title: '已收藏',
      icon:'success'
    })
  }
})