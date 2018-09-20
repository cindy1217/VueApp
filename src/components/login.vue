<template>
    <div class="user_Info_box">
      <div>
        <label for="user_mobile">手机</label> 
        <input type="text" id="user_mobile" />
      </div>
      <div>
        <label for="user_code">验证码</label>
        <input type="text" id="user_code" />
        <p>
          <span>获取验证码</span>
          <span>已发送(60s)</span>
          <span>发送失败</span>
          <span>重新获取</span>
        </p>
      </div>
      <div class="login_submit" @click="login">登陆</div>
    </div>
</template>
<script>
    export default {
        data () {
          return {
            userInfo:{
              mobile:'15573139487',
              code:'123456',
              wy:true
            },
            login_URL:''
          }
        },
        methods:{
          //登录
          login () {
            //登录后置路径
            this.login_URL = this.$route.query.login_URL || '/' 
            this.$store.dispatch('login',{
              userInfo:this.userInfo,
              login_URL:this.login_URL
            })
          }
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    .user_Info_box{
      padding: 15px;
    }
    .login_submit{
      width:190px;
      height:50px;
      background:#4263B7;
      border-radius:5px;
      margin:0 auto;
      text-align:center;
      line-height:50px;
      color:#fff;
    }
</style>

