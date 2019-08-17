// pages/article/articleComment.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleMsgItem: {
      "id": "1550925084359",
      "parentId": null,
      "articleId": "1550925002223",
      "aite": "1542266708364",
      "createTime": "2019-02-23T20:31:24.000+0000",
      "name": "管理员",
      "userId": "1542266708364",
      "commentContent": "123",
      "bgColor": "#FFDEAD",
      "avatar": "15509248825062137458336",
      "rankNum": 1,
      "children": [{
        "id": "1550928916528",
        "parentId": "1550925084359",
        "articleId": "1550925002223",
        "aite": "1542266708364",
        "createTime": "2019-02-23T21:35:16.000+0000",
        "name": "管理员",
        "userId": "1542266708364",
        "commentContent": "测试回复",
        "bgColor": "#FFDEAD",
        "avatar": "15509248825062137458336",
        "rankNum": null,
        "children": null
      }, {
        "id": "1550928932766",
        "parentId": "1550925084359",
        "articleId": "1550925002223",
        "aite": "1542266708364",
        "createTime": "2019-02-23T21:35:32.000+0000",
        "name": "管理员",
        "userId": "1542266708364",
        "commentContent": "@管理员  测试回复",
        "bgColor": "#FFDEAD",
        "avatar": "15509248825062137458336",
        "rankNum": null,
        "children": null
      }, {
        "id": "1550928946428",
        "parentId": "1550925084359",
        "articleId": "1550925002223",
        "aite": "1542266708364",
        "createTime": "2019-02-23T21:35:46.000+0000",
        "name": "管理员",
        "userId": "1542266708364",
        "commentContent": "@管理员  1231231",
        "bgColor": "#FFDEAD",
        "avatar": "15509248825062137458336",
        "rankNum": null,
        "children": null
      }]
    },
    fileUrl: app.globalData.fileUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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