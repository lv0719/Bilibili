Page({
  data: {
    //被点击首页导航的菜单的索引
    currentIndexNav: 0,
    //首页导航数据
    navList: [],
    //轮播图数据
    swiperList:[],
    //视频列表数据
    videosList: []
  },
  //点击首页导航activeNav点击函数
  activeNav(e){
     //console.log(123);
     //console.log(e);
     this.setData({
       currentIndexNav: e.target.dataset.index, //dataset来源于wxml文件中定义的data-index="{{index}}",他可以获得被点击元素的dom结构的index
     })
  },
  // 获取首页导航数据函数
  getNavlist(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res){
        //console.log(res);
        if(res.data.code === 0){
          //console.log("response success!");
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  //获取轮播图数据函数
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        if(res.data.code == 0){
          that.setData({
            swiperList: res.data.data.swiperList,
          })
        }
      }
    })
  },
  //获取视频列表
  getVideosList(){
    let that = this;
    wx.request({ //发送请求
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        if(res.data.code == 0){
          that.setData({
            videosList:res.data.data.videosList,
          })
        }
      }
    })
  },
  onLoad: function(options){ 
    //1,在这里发送请求，获取导航数据函数
    this.getNavlist();
    //2,在这里发送请求，获取轮播图数据函数
    this.getSwiperList();
    //3,在这里发送请求，获取视频列表数据函数
    this.getVideosList(); 
  },
  onReady: function(){

  },
  onShow: function(){
    
  }
})