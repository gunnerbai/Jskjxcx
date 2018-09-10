// pages/main/imagecc2/iamgecc.js
// var imagepath ="";
// var item="";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src111:"",
    name:"",
    name1:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    this.ctx = wx.createCameraContext();//创建摄像头对象
    wx.getStorage({
      key: 'imagepath',
      success: function (res) {
        console.log("成功" + res.data);
        that.setData({
          src111: res.data,

        })
      },
    })
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
    
  buton1: function () {
    var that = this;
    var src = that.data.src111;
    var name = "";
    var name1 = "";

    that.ctx.takePhoto({
      quality: 'low',
      success: (res) => {
      
        that.setData({

          imagepath: res.tempImagePath

        })



        console.log("src111" + src)


        // })
        let pages = getCurrentPages();//当前页面
        let prevPage = pages[pages.length - 2];//上一页面
        if (src =="../image/psy1.png") {

          that.setData({
            name: res.tempImagePath,

            name1: "btn1",


          });
          // console.log("进入btn1");
          // console.log("name" + that.data.name);
          // console.log("name1" + that.data.name1);
          
        } else if (src == "../image/psy2.png") {
          that.setData({
            name: res.tempImagePath,

            name1: "btn2",
          });        

        } else if (src == "../image/psy3.png") {
          that.setData({
            name: res.tempImagePath,

            name1: "btn3"
          })
 
         

        } else if (src = "../image/psy4.png") {
          that.setData({
            name: res.tempImagePath,
            name1: "btn4"
          })
        }
        // console.log("快要跳转了" + item + ":" + imagepath);


        prevPage.setData({//直接给上移页面赋值
          item: that.data.name,
          imagepath: that.data.name1,
          
        });
        
        wx.navigateBack({//返回
          delta: 1
        })




      }
    })



  }
})