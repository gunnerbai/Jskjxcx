// pages/main/recharge/text.js
var count = 0;
var count1 = 0;
var imagepath=new Array();
let app = getApp();
let mytoast;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src111:"../image/psy1.png",
    modalHidden: false,
    hiddenaaa:false,
    displayaaa: "block",
    displaybbb:"none",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // new app.WeToast();
    mytoast= new app.WeToast();
    // var that = this;
    this.ctx = wx.createCameraContext()//创建摄像头对象


  
    // wx.showToast({
    //   title: '成功',
    //   image: '../image/pszy.jpg',
    //   duration: 2000
    // })


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
    // console.log(imagepath)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(imagepath)

    wx.setStorage({

      key: 'imagepath',
      data: imagepath,
    })
    // wx.showToast({
    //   title: '这是弹窗',
    //   icon:'../image/psy2.png'
    // })
    // this.count=0
    imagepath = new Array();
   
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
  /**
* 显示弹窗
*/
  buttonTap: function () {

    this.setData({
      modalHidden: false
    })
  },

  /**
  * 点击取消
  */
  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
  * 点击确认
  */
  modalConfirm: function () {
    // do something
    
    this.setData({
      modalHidden: true,
      displayaaa: "none",
      displaybbb: "block"
      // hiddenaaa: true
    })
  },
  buton1:function(){
    var that = this;
    var images = ["../image/psy2.png", "../image/psy3.png", "../image/psy4.png"];
    // this.wetoast.toast({
    //   title: 'WeToast'
    //   // img: 'http://gunnerbai.mynatapp.cc/XCXWebPro/ymsm.png',
    //   // imgClassName: 'my_wetoast_img',
    //   // imgMode: 'scaleToFill'
    // })
    // var that = this;
    wx.showLoading({
      title: '正在保存请稍后',
    })
    that.ctx.takePhoto({
      quality: 'low',
    
      success: (res) => {
        // console.log(res.tempImagePath);
        imagepath.push(res.tempImagePath);
        // console.log(imagepath.length);
        // console.log(res)
        that.setData({
          // src: res.tempImagePath
          imagepath
       
        })
        
        console.log("拍照的image"+imagepath)
        // wx.switchTab({
        //   url: '../mine/text',

        // }
    
        wx.saveImageToPhotosAlbum({
          filePath: res.tempImagePath,
          success: function (res) {
            // imagepath.push(res.tempImagePath);
            console.log(res)
            // that.setData({
            //   // src: res.tempImagePath
            //   imagepath

            // })
          },
          fail: function (res) {
            console.log("照片存储报错"+res)
            console.log('fail')
          }
        })      
      }
    })
    if (count < 3) {
      // console.log(count);
      // console.log(images[count]);

      that.setData({
        // src: res.tempImagePath
        
        src111: images[count]

      })
      // console.log(src)
      count++;
      wx.hideLoading();
    }else {
      count=0;
      wx.showLoading({
        title: '跳转中....请稍后',
      })

      setTimeout(function () {
        //要延时执行的代码
        wx.hideLoading();
        wx.reLaunch({
          url: '../imagecc/iamgecc'

        })
      }, 3000) //延迟时间 这里是1秒


    
   
      // console.log(imagepath)

    }


  }

})