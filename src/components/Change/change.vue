<template>
	<div>
		<div class="tou">
			<van-icon @click='prev' style="color: #FFFFFF;line-height: 0.6rem;" name="arrow-left" />
			<span>修改密码</span>
			<a style="float: right;font-size: 0.4rem;margin-right: 1rem;margin-top: 0.1975rem;color: #FFFFFF;">保存</a>
		</div>
		<div>

			<van-field v-model="text" placeholder="请输入原密码" label="原密码" />
			<van-field v-model="password" placeholder="请输入新密码" type="password" label="新密码" />
			<van-field v-model="password2" placeholder="请再次输入新密码" type="password" label="确认密码" />
		</div>
		<div style="margin-top: 0.3rem;"><img style="width: 100%;" src="../../../public/img/g-zp1.png"></div>
	</div>
</template>

<script>
	import {
		Field
	} from 'vant';
	export default {
		data() {
			return {
				text: '',
				password: '',
				password2: '',
			};
		},
		components: {
			[Field.name]: Field
		},
		methods: {
			prev() {
				this.$router.go(-1)
			}

		},
	}
</script>

<style scoped="scoped">
	.head {
		width: 100%;

		height: 21.8rem;
		background-color: #EDEDED;
	}

	.tou {
		width: 100%;
		height: 1rem;
		background-color: #5884E1;

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
		font-size: 0.5rem;
		position: relative;
		right: -3.3rem;
		top: -0.1rem;
	}

	.xiam .van-icon-arrow::before {
		color: #EDEDED;

	}

	.van-cell {

		color: #323233;
		font-size: 0.38667rem;
		line-height: 1.32rem;
		background-color: #fff;
	}
</style>
