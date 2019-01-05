// pages/main/recharge/text.js
var count = 0;
var count1 = 0;
var imagepath=new Array();
let app = getApp();
let mytoast;
var bl = true;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // src111:"../image/psy1.png",
    src222: "../image/lxtx1.png",
    // src333: "../image/pzzl.jpg",
    modalHidden: false,
    hiddenaaa:false,
    displayaaa: "block",
    displaybbb:"none",
    bhaaaaaa: false,
    onoffimage:'../image/on.png',
    i: 1,
    bbbbbbb:true,
    btnwa:'请平视镜头对准正脸进行拍摄',
    bhbbbbbbbb:true,
    bhcccccc:false,
    modalHidden11111:true    
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
    count = 0;
    wx.setStorage({

      key: 'imagepath',
      data: imagepath,
    })
    // wx.showToast({
    //   title: '这是弹窗',
    //   icon:'../image/psy2.png'
    // })
    // this.count=0
    bl =true;
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
  pzts:function(){
        var that = this;
    console.log(that.data.displayaaa);
    console.log(that.data.displaybbb);
        that.setData({
          displayaaa: "none",
          displaybbb: "block",
          modalHidden:true,
          modalHidden11111: false    

        })
  },

  /**
  * 点击确认
  */
  modalConfirm: function () {
    // do something
 

  },
  buton1:function(){
    var that = this;

   
    // var images = ["../image/psy2.png", "../image/psy3.png", "../image/psy4.png"];
    // var images1 = ["../image/lxtx3.png", "../image/lxtx2.png", "../image/lxtx4.png"];
    // var images2 = ["请平视镜头对准左侧脸进行拍摄", "请平视镜头对准右侧脸进行拍摄", "要从额头上方45°往下拍哦"];
    // var images3 = ["../image/pzzc.jpg", "../image/pzyl.jpg", "../image/pzsf.jpg"];
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
        quality: 'normal',

        success: (res) => {
          // console.log(res.tempImagePath);
          imagepath.push(res.tempImagePath);
          // console.log(imagepath.length);
          // console.log(res)
          that.setData({
            // src: res.tempImagePath
            imagepath

          })

          console.log("拍照的image" + imagepath)
          // wx.switchTab({
          //   url: '../mine/text',

          // }

          // wx.saveImageToPhotosAlbum({
          //   filePath: res.tempImagePath,
          //   success: function (res) {
          //     // imagepath.push(res.tempImagePath);
          //     console.log(res)
          //     // that.setData({
          //     //   // src: res.tempImagePath
          //     //   imagepath

          //     // })
          //   },
          //   fail: function (res) {
          //     console.log("照片存储报错" + res)
          //     console.log('fail')
          //   }
          // })
        }
      })

  


    // } else if (count == 3 && bl == true  ) {
    //   bl =false;
    //   wx.showLoading({
    //     title: '跳转中....请稍后',
    //   })

      setTimeout(function () {
        //要延时执行的代码
        wx.hideLoading();
        wx.reLaunch({
          url: '../imagecc/iamgecc'

        })
      }, 3000) //延迟时间 这里是1秒


    
   
      // console.log(imagepath)

 

  },
  onoff:function(){
    console.log("onoff")
   var that = this;
    console.log(that.data.i, "i")  ;  
    if (that.data.i == 1) {
      
      
      that.data.i = 2, 
      that.setData({ 
        bhaaaaaa: true,
        onoffimage: '../image/off.png',
    
        bbbbbbb: false
       })     
       } 
    else { 
      that.data.i = 1,
       that.setData({ 
        bhaaaaaa: false, 
        onoffimage: '../image/on.png',
        bbbbbbb: true,     
      })     
       } 
  }
})