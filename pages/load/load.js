// pages/load/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sxxbfb: "",
    bxx1bfb: "",
    sxxfbt: "",
    sxxbfb: "",
    BXX1FBT: "",
    BXX2FBT: "",
    image1: "../image/moback.jpg",
    image2: "../image/moback.jpg",
    image3: "../image/moback.jpg",
    data1: "",
    data2: "",
    data3: "",
    sxxzw: '请稍后.',
    BXX1BT: '请稍后..',
    BXX2BT: '请稍后...',
    j: [],
    k: [],
    l: [],
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("load页面的onload:")
    var that = this;
      var data =options.data
      console.log("load:"+data)

    var dadabf1 = toPercent(JSON.parse(data).result[0].score);
    var dadabf2 = toPercent(JSON.parse(data).result[1].score);
    var dadabf3 = toPercent(JSON.parse(data).result[2].score);

    var brief1 = JSON.parse(data).result[0].brief;
    var brief2 = JSON.parse(data).result[1].brief;
    var brief3 = JSON.parse(data).result[2].brief;
    // console("dadabf1:" + JSON.parse(data).result[0].score)
    // console("brief1:"+brief1)

    queryinfo(that, that.data.data1, brief1, "1");
    queryinfo(that, that.data.data2, brief2, "2");
    queryinfo(that, that.data.data3, brief3, "3");

    console(this.data.count)
    setTimeout(function () {

      wx.reLaunch({

        url: '/pages/main/videoshow/videoshow?data1=' + brief1 + '&data2=' + brief2 + '&data3=' + brief3+ '&dadabf1=' + dadabf1 + '&dadabf2=' + dadabf2 + '&dadabf3=' + dadabf3

      })
      wx.hideLoading();
    }, 4000)
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
})

function toPercent(point) {
  var str = Number(point * 100).toFixed(1);
  str += "%";
  console.log(str)
  return str;
}

function queryinfo(that, str, j, bt) {
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

      if (bt == '1') {
        console.log("bt1");
        that.setData({
          j: res.data.list[0],
          sxxzw: res.data.list[0].bt,
          sxxfbt: res.data.list[0].wb
          ,
          image1: res.data.list[0].imagepath,
          count:count+1

        })
      } else if (bt == '2') {
        console.log("bt2");
        that.setData({
          k: res.data.list[0],
          BXX1BT: res.data.list[0].bt
          ,
          BXX1FBT: res.data.list[0].wb
          ,
          image2: res.data.list[0].imagepath,
      count: count + 1
        })

      } else if (bt == '3') {
        console.log("bt3");
        that.setData({
          l: res.data.list[0],
          BXX2BT: res.data.list[0].bt,

          BXX2FBT: res.data.list[0].wb,
          image3: res.data.list[0].imagepath,
          count: count + 1
        })

      }

      wx.hideLoading();


    }
  })

}