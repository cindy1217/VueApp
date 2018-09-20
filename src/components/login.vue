<template>
    <div>
      <div class="login_submit" @click="login">登陆</div>
    </div>
</template>
<script>
    export default {
        data () {
          return {
          }
        },
        methods:{
          login () {
            localStorage.setItem('IS_LOGIN',true)
            if(!!this.$route.query.redirect) {
              this.$router.push(this.$route.query.redirect)
            } else {
              this.$router.push('/')
            }
          }
        },
    }
</script>
<style lang="scss" scoped>
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
