<template>
	<div class="layout_content">
		<headerBar v-if="headerShow"></headerBar>
		<router-view class="layout_views"></router-view>
		<footerBar v-if="footerShow"></footerBar>
	</div>
</template>
<script>
	import headerBar from './components/headerBar'
	import footerBar from './components/footerBar'
	export default {
		data() {
			return {
				headerShow:true,
				footerShow:true,
			}
		},
		beforeRouteEnter(to,from,next) {
			console.log(to)
			next()
		},
		components: {
			headerBar,
			footerBar
		}
	}
</script>
<style lang="scss">
	.layout_content{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		.layout_views{
			flex:1;
			background: pink;
			overflow: auto;
		}
	}
</style>