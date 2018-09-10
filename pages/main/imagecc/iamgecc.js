// pages/main/imagecc/iamgecc.js

var imagepath = new Array();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log("新的imagecc");
    var that =this;
    this.ctx = wx.createCameraContext()//创建摄像头对象
    wx.getStorage({
      key: 'imagepath',
      success: function (res) {
        console.log("成功" + res.data);
        that.setData({ image1 : res.data[0] ,
          image2: res.data[1],
          image3: res.data[2],
          image4: res.data[3], 
        
        
        
        
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
    var that = this;
    console.log("进入onShow");
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1];

    // console.log("进入onShow1" + currPage.data.imagepath);
    // console.log("进入onShow2" + currPage.data.item);

    if (currPage.data.imagepath=="btn1"){
      console.log("currPage进入btn1");
         that.setData({//将携带的参数赋值
           image1: currPage.data.item
    });

    } else if (currPage.data.imagepath == "btn2") {
      console.log("currPage进入btn2");
      that.setData({//将携带的参数赋值
        image2: currPage.data.item
        
      });
      console.log("currPage进入btn2" + currPage.data.item)
    } else if (currPage.data.imagepath == "btn3") {

      that.setData({//将携带的参数赋值
        image3: currPage.data.item
      });

    } else if (currPage.data.imagepath == "btn4") {

      that.setData({//将携带的参数赋值
        image4: currPage.data.item
      });

    }
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏了");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面已经卸载");
    clearInterval(this.data.image1);
    clearInterval(this.data.image2);
    clearInterval(this.data.image3);
    clearInterval(this.data.image4);


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
  btn2 :function(){
  //创建摄像头对象
    var that = this;
    wx.setStorage({

      key: 'imagepath',
      data: '../image/psy2.png',
    })
     wx.navigateTo({
       url: '../imagecc2/iamgecc',
    })
    // wx.chooseImage({
    //   success: function (res) {
    //     var tempFilePaths = res.tempFilePaths
    //     console.log(tempFilePaths);
    //     that.setData({
    //       // src: res.tempImagePath
    //       image1: tempFilePaths
    //     })


    //   }
    // }) 

    // wx.navigateTo({
    //   url: '../recharge/text',
    // })
  
  


  }

    ,btn1: function () {
    //创建摄像头对象
    var that = this;
      wx.setStorage({

        key: 'imagepath',
        data: '../image/psy1.png',
      })
      wx.navigateTo({
        url: '../imagecc2/iamgecc',
      })
    }
  , btn3: function () {
    //创建摄像头对象
    var that = this;
    wx.setStorage({

      key: 'imagepath',
      data: '../image/psy3.png',
    })
    wx.navigateTo({
      url: '../imagecc2/iamgecc',
    })
  }
  , btn4: function () {
    //创建摄像头对象
    var that = this;
    wx.setStorage({

      key: 'imagepath',
      data: '../image/psy4.png',
    })
    wx.navigateTo({
      url: '../imagecc2/iamgecc',
    })
  }
  , imageccbutton1:function(){
    var that = this;

      wx.showLoading({
        title: '正在加载请稍后',
      })


    wx.uploadFile({
      url: 'https://gunnerbai.mynatapp.cc/XCXWebPro/JsonServlet',
      filePath: that.data.image1,
      name: 'file',
      success: (res) => {
        console.log(res.data)
        console.log(JSON.parse(res.data).result[0].brief)
        var dadabf1 =toPercent(JSON.parse(res.data).result[0].score);
        var dadabf2 = toPercent(JSON.parse(res.data).result[1].score);
        var dadabf3 =toPercent(JSON.parse(res.data).result[2].score);
        wx.setStorage({
          key: 'cargo',
          data: JSON.parse(res.data).result[0].brief,
        })
        wx.reLaunch({
          url: '../videoshow/videoshow?data1=' + JSON.parse(res.data).result[0].brief + '&data2=' + JSON.parse(res.data).result[1].brief + '&data3=' + JSON.parse(res.data).result[2].brief + '&dadabf1=' + dadabf1 + '&dadabf2=' + dadabf2 +'&dadabf3='+dadabf3,
        })
        wx.hideLoading();
      },

    })
    

  }
  ,imageccbutton2:function(){

    wx.reLaunch({
      url: '/pages/index/index',
    })

  }
  
})

function toPercent(point) {
  var str = Number(point * 100).toFixed(1);
  str += "%";
  return str;
}
