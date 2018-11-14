//index.js
//获取应用实例../..
const app = getApp()
var that;
Page({
  data: {
    motto: 'Hello World',
    showModal: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },
  bindGetUserInfo: function (e) {
    var that = this;
    // console.log("code:" + code) 
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
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
              var avatarUrl = userInfo.avatarUrl;
              var country = userInfo.country;
              var province = userInfo.province;
              var city = userInfo.city;
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
                    wx.navigateTo({
                      url: '../tologin/tologin',
                    })
                  }
                }
              })
            }
          })
        }
      }

    })

    //最后，记得返回刚才的页面
    // wx.navigateBack({
    //   delta: 1
    // })
    wx.reLaunch({
      url: '/pages/listview/listview'

    })
  }

})