Page({

  /**
   * 页面的初始数据
   */
  data: {
    TXURL:"",
    username:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.login({
      success: function (r) {
        var code = r.code;//登录凭证 
        console.log("code:"+code)        
        if (code) {
          //2、调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              //console.log("小程序res")
              //console.log(res)
              var userInfo = res.userInfo;
              //console.log("用户信息")
              //console.log(userInfo)
              var timeStamp = Date.parse(new Date()) / 1000;
              var nickName = userInfo.nickName;
              var gender = userInfo.gender;
              
              
              if (userInfo.avatarUrl==""){
                var avatarUrl = "https://aaa.viidrive.com/XCXWebPro/grzx/tx.png ";      


              }else{

                var avatarUrl = userInfo.avatarUrl;
              }

              console.log("avatarUrl:" + avatarUrl);
              var country = userInfo.country;
              var province = userInfo.province;
              var city = userInfo.city;

              that.setData({
                TXURL: avatarUrl,
                username: nickName


              })
              // var param = { code: code, nickname: nickName, logo: avatarUrl }
              // var paramsToSign = "appId=101605&param=" + JSON.stringify(param) + "&version=1.0.0&timeStamp=" + timeStamp + "&key=b0bb9ac9bfcfd46d3ec19acb63118e9b";
              // var sign = md5(paramsToSign).toLocaleUpperCase();
              // //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
              // wx.request({
              //   url: app.globalData.openUrl + 'api/register/wechatLogin',//自己的服务接口地址
              //   method: 'post',
              //   header: {
              //     'content-type': 'application/x-www-form-urlencoded'
              //   },
              //   data: { appId: "101605", version: "1.0.0", timeStamp: timeStamp, param: JSON.stringify(param), sign: sign },
              //   success: function (d) {
              //     //console.log("服务器解析后返回的信息")
              //     //console.log(d)
              //     //4.解密成功后 获取自己服务器返回的结果
              //     if (d.data.code == "000") {
              //       var userInfoToStorage = d.data.data;
              //       wx.setStorageSync('unionid', userInfoToStorage.unionid);
              //       wx.setStorageSync('openid', userInfoToStorage.openid);
              //       wx.setStorageSync("token", userInfoToStorage.token);
              //       if (gender == "0") {
              //         wx.setStorageSync('gender', "女");
              //       } else {
              //         wx.setStorageSync('gender', "男");
              //       }
              //       wx.setStorageSync('nickName', nickName);
              //       wx.setStorageSync('city', city);
              //       wx.setStorageSync('avatarUrl', avatarUrl);

              //     } else {
              //       console.log('解密失败');
              //     }
              //   },
              //   fail: function () {
              //     console.log('系统错误')
              //   }
              // })
            },
            fail: function () {
              console.log('获取用户信息失败')
              //获取用户信息失败后。请跳转授权页面
              wx.showModal({
                title: '警告',
                content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                    // wx.navigateTo({
                    //   url: '../tologin/tologin',
                    // })

                    wx.redirectTo({
                      url: '../tologin/tologin',
                    })
                  }
                }
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + r.errMsg)
        }
      },
      fail: function () {
        console.log('登陆失败')
      }
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
    
  }
    ,
  wdrw:function(){


      wx.navigateTo({
        url: '/pages/wdrw/wdrw',
      })





    }
  ,
  wdfa: function () {


    wx.navigateTo({
      url: '/pages/wdfa/wdfa',
    })





  }
  ,
  wdsc: function () {


    wx.navigateTo({
      url: '/pages/wdsc/wdsc',
    })





  }
  ,
  wdxx: function () {


    wx.navigateTo({
      url: '/pages/wdxx/wdxx',
    })





  }
  ,
  wdsd: function () {


    wx.navigateTo({
      url: '/pages/wdsd/wdsd',
    })





  }
  ,
  wdkj: function () {


    wx.navigateTo({
      url: '/pages/yhj/yhj',
    })





  }
  ,
  yhj:function(){

    wx.navigateTo({
      url: '/pages/yhj/yhj',
    })


  }
  ,
  zhye:function(){

      wx.showToast({
        title: '暂时无法充值.',
        icon:'none'
      })



  }
})