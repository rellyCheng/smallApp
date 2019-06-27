// pages/article/article.js
const wxRequest = require('./../../utils/wxRequest.js');
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticle();
  },
  getArticle:function(){
    let url = "/api/article/getAllArticleListMore?pageCurrent=1";
    let data = {};
    wxRequest.postBody(url, data).then((result) => {
      console.log(result.data.pageData);
      this.setData({
        articleList:result.data.pageData
      })
    })
  },
  handleStar:function(e){
    let item = e.currentTarget.dataset.item;
    let url = "/api/article/starArticle?articleId=" + item.articleId;
    wxRequest.postBody(url, {}).then((result) => {
      console.log(result);
      this.getArticle();
    })
  }

//  upper: function (e) {
//     console.log(e)
//   },
//   lower: function (e) {
//     console.log(e)
//   },
//   scroll: function (e) {
//     console.log(e)
//   },
//   tap: function (e) {
//     for (var i = 0; i < order.length; ++i) {
//       if (order[i] === this.data.toView) {
//         this.setData({
//           toView: order[i + 1]
//         })
//         break
//       }
//     }
//   },
//   tapMove: function (e) {
//     this.setData({
//       scrollTop: this.data.scrollTop + 10
//     })
//   }
})