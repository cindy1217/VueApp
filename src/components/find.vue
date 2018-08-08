<template>
  <div class="hello">
      
    <div style="width:100px;height: 40px;background: pink">
      login
    </div>
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
  created(){
    // this.$http.get(process.env.HTTP.UPLOAD,{}).then((res)=>{
    //   console.log(res)
    // })
    //  // 设置页面标题
    // document.title = '首付多少了填那个'
    // // meta 标签描述设置
    // let description = document.querySelector("meta[name=description]")
    // description.setAttribute('content', '就烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦')
    // // meta 关键字设置 
    // let keywords = document.querySelector("meta[name=keywords]")
    // keywords.setAttribute('content', '天你你你你你你你你你你你你你你你你你你')
    // this.$http.post('http://47.74.217.233:3000/main/admin/auth/login',{
    //   username:'xiongzhend',
    //   password:123456
    // }).then((res)=>{
    //   console.log(res)
    // })
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
