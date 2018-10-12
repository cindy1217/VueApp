d<template>
  <div>
    <button class="wechat_login" ref="aaaa" @click="weChatLogin">使用微信账号登陆</button>
  </div>
</template>
<script>
  import { login } from '@/fetch/api'
  export default {
    data () {
      return {
        mockData:'',
        arr:[
          {
            data:[
              {name:1},
              {name:1},
              {name:1},
              {name:1},
              {name:1},
              {name:1},
              {name:1},
            ]
          },
          {
            data:[
              {name:2},
              {name:2},
              {name:2},
              {name:2},
              {name:2},
              {name:2},
              {name:2},
            ]
          },
          {
            data:[
              {name:3},
              {name:3},
              {name:3},
              {name:3},
              {name:3},
              {name:3},
              {name:3},
            ]
          }
        ]
      }
    },
    methods:{
      weChatLogin(){
        let redirectURL = ''
        console.log(this.$route.query)
        if(!!this.$route.query.code){
          redirectURL = window.location.href.split(`code=${this.$route.query.code}`).join('')
        } else {
          redirectURL = window.location.href
        }
      },
    },
    created(){
     // this.arr.map((item,index) => {
     //  var res = []
     //  for(let i= 0;i < Math.ceil(item.data.length / 3);i++){        
     //    res.push(item.data.slice(i*3,i*3+3))
     //  }      
     //  return item.data = res
     // })
     // console.log(this.arr)
    }
  }
</script>
<style scoped lang="scss">
  .wechat_login{
    height:50px;
    background:#74CE57;
    border-radius:5px;
    width:100%;
    font-size:14px;
    color:#fff;
  }
  .wechatLogin{
    width:300px;
    display: flex;
    justify-content: flex-start;
    align-items:top;
    >h4{
      width:40px;
    }
    .bb{
      flex:1;
      >li{
        height:20px;
      }
    }
    h5{
      width:40px;
    }
  }
</style>