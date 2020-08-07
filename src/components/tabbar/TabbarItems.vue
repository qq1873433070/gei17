<template>
	<div class="tabbar-item" @click="itemclick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :class="{active:isActive}">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabbarItem',
		props: {
			path: String
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) != -1
			}
		},
		methods: {
			itemclick() {
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style scoped="scoped">
	/* @import '../../assets/fonts/iconfont.css'; */
	.tabbar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 13px;
		margin-top: 10px;
		color: gray;
	}

	/*  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    font-weight: bolder;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } */
	.icon {
		width: 25px;
		height: 25px;
		vertical-align: -0.15em;
		fill: currentcolor;
		overflow: hidden;
	}

	.active {
		color: black;
		font-weight: bold;
	}

	.icon-active {
		width: 25px;
		height: 25px;
		vertical-align: -0.15em;
		fill: deeppink;
		overflow: hidden;
	}
</style>
