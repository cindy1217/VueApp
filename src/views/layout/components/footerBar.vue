<template>
	<div>
		<ul class="footerNav_content">
			<li v-for="(item,idx) in footerNav" :key="idx" @click="goTo(item.url)">{{item.name}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			goTo(url) {
				if(!!url) {
					this.$router.push(url)
				}
			}
		},
		props:{
			footerNav:{
				type:Array,
				default: [
					{
						name:'bblink',
						icon:'',
						url:'',		 
					},
					{
						name:'bblink',
						icon:'',
						url:'',		 
					},
					{
						name:'bblink',
						icon:'',
						url:'',		 
					},
					{
						name:'bblink',
						icon:'',
						url:'',		 
					}
				]
			}
		}
	}
</script>
<style lang="scss">
	.footerNav_content{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>