<template>
	<div class="head">
		<div class="tou">
			<van-icon @click='prev' style="color: #FFFFFF;line-height: 0.6rem;" name="arrow-left" />
			<span>邮箱地址</span>
			<a style="float: right;font-size: 0.4rem;margin-right: 1rem;margin-top: 0.1975rem;color: #FFFFFF;">保存</a>
		</div>
		<div class="xiam">
			<van-cell title="姓名" is-link value="请填写收件人姓名" />
			<van-cell title="手机号码" is-link value="请填写收件人手机号码" />
			<van-cell title="地址" is-link value="请填写收件人地址" />
		</div>
	</div>
</template>

<script>
	import {
		Cell,
		CellGroup
	} from 'vant';
	export default {
		components: {
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup
		},
		methods: {
			prev() {
				this.$router.go(-1)
			}
		}

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

	/deep/.van-cell {
		line-height: 1rem;
		font-size: 20px;
	}
</style>
