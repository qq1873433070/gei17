<template>
	<div class="head">
		<div class="tou">
			<van-nav-bar title="关于我们" left-text="" left-arrow @click-left="onClickLeft" />
		</div>
		<div style="text-align: center;margin-top: 1.8rem;">
			<img src="../../../public/img/z-zp1.png" />
		</div>
		<div style="margin-top: 1rem;">
			<van-cell-group>
				<van-cell title="基础信息" value="湖南省电动自行车登记系统" />
				<van-cell title="当前版本" is-link value="1.2.9" />
				<van-cell title="版权所有" value="湖南省公安厅交通警察总队" />
				<van-cell title="隐私政策" is-link />
				<van-cell title="分享我们" is-link />
			</van-cell-group>
		</div>
	</div>
</template>

<script>
	import {
		NavBar
	} from 'vant';
	import {
		Cell,
		CellGroup
	} from 'vant';

	export default {
		components: {
			[NavBar.name]: NavBar,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			}

		}


	}
</script>

<style scoped="scoped">
	.head {
		height: 20rem;
		background-color: #EDEDED;
	}

	.van-nav-bar {
		position: relative;
		z-index: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		height: 1rem;
		line-height: 1.5;
		text-align: center;
		background-color: #5884E1;
		-webkit-user-select: none;
		user-select: none;

	}

	/deep/ .van-nav-bar__arrow {

		margin-right: 0.05333rem;
		font-size: 0.5rem;
		color: #FFFFFF;
	}

	/deep/ .van-nav-bar__title {
		max-width: 60%;
		margin: 0 auto;
		color: #323233;
		font-weight: 500;
		font-size: 0.51333rem;
		color: #FFFFFF;
	}

	.di {
		text-align: center;
		width: 100%;
		height: 4.3rem;
		background-color: #FFFFFF;
		margin-top: 0.3rem;
	}

	/deep/.van-cell {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 0.13333rem 0.21333rem;
		overflow: hidden;
		color: #323233;
		font-size: 0.38rem;
		line-height: 0.92rem;
		background-color: #fff;
	}

	/deep/.van-cell__left-icon,
	.van-cell__right-icon {
		min-width: 1em;
		height: 0.32rem;
		font-size: 0.51333rem;
		line-height: 0.92rem;
	}
</style>
