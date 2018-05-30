<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>ffffffffffffffffffffffffdsfadserw
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    snsapiBaseAuthorization(){
      // if(/*判断否为微信环境*/true){
      //     let openId = localStorage.getItem('openId');
      //     let appId = process.env.appId
      //     let componentAppId = process.env.componentAppId;
      //     let redirectUrl = process.env.redirectUrl;
      //     redirectUrl = encodeURIComponent(redirectUrl)
      //     let redirect_url = Base64.encodeURI(location.href)
      //     let uuid = global.app.getQueryString('uuid');
      //     if(!openId){
      //         location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appId+'&redirect_uri='+redirectUrl+ redirect_url +'&response_type=code&scope=snsapi_base&state=STATE&component_appid='+ componentAppId +'#wechat_redirect'
      //         localStorage.setItem('openId',global.app.getQueryString('openid'));      
      //     }
      //     //打点
      //     global.app.pointOut.call(this,'1-goods-info',uuid);    
      // }
      return                                
    },

  },
  created(){
    console.log(this.Utils.getName(), this.Utils.getInfo())
    this.$http.get('/cms/banner/list?type=home&_=1520416625859',{}).then((res)=>{
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
