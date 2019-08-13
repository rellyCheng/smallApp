// pages/article/articleDetail/articleDetail.js
const app = getApp();
var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: "",
    commentFocus:false
  },

  tap() {
    console.log('tap')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      html:app.articleDetail.content,
      articleDetail:app.articleDetail,
      fileUrl: app.globalData.fileUrl
    })
    wx.setNavigationBarTitle({
      title: app.articleDetail.title
    })
  },

  onShow: function () {
    clearInterval(interval); // 清除setInterval
    time = 0;
  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },

  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间    
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  touchEnd: function (e) {
    var touchMove = e.changedTouches[0].pageX;
    // 向左滑动   
    if (touchMove - touchDot <= -40 && time < 10) {
      //执行切换页面的方法
      console.log("向右滑动page+1");
    }
    // 向右滑动   
    if (touchMove - touchDot >= 40 && time < 10) {
      //执行切换页面的方法
      console.log("向左滑动page-1");
    }
    clearInterval(interval); // 清除setInterval
    time = 0;
  },

  handleCommentFocus:function(e){
    console.log("获取焦点")
    this.setData({
      commentFocus:true
    })
  },

  handleCommentBlur:function(e){
    console.log("失去焦点")
    this.setData({
      commentFocus: false
    });
    wx.getSelectedTextRange({
      complete: res => {
        console.log('getSelectedTextRange res', res.start, res.end)
      }
    })
  },

})