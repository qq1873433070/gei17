<template>
	<div class="tabbar">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o" to="/home">
				<div>首页</div>
			</van-tabbar-item>
			<van-tabbar-item icon="search" to="/catagory">
				<div>查询</div>
			</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/search">
				<div>我</div>
			</van-tabbar-item>
		</van-tabbar>
	</div>


</template>

<script>
	import {
		Tabbar,
		TabbarItem
	} from 'vant';
	export default {
		components: {

			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem

		},
		data() {
			return {
				active: 0,
			};
		},
	}
</script>

<style scoped>
	.tabbar {
		display: flex;
		font-size: 1rem;
		background-color: #f2f2f2;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
	}

	.tabbar div {
		font-size: 0.3rem;
	}

	.van-tabbar {
		z-index: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: content-box;
		width: 100%;
		height: 1.2rem;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		background-color: #F7F7F7;
	}

	/deep/.van-tabbar-item__icon {
		position: relative;
		margin-bottom: 0.06667rem;
		font-size: 0.74rem;
	}
</style>
