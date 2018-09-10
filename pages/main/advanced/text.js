// pages/main/advanced/text.js
var app = getApp();
//全局变量
//全局变量

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    counting: false,//倒计时
    ressrc : "",
    src:"",
    nuller:""
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.daojishi();//一进来就拍照倒计时
    this.ctx = wx.createCameraContext()//创建摄像头对象
   
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
      countDown(that, 5);
     
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
  
  },
 
})
//倒计时函数 在page外

function countDown(that, count) {
  console.log(that.nuller);
  if (count == 0) {
    //等于0时拍照
    that.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res.tempImagePath);
        that.setData({
          // src: res.tempImagePath
        })
        // wx.switchTab({
        //   url: '../mine/text',
          
        // })
        wx.reLaunch({
          url: '../mine/text',
        })
      
      wx.uploadFile({
        url: 'https://gunnerbai.mynatapp.cc/XCXWebPro/JsonServlet',
        filePath: res.tempImagePath,
        name: 'file',
        success:(res)=>{
          console.log(res.data)
          console.log(JSON.parse(res.data).result[0].brief)
          wx.setStorage({

            key: 'cargo',
            data: JSON.parse(res.data).result[0].brief,
          })
        },
        
      })
    
    
      
       
        wx.showToast({
          title: '拍照完成',
        })
   
      }
    })
    that.setData({
      counting: false
    })
    return;
  }
  wx.showLoading({//加载时显示倒计时
    title: '拍照倒计时' + count + '秒',
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
function jsonToString(data) {
  return JSON.parse(data);
}