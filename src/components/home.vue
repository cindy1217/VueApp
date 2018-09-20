d<template>
  <div>
    <button class="wechat_login" ref="aaaa" @click="weChatLogin">使用微信账号登陆</button>
    <div class="wechatLogin">
      <h4>属性1</h4>
      <div class="bb">
        <li @click="getBrand('属性1')">属性</li>
        <li @click="getBrand('属性2')">属性2</li>
        <li @click="getBrand('属性3')">属性3</li>
        <li @click="getBrand('属性4')">属性4</li>
      </div>
      <h5>更多</h5>
    </div>
    <div class="wechatLogin">
      <h4>属性2</h4>
      <div class="bb">
        <li @click="getName(1,'颜色1')">颜色1</li>
        <li @click="getName(1,'颜色2')">颜色2</li>
        <li @click="getName(1,'颜色3')">颜色3</li>
        <li @click="getName(1,'颜色4')">颜色4</li>
      </div>
      <h5>更多</h5>
    </div>
    <div class="wechatLogin">
      <h4>属性3</h4>
      <div class="bb">
        <li @click="getName(2,'规格1')">规格1</li>
        <li @click="getName(2,'规格2')">规格2</li>
        <li @click="getName(2,'规格3')">规格3</li>
        <li @click="getName(2,'规格4')">规格4</li>
      </div>
      <h5>更多</h5>
    </div>
    <div>{{mm.brand}}/{{mm.colorName}}/{{mm.sizeName}}</div>


    <li v-for="(item,index) in arr" :key="index" ref="Li_height">
      <span :class="item.name" class="dd">{{item.keyword}}</span>
    </li> 
    <div>
      <img :src="mockData.pic" alt="">
    </div>
  </div>
</template>
<script>
  import {login} from '@/fetch/api'
  console.log(login)
  export default {
    data () {
      return {
        mm:{
          brand:'',
          colorName:'',
          sizeName:'',
          height_1:0  
        },
        arr:[],
        aa:0,
        bb:0,
        cc:0,
        array1:[],
        mockData:''
      }
    },
    watch:{
      mm:function(n,o){
        console.log(n)
      },
      height_1(n,o){
        console.log(n)
      }
    },
    mounted(){
      var res = document.querySelector('.wechatLogin')
      console.log(res.offsetHeight)
      console.log(this.$route.fullPath)
      this.array1.push(this.aa)
      this.array1.push(this.bb)
      this.array1.push(this.cc)
      console.log(this.array1)
      this.getDate()
      //this.getPhoneCode()
      login().then((res)=>{
        console.log(res)
      })
      this.$http.get('/login').then((res) => {
        console.log(res.data.data,'wwowowow')
        this.mockData = res.data.data
      })
    },
    methods:{
      // getPhoneCode(){
      //   this.$http.get('/User/AuthCode',{
      //     params:{
      //       mobile:15573139487,
      //       wy:true
      //     }
      //   }).then((res)=>{
      //     console.log(res)
      //   }).catch((error) => {
      //     console.log(error)
      //   })
      // },
      getDate(){
        //https://api.uneedme.cn/User/AuthCode?mobile=15573139487&wy=true&_=1537176530584
        //https://api.uneedme.cn
        this.$http.get('/inquiry/outpatientInfo/getOutpatientInfos',{
          params:{
            size:10,
            page:1,
            code:'MZ00010'
          }
        }).then((res)=>{
          if(res.data.code == '0000'){
            this.arr = res.data.data
            setTimeout(()=>{
              this.getHeight()
            }, 0);
          }
        }).catch((error)=>{
          console.log(error)
        })
      },
      getBrand(name){
        this.mm.brand=name
      },
      getName(type,name){
        if(type==1){
          this.mm.colorName = name
        } else if (type == 2){
          this.mm.sizeName = name 
        } else {
          return
        }
      },
      weChatLogin(){
        let redirectURL = ''
        console.log(this.$route.query)
        if(!!this.$route.query.code){
          redirectURL = window.location.href.split(`code=${this.$route.query.code}`).join('')
        } else {
          redirectURL = window.location.href
        }
      },
      getHeight(){
        if(!!this.$refs.Li_height){
          this.height_1 = this.$refs.Li_height[0].offsetHeight
          console.log(this.height_1)
        }else {
          console.log(111)
        }
      }
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