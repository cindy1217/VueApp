<template>
  <div>

  </div>
</template>
<script>
export default {
    data() {
      return {
      }  
    }
}
</script>
<style lang="scss">
  dl {
    width: 300px;
    height: 30px;
    background: #fff;
    margin: 50px auto;
    display:flex;
    justify-content: space-between;
    dt,dd{
      background:#ccc;
      width: 30px;
      line-height:30px;
      text-align:center;
    }
    ul{
      flex:1;
      display:flex;
      justify-content: space-around;
      li{
        width:30px;
        box-sizing:border-box;
        height: 30px;
        border:1px solid red;
        text-align:center;
        line-height:30px;
      }
      .active{
        background:red;
      }
    }  
  }
</style>