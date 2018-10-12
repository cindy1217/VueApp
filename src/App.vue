<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent'
export default {
  name: 'App',
  data () {
  	return {
  		title:""
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
