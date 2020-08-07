<template>
	<div class="head">
		<div class="tou">
			<van-nav-bar title="清理缓存" left-text="" left-arrow @click-left="onClickLeft" />
		</div>
		<div class="di">
			<div><span style="font-size: 0.4rem;position: relative;top: 0.3rem;">当前可清理缓存</span></div>
			<h3>10.0MB</h3>

			<div id="dialog">
				<van-button style="width: 4rem;height: 1rem;font-size: 0.4rem;" class="btn" type="primary" @click="Dialog">清理缓存</van-button>
			</div>
			<span style="font-size: 0.3rem;">提示:清理缓存不会删除个人信息，车辆信息</span>


		</div>
	</div>
</template>

<script>
	import {
		NavBar
	} from 'vant';
	import {
		Toast
	} from 'vant';
	import {
		Button
	} from 'vant';
	import {
		Dialog
	} from 'vant';
	export default {
		components: {
			[NavBar.name]: NavBar,
			[Toast.name]: Toast,
			[Button.name]: Button,
			[Dialog.name]: Dialog,
			[Dialog.Component.name]: Dialog.Component,
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			//（确认、取消）的弹出框
			Dialog() {
				this.$dialog.confirm({
					message: '是否清理缓存？',
					confirmButtonColor: 'red'
				}).then(() => {
					console.log('确认')
				}).catch(() => {
					console.log('取消')
				})
			}

		},
		data() {
			return {
				show: false,
			};
		},


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
</style>
