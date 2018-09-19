// pages/datashow/datashow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '加载中...', // 状态
    list: [], // 数据列表
    type: '', // 数据类型
    loading: true, // 显示等待框
    data1:'',
    imagesrc:'http://gunnerbai.mynatapp.cc/XCXWebPro/wsz.png',
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
  onLoad: function (options) { // options 为 board页传来的参数
    var _this = this;
    this.setData({
      data1:options.data1

    })
    // 拼接请求url
    const url = 'https://gunnerbai.mynatapp.cc/XCXWebPro/ShowDataServlet' ;
      // 请求数据
      wx.request({
        url: url,
        data: {
          showdata:options.data2},
        header: {
          'content-type': 'json' // 默认值
        },
        success: function (res) {
          console.log(res.data);
          // var j =JSON.parse(res.data);
          console.log(res.data.list.length);
          var j = res.data.list;
          for (var i = 0; i < res.data.list.length;i++){

                var a  ={};
              
            j[i]


          }

          // 赋值
          _this.setData({
            title: '美妆信息',
            list: j,
            type: 'us_box',
            loading: false // 关闭等待框
          })


        
        }
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
  itemgz:function(){



      var that = this;
      that.setData({

        imagesrc: 'http://gunnerbai.mynatapp.cc/XCXWebPro/ysz.png'


      })



  },
  
})