// pages/article/article.js
const wxRequest = require('./../../utils/wxRequest.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: wx.getStorageSync('articleList')
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
      wx.setStorageSync('articleList', result.data.pageData);
      this.setData({
        articleList:result.data.pageData
      })
    })
  },
  handleStar:function(e){
    let item = e.currentTarget.dataset.item;
    let url = "/api/article/starArticle?articleId=" + item.articleId;
    wxRequest.postBody(url, {}).then((result) => {
      let articleList = this.data.articleList;
      //修改文章数据源 
      articleList.map((item1,index)=>{
        if(item1.articleId==item.articleId){
          item1.isStar = !item1.isStar;
        }
        return item1;
      })
      //重新渲染页面
      this.setData({
        articleList:articleList
      })
      // this.getArticle(); //前端修改了数据  就无须重新获取数据了 减轻服务器压力
    })
  },
  handleLike:function(e){
    let item = e.currentTarget.dataset.item;
    let url = "/api/article/likeArticle?articleId=" + item.articleId;
    wxRequest.postBody(url, {}).then((result) => {
      let articleList = this.data.articleList;
      //修改文章数据源 
      articleList.map((item1, index) => {
        if (item1.articleId == item.articleId) {
          item1.likeNum++;
        }
        return item1;
      })
      //重新渲染页面
      this.setData({
        articleList: articleList
      })
      // this.getArticle(); //前端修改了数据  就无须重新获取数据了 减轻服务器压力
    })
  },
  handleSearchValChange:function(e){
    this.setData({
      searchVal:e.detail.value
    })
  },
  handleSearch:function(e){
    const searchVal = this.data.searchVal;
    console.log();
    //搜索文章
    let url = "/publicApi/article/getArticleByTitle";
    let data = { title: searchVal};
    wxRequest.getRequest(url, data).then((result) => {
      console.log(result);
      wx.setStorageSync('articleList', result.data.pageData);
      this.setData({
        articleList: result.data.pageData
      })
    })

  },
  toArticleDetail:function(e){
    let item = e.currentTarget.dataset.item;
    console.log(item)
    app.articleDetail = item;
    wx.redirectTo({
      url: '../article/articleDetail/articleDetail',
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
    console.log("页面滑到底部")
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
})