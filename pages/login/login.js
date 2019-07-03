
// pages/login/login.js
const wxRequest = require('./../../utils/wxRequest.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userDetail: wx.getStorageSync("userDetail")
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
  },
  onLoad: function (options){
    console.log(wx.getStorageSync("userDetail")=="");
    if(wx.getStorageSync("userDetail")!=''){
      wx.redirectTo({
        url: '../article/article'
      })
    }
  },
  formSubmit: function (e) {
    let data = e.detail.value;
    let url = "/publicApi/login/accountLogin";
    wxRequest.postFormData(url, data).then((result) => {
      console.log(result)
      if (result.state == 1 || result.state == "OK"){
        console.log("登录成功");
        wx.setStorageSync('userDetail', result.data);
        console.log(wx.getStorageSync('userDetail'));
        wx.redirectTo({
          url: '../article/article'
        })
      }
    })
  }
})
