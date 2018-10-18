<template>
    <div class="user_Info_box">
      <div class="phone_number">
        <label for="user_mobile">手机</label> 
        <input type="tel" id="user_mobile" v-model="userInfo.mobile" maxlength="11" placeholder="请输入手机号码"/>
      </div>
      <div class="phone_number code_number">
        <label for="user_code" >验证码</label>
        <input type="tel" id="user_code" v-model="userInfo.code" placeholder="请输入短信验证码" maxlength="6"/>
        <p :class="{phone_reg:phoneReg}">
          <span  @click="getAuthCode" v-if="countDown === 60">获取验证码</span>
          <span v-if="countDown < 60 && countDown > 0" class="count_down">已发送({{countDown}}s)</span>
          <span v-if="countDown === 0" @click="getAuthCode">重新获取</span>
        </p>
      </div>
      <div class="login_submit" @click="login">登陆</div>
    </div>
</template>
<script>
    import { checkPhone } from '@/utils'
    export default {
        data () {
          return {
            userInfo:{
              mobile: '',
              code: '',
              wy: true
            },
            phoneReg: false,
            login_URL: '',
            countDown:60,
          }
        },
        watch:{
          userInfo:{
            handler(n,o){
              if(checkPhone(n.mobile)){
                return this.phoneReg = true 
              }
              return this.phoneReg = false
            },
            deep:true 
          }
        },
        methods:{
          //登录
          login () {
            //登录后置路径
            this.login_URL = this.$route.query.login_URL || '/' 
            if(!this.userInfo.mobile){
              console.log('手机号不能为空>>>')
            } else if(!this.userInfo.code) {
              console.log("验证码不能为空")
            } else {
              this.$store.dispatch('login',{
                userInfo:this.userInfo,
                login_URL:this.login_URL
              }).then((res) => {
                console.log(res)
              })
            }
          },
          getCountDown() {
            this.countDown = 59
            let timeCount = setInterval(() => {
              this.countDown--
              if(this.countDown <= 0){
                clearInterval(timeCount);
                this.countDown = 0
              }
            }, 1000);
          },
          getAuthCode() {
            if(this.phoneReg){
              this.$store.dispatch('getAuthCode',{
                mobile:this.userInfo.mobile,
                wy: true,
              }).then((res) => {
                if(res.data.code === "0000"){
                  return this.getCountDown()  
                }
                return alert('获取验证码失败,请稍后重试')
              }).catch((error) => {
                console.log(error)
              })
            }
          }
        },
        beforeCreate(){
          console.log(this.$route.matched[0].meta)
        }
    }
</script>
<style lang="scss" scoped>
    @import'@/assets/sass/common/_function.scss';
    .user_Info_box{
      padding: ptr(15);
      .phone_number{
        display: flex;
        background: #fff;
        line-height: ptr(50);
        border-radius: ptr(5);
        align-items: center;
        padding:0 ptr(15);
        justify-content: flex-start;
        position: relative;
        label{
          font-size: ptr(15);
          color: #333;
          width: ptr(68);
        }
        input{
          font-size: ptr(15);
          color:#333;
          width: ptr(150);
          line-height: ptr(50);
        }
        p{
          width: ptr(100);
          height: ptr(30);
          display: flex;
          align-items: center;
          position: absolute;
          right: ptr(15);
          top: 50%;
          transform: translateY(-50%);
          justify-content: center;
          border-radius: ptr(4);
          background: #bdbdbd;
          color:#fff;
          font-size: ptr(14);
          span{
            width: 100%;
            height: 100%;
            border-radius: ptr(4);
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .count_down{
            background: #bdbdbd;
          }
        }
        .phone_reg{
          background: #ff7070;
        }
      }
      .code_number{
        margin-top: ptr(10);
      }
      .login_submit{
        background: #ff7070;
        border-radius: ptr(5);
        margin: ptr(30) auto;
        text-align: center;
        line-height: ptr(50);
        color: #fff;
        font-size: ptr(16);
      }
    }
</style>