// pages/main/videoshow/videoshow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sxxbfb:"",
    bxx1bfb:"",
    sxxfbt: "",
    sxxbfb: "",
    BXX1FBT: "",
    BXX2FBT: "",
    image1: "../image/moback.jpg",
    image2: "../image/moback.jpg",
    image3: "../image/moback.jpg",
    data1:"",
    data2: "",
    data3: "",
    sxxzw:'请稍后.',
    BXX1BT:'请稍后..',
    BXX2BT:'请稍后...',
    j:[],
    k:[],
    l:[]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    wx.showLoading({
      title: '正在加载，请稍后...',
    })
    // console.log(options.data1);
    // console.log(options.data2);
    // console.log(options.data3);
    // this.setDada({
  
    // })
    this.setData({
      // src: res.tempImagePath
      sxxbfb: "匹配度" + options.dadabf1,
      bxx1bfb: "匹配度" + options.dadabf2,
      bxx2bfb: "匹配度" + options.dadabf3,
      data1: options.data1,
      data2: options.data2,
      data3: options.data3,
      // data1: "PONY6",
      // data2: "PONY4",
      // data3: "PONY2",
   
    })
  
    queryinfo(that, that.data.data1, this.data.j, this.data.sxxzw);
    queryinfo(that, that.data.data2, this.data.k, this.data.BXX1BT);
    queryinfo(that, that.data.data3, this.data.l, this.data.BXX2BT);




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

  SXX:function(){
    var that = this;

  



    wx.navigateTo({
      url: '../simple/text?data1=' + that.data.data1+ '&data2=' + that.data.j.bt + '&data3=' + that.data.j.wb + '&data4=' + that.data.j.SPZF
    })

  },
  BXX1: function () {
    var that = this;
    
    console.log(that.data.j);
    wx.navigateTo({
      url: '../simple/text?data1=' + that.data.data2 + '&data2=' + that.data.k.bt + '&data3=' + that.data.k.wb + '&data4=' + that.data.k.SPZF,
    })

  },
  BXX2: function () {
    var that = this;
    wx.navigateTo({
      url: '../simple/text?data1=' + that.data.data3 + '&data2=' + that.data.l.bt + '&data3=' + that.data.l.wb + '&data4=' + that.data.l.SPZF
    })
 
  },
  simplebtnback:function(){
    console.log("111");
    wx.navigateTo({
      url: '/pages/jzym/jzym'
    })


  }
  
})
function queryinfo(that ,str ,j,bt){
  console.log(str);
  console.log("1");
 
  // 拼接请求url
  const url = 'https://aaa.viidrive.com/XCXWebPro/ShowDataServlet';
  // 请求数据
  wx.request({
    url: url,
    data: {
      showdata: str,
      cxId: "CXFZBT"
    },
    header: {
      'content-type': 'json' // 默认值
    },
    success: function (res) {
      console.log(res.data);
      // var j =JSON.parse(res.data);
      console.log(res.data.list.length);
      console.log("res.data.list.bt:" + res.data.list[0].bt);
      // j: res.data.list;
      // bt: res.data.list[0].bt;
    
      if (bt =='请稍后.'){
        console.log("bt1");  
        that.setData({
          j: res.data.list[0],
          sxxzw: res.data.list[0].bt,
          sxxfbt: res.data.list[0].wb
          ,
          image1: res.data.list[0].imagepath

        })
      } else if (bt == '请稍后..') {
        console.log("bt2");
        that.setData({
          k: res.data.list[0],
          BXX1BT: res.data.list[0].bt
          ,
          BXX1FBT: res.data.list[0].wb
          ,
          image2: res.data.list[0].imagepath

        })

      } else if (bt == '请稍后...') {
        console.log("bt3");
        that.setData({
          l: res.data.list[0],
          BXX2BT: res.data.list[0].bt,
          
          BXX2FBT: res.data.list[0].wb,
          image3: res.data.list[0].imagepath

        })

      }

      wx.hideLoading();
      

    }
  })

}