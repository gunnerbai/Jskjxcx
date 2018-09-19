// pages/listview/listview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  // 点击图片的点赞事件  这里使用的是同步的方式
  toCollect: function (event) {
    // 获取所有的缓存
    var cache = wx.getStorageSync('cache_key');
    // 获取当前文章是否被点赞的缓存
    var currentCache = cache[this.data.currentId];
    // 取反，点赞的变成未点赞 未点赞的变成点赞
    currentCache = !currentCache;
    // 更新cache中的对应的1个的缓存值，使其等于当前取反的缓存值
    cache[this.data.currentId] = currentCache;
    // 重新设置缓存
    wx.setStorageSync('cache_key', cache);
    // 更新数据绑定,从而切换图片
    this.setData({
      // collection 默认的是 false
      collection: currentCache
    });
    // 交互反馈
    wx.showToast({
      title: currentCache ? '点赞' : '取消',
      icon: 'success',
      duration: 2000
    });
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

  , imagebutton1: function () {


    wx.navigateTo({
      url: '../datashow/datashow?data1=https://gunnerbai.mynatapp.cc/XCXWebPro/img/rxyq1.jpg&data2=rxyzq',
    })



  }
  , imagebutton2: function () {

    wx.navigateTo({
      url: '../datashow/datashow?data1=https://gunnerbai.mynatapp.cc/XCXWebPro/img/hlf1.jpg&data2=hlqxz',
    })



  }
  , imagebutton3: function () {

    wx.navigateTo({
      url: '../datashow/datashow?data1=https://gunnerbai.mynatapp.cc/XCXWebPro/img/wsy1.jpg&data2=wsyxsz',
    })



  }
  , imagebutton4: function () {

    wx.navigateTo({
      url: '../datashow/datashow?data1=https://gunnerbai.mynatapp.cc/XCXWebPro/img/bdz1.jpg&data2=omhxbdz',
    })



  }
  , imagebutton5: function () {

    wx.navigateTo({
      url: '../datashow/datashow?data1=https://gunnerbai.mynatapp.cc/XCXWebPro/img/tqz1.jpg&data2=tqblz',
    })



  }
  , imagebutton6: function () {

    wx.navigateTo({
      url: '../datashow/datashow?data1=https://gunnerbai.mynatapp.cc/XCXWebPro/img/ecy1.jpg&data2=ecyrmz',
    })



  }
  , imagebutton7: function () {

    wx.navigateTo({
      url: '../datashow/datashow?data1=https://gunnerbai.mynatapp.cc/XCXWebPro/img/dyp1.jpg&data2=zjdyp',
    })



  }
  , imagebutton8: function () {

    wx.showToast({
      title: '敬请期待...',
      icon: 'none'
    })



  }
})