
export  function OS(){
            return (function () {
                let u = navigator.userAgent;
                return {
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                    windowPhone: u.indexOf("Windows Phone") >= 0,
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    iPod: u.indexOf('iPod') > -1, //是否iPod
                    weChat: u.match(/MicroMessenger/i) !== null,//是否为微信
                    isQQBuiltIn:(u.toLowerCase().match(/qq/i) == 'qq') ? (u.toLowerCase().match(/mqqbrowser/i) == 'mqqbrowser' ? false : true ) : false// 判断是否为qq 内置浏览器
                };
            })();
        }

export function setTKD (to) {
    // 设置页面标题
    document.title = to.meta.title
    //兼容老版本不能设置title
    if ( OS().ios && (OS().weChat) ) {
      let iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = '/favicon.ico';
      iframe.onload = () => {
          setTimeout(() => {
              document.body.removeChild(iframe);
          }, 9);
      };
      document.body.appendChild(iframe);
    }
    // meta 标签描述设置
    let description = document.querySelector("meta[name=description]")
    description.setAttribute('content', to.meta.description)
    // meta 关键字设置 
    let keywords = document.querySelector("meta[name=keywords]")
    keywords.setAttribute('content', to.meta.keywords)
}