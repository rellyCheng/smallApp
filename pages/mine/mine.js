// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //使用wx.createContext获取绘图上下文context
    var ctx = wx.createCanvasContext('firstCanvas')
    ctx.moveTo(10, 10)
    ctx.lineTo(100, 20)
    ctx.lineTo(100, 100)
    ctx.closePath()
    ctx.setFillStyle('red')
    ctx.fill()
    ctx.draw()
  },


})