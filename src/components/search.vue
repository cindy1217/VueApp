<template>
  <div>
    <h2>你访问的页面不存在</h2>
    <img src="../assets/img/errorPage.jpg" alt="">
    <p>{{countDownTime}}s后将返回首页</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        countDownTime:5
      }
    },
    methods: {
      countDownFun() {
        if(this.countDownTime > 0) {
          let timers = setInterval(() => {
            this.countDownTime--
            if(this.countDownTime < 0 || this.countDownTime === 0) {
              this.$router.push('/')
              clearInterval(timers)
            } 
          }, 1000);
        }
        return 
      }
    },
    mounted() {
      this.countDownFun()
    }
  }
</script>
<style lang="scss">
  img{
    max-width: 100%;
  }
</style>