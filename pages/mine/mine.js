// pages/mine/mine.js
//获取应用实例
const app = getApp();
const wxRequest = require('./../../utils/wxRequest.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isBindPhone:false
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } 
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo;
   
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          wxRequest.getRequest("/publicApi/wxCode2Session", { js_code: res.code}).then((result) => {
            console.log(result);
            if (result.state == "Fail"){
              app.globalData.userInfo.openid = result.message;
              wx.showToast({
                title: "登录成功",
                duration: 1500,
                mask: true
              });
              // setTimeout(function(){
              //   wx.navigateTo({
              //     url: '/pages/regist/regist',
              //   })
              // },1500);
            }else{
              wx.setStorageSync('userDetail', result.data);
              app.userDetail = result.data;
              app.globalData.userInfo.openid = result.data.openid;
              this.setData({
                isBindPhone: true
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,

    })
  }
})