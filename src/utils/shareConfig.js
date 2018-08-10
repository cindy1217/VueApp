import fetch from '../fetch'
import wx from 'weixin-js-sdk'
//console.log(process.env.NODE_ENV == "development")
// 该方法在main.js router.afterEach中调用
export  function initWxShare(to) {
			console.log(to)
			// 分享内容做成动态可编辑获取
			let shareContentConfig = {
				title:'我是分享功能',
				link:window.location.origin + to.fullPath,
				desc:'描述内容',
				imgUrl:'window.location.origin' + '/static/shareConfig.png',
				success:function() {},
				cancel: function() {}
			}
			// 路径请求
			let configURL = window.location.origin + to.fullPath//history 模式
			// let configURL = window.location.href.split('#')[0]// hash
			fetch.get('User/Wechat/jssdk',{
				params:{
					'url': encodeURIComponent(configURL),
					'appId': process.env.appId
				}
			}).then(function (res) {
				let configJson = res.data.data
			  	wx.config({
		            debug: (process.env.NODE_ENV == "development") ? true : false, // ETC 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		            appId: configJson.appid, // ETC 必填，公众号的唯一标识
		            timestamp: configJson.timestamp, // ETC 必填，生成签名的时间戳
		            nonceStr: configJson.nonceStr, // ETC 必填，生成签名的随机串
		            signature: configJson.signature, // ETC 必填，签名，见附录1
		            jsApiList: [
		              'onMenuShareAppMessage',
		              'onMenuShareTimeline',
		              'onMenuShareQQ',
		              'onMenuShareWeibo',
		              'onMenuShareQZone',
		              'showMenuItems',
		              'hideMenuItems'
		            ] // ETC 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		        });
			  	wx.ready(() => {
			    	// wechat moment
			    	wx.onMenuShareTimeline(shareContentConfig)

			    	// wechat friend
			    	wx.onMenuShareAppMessage(shareContentConfig)

			    	// Weibo
			    	wx.onMenuShareWeibo(shareContentConfig)

			    	// QZone
			    	wx.onMenuShareQZone(shareContentConfig)
			  	})
			})
		}
