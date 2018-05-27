export default {
    getName () {
      return 'brodyliao'
    },
    getInfo () {
        return 'Taoxiaoping'
    },
    getOS () {
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
            };
        })();
    }
 
}

// 判断类型
function isType (o, type) {
    return toString.call(o).toLowerCase() === `[object ${type}]`;
}
function isPlainObject (o) {
    return isType(o, 'object');
}
function isString (str) {
    return isType(str, 'string');
}
function isFunction (fun) {
    return isType(fun, 'function');
}
function isReg (reg) {
    return isType(reg, 'regexp');
}
function isNumber (num) {
    return isType(num, 'number') && Number.isFinite(num);
}
function isUndefined (value) {
    return isType(value, 'undefined');
}
function isNull (value) {
    return isType(value, 'null');
}
// 获取浏览器所有cookie 并转换成对象
function _normalCookies () {
    let cookies = document.cookie.split(';'), single, result = {}, len = cookies.length;
    while (len--) {
        single = cookies[len].split('=');
        result[single[0].trim()] = single[1];
    }
    return result;
}
// 获取浏览器cookie
function getCookie(name) {
    let result = _normalCookies();
    return !isUndefined(result) && !isUndefined(result[name]) ? decodeURIComponent(result[name]) : false;
}
// 设置浏览器cookie 
function setCookie(name, value, options) {
    let cookie = [name + '=' + encodeURIComponent(value)], key, expires;
    if ((isUndefined(name) || isUndefined(value))) {
        return false;
    }
    for (key in options) {
        if (options.hasOwnProperty(key)) {
            if (key === 'expires') {
                expires = new Date();
                expires.setTime(expires.getTime() + (options[key] - 0));
                options[key] = expires.toUTCString();
            }
            if (key === 'maxAge') {
                cookie.push('max-Age=' + options[key]);
            } else {
                cookie.push(key + '=' + options[key]);
            }
        }   
    }
}
// 移除cookie 的 key如果没有传就，清空所有
function removeCookie(name) {
    let result = _normalCookies(), key;
    if (name) {
        this.set(name, '', {
            expires: -1,
            path: '/'
        });
    } else {
        for (key in result) {
            if (result.hasOwnProperty(key)) {
                this.set(key, '', {
                    expires: -1,
                    path: '/'
                });
            }
        }
    }
    return this;
}
// localStorage 存储
let localStorage = (function () {
    let
        testKey = '__LOCALSTORAGETEST',
        storage = window.localStorage;
    try {
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return storage;
    }
    catch (error) {
        storage.setItem = function (key, value) {
            cookie.set(key, value);
        };
        storage.getItem = function (key) {
            return cookie.get(key);
        };
        storage.removeItem = function (key) {
            cookie.remove(key);
        };
        storage.clear = function () {
            cookie.remove();
        };
        return storage;
    }
}());