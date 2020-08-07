<template>
	<div class="head">
		<div class="tou">
			<van-icon @click='prev' style="color: #FFFFFF;" name="arrow-left" />
			<span>注册</span>
		</div>
		<div>
			<img style="width: 90%;height: 100%;" src="../../../public/img/z-zp2.png" />
		</div>


	</div>

</template>

<script>
	export default {
		methods: {
			prev() {
				this.$router.go(-1)
			}

		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
		margin: 0 auto;
	}

	.head {
		width: 100%;
		height: 100%;

	}

	.tou {
		width: 100%;
		height: 1rem;
		background-color: #5884E1;
		display: flex;

	}

	/deep/.van-icon {
		position: relative;
		display: inline-block;
		font: normal normal normal 0.18667rem/1 vant-icon;
		font-size: 0.5rem;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		color: #FFFFFF;
		margin-top: 0.2rem;
		margin-left: 0.1rem;

	}

	.tou span {
		color: #FFFFFF;
		font-size: 42px;
		position: relative;
		right: 2rem;

	}
</style>
