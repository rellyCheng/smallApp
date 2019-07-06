// pages/article/articleDetail/articleDetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: "",
  },

  tap() {
    console.log('tap')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      html:app.articleDetail.content,
      articleDetail:app.articleDetail
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
})