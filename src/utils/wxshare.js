import fetch from './fetch'
// let shareContentConfig = {
// 	title:'我是分享功能',
// 	link:window.location.origin + to.fullPath,
// 	desc:'描述内容',
// 	imgUrl:'window.location.origin' + '/static/share.png',
// 	success:function() {},
// 	cancel: function() {}
// }
// 路径请求
// fetch.get('/api/wechat/jssdk?url=' + encodeURIComponent(_url)).then(function (res) {
//   let signInfo =  res.data.js_config;
//   wx.config(signInfo);
//   wx.ready(() => {
//     // wechat moment
//     wx.onMenuShareTimeline(shareConfig)

//     // wechat friend
//     wx.onMenuShareAppMessage(shareConfig)

//     // Weibo
//     wx.onMenuShareWeibo(shareConfig)

//     // QZone
//     wx.onMenuShareQZone(shareConfig)
//   })
// })