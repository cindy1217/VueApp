<template>
	<div>{{title}}</div>
</template>
<script>
	export default {
		data() {
			return {
				title:"我的"
			}
		},
		beforeRouteEnter(to, from, next) {
		  	console.log(to)
		  	next()
		},
		created(){	
			console.log(this.$route)
			//this.title = this.$route.meta.title
		}
	}
</script>