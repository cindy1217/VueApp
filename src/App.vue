<template>
  <div id="app">
  	<headerComponent></headerComponent>
    <router-view/>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent'
export default {
  name: 'App',
  data () {
  	return {
  		title:"我的"
  	}
  },
  created(){
  	console.log(this.$route.meta)
  	console.log(this.$route.meta)
  },
  components:{
  	headerComponent
  },
}
</script>

<style>

</style>
