  // pages/app/mine/movie/movie.js
  const app = getApp()
  Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
       imagebutton1: function () {
        wx.navigateTo({
          url: '../datashow/datashow?data1=' + app.globalData.Server+'/qt/rxyq1.jpg&data2=ECYXZSYZ',
        })
      }
      , imagebutton2: function () {
        wx.navigateTo({
          url: '../datashow/datashow?data1=' + app.globalData.Server+'/qt/hlf1.jpg&data2=GMGJZ',
        })
      }
      , imagebutton3: function () {
        wx.navigateTo({
          url: '../datashow/datashow?data1=' + app.globalData.Server+'/qt/wsy1.jpg&data2=LYDJZ',
        })
      }
      , imagebutton4: function () {

        wx.navigateTo({
          url: '../datashow/datashow?data1=' + app.globalData.Server+'/qt/bdz1.jpg&data2=MSBSSBZ',
        })
      }
      , imagebutton5: function () {
        wx.navigateTo({
          url: '../datashow/datashow?data1=' + app.globalData.Server+'/qt/tqz1.jpg&data2=XQYHLHZ',
        })
      }
      , imagebutton6: function () {
        wx.navigateTo({
          url: '../datashow/datashow?data1=' + app.globalData.Server+'/qt/ecy1.jpg&data2=XYQXNSZ',
        })
      }
      , imagebutton7: function () {

        wx.navigateTo({
          url: '../datashow/datashow?data1=' + app.globalData.Server+'/qt/dyp1.jpg&data2=YCBDXJZ',
        })
      }
      , imagebutton8: function () {
        wx.showToast({
          title: '敬请期待...',
          icon: 'none'
        })
      }
    }
  })
