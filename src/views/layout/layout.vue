<template>
	<div class="layout_content">
		<headerBar :title="title" v-if="headerShow"></headerBar>
		<router-view class="layout_views" :key="$route.fullPath"></router-view>
		<footerBar :footerNav="footerNav" v-if="footerShow"></footerBar>
	</div>
</template>
<script>
	import headerBar from './components/headerBar'
	import footerBar from './components/footerBar'
	export default {
		data() {
			return {
				headerShow:false,
				title:"bblink1",
				footerShow:false,
				footerNav:[
					{name: 'bblink', icon: '', url: '/home'},
					{name: 'bblink', icon: '', url: '/mine'},
					{name: 'bblink', icon: '', url: '/mine'},
					{name: 'bblink', icon: '', url: '/login'}
				]
			}
		},
		methods: {
			resetLayout() {
				this.title = this.$route.meta.title
				if(!!this.$route.meta.headerShow) {
					this.headerShow = this.$route.meta.headerShow
				}
				if(!!this.$route.meta.footerShow) {
					this.footerShow = this.$route.meta.footerShow
				}	
			}
		},
		components: {
			headerBar,
			footerBar
		},
		created() {
			this.resetLayout()
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
			overflow: auto;
			position: relative;
		}
	}
</style>