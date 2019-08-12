// pages/regist/regist.js
const app = getApp();
const wxRequest = require('./../../utils/wxRequest.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit:function(e){
    let formData = e.detail.value;
    let userInfo = app.globalData.userInfo;
    let mobile = null;
    wx.getSystemInfo({
      success(res) {
        console.log(res.model);
        mobile = res.brand + " " + res.model;
      }
    }) 
    userInfo.mobile = mobile;
    userInfo.telnum = formData.telnum;
    console.log(userInfo);
    wxRequest.postBody("/publicApi/wxRegist", userInfo).then((result) => {
      console.log(res)
    })
  },
 
})