<template>
  <div class="hello">
      <ul>
        <li v-for="item, index in msg" >
          <span  @click="mm(item.id)"  :class="{active:val.indexOf(item.id) > -1}">{{item.name}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: [{id:1,name:'aa'},{id:2,name:'aa'},{id:3,name:'aa'},{id:4,name:'aa'}],
      val:[1]
    }
  },
  methods:{
    mm(id){
      let idx = this.val.indexOf(id)
      if( idx > -1){
        this.val.splice(idx,1)
      }else{
        this.val.push(id)
      }
      console.log(this.val)
    }
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
  background: pink;
}
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
