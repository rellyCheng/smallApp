var Promise = require('../plugins/es6-promise.js')

// let api_IP = "https://api.1024sir.com";
let api_IP = "http://localhost:8426";
function wxPromisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        console.log(res)
        if(res.statusCode==401){
          wx.showToast({
            title: "登录失效",
            duration: 1500,
            mask: true
          });
          wx.removeStorageSync('userDetail');
          wx.redirectTo({
            url: '../login/login'
          })
        }
        if (res.statusCode == 200){
          //成功
          if (res.data.state == 1 || res.data.state == "OK") {
            resolve(res.data);
          } else {
            wx.showToast({
              title: res.data.message,
              duration: 1500,
              mask: true
            });
            resolve(res.data);
          }
        }
      }
      obj.fail = function (res) {
        //失败
        console.log("失败")
        reject(res)
      }
      fn(obj)
    })
  }
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
  console.log(callback);
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data) {
  var token = wx.getStorageSync('userDetail').token;
  var getRequest = wxPromisify(wx.request)
  return getRequest({
    url: api_IP+url,
    method: 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json',
      "Authorization": 'Bearer ' + token
    },
  })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postFormData(url, data) {
  var token = wx.getStorageSync('userDetail').token;
  var postFormData = wxPromisify(wx.request)
  return postFormData({
    url: api_IP+url,
    method: 'POST',
    data: data,
    header: {
      "content-type": "application/x-www-form-urlencoded",
      "Authorization": 'Bearer '+token
    },
  })
}
/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postBody(url, data) {
  var token = wx.getStorageSync('userDetail').token;
  var postBody = wxPromisify(wx.request)
  return postBody({
    url: api_IP + url,
    method: 'POST',
    data: data,
    header: {
      "content-type": "application/json",
      "Authorization": 'Bearer ' + token
    },
  })
}

module.exports = {
  postBody: postBody,
  postFormData: postFormData,
  getRequest: getRequest
}
