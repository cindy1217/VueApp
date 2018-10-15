<template>
  <div>
  </div>
</template>
<script>
  import { login } from '@/fetch/api'
  export default {
    data () {
      return {
      }
    },
    methods:{
      
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