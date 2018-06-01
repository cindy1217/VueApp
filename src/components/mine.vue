<template>
  <div class="hello">
    <dl>
      <dt @click="up" style="width: 100px,height:100px;background: pink">+</dt>
      <dt>{{msg}}</dt>
      <dd @click="down" style="width: 100px,height:100px;background: pink">-</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:520,
    }
  },
  watch:{
    msg(val){
      console.log(val)
      this.$router.replace('/mine/'+ val)
    }
  },
  methods:{
    up(){
      this.msg += 1
    },
    down(){
      this.msg -= 1

    }
  },
  created(){
    this.msg = Number(this.$route.params.id)
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
