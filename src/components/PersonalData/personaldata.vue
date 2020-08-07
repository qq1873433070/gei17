<template>
	<div class="head">
		<div class="tou">
			<van-icon @click='prev' style="color: #FFFFFF;" name="arrow-left" />
			<span>个人资料</span>
		</div>

		<div class="tu">
			<span>头像</span>
			<van-uploader style="position: relative;left: 3rem;top: 4px;" v-model="fileList" multiple :max-count="1">
			</van-uploader>
			<a> > </a>
		</div>

		<div style="margin-top: 0.3rem;" class="dianhua">
			<van-cell title="手机号码" is-link value="176****2829" />
		</div>
		<div style="margin-top: 0.3rem;" class="xiam">
			<van-cell-group>
				<van-cell title="身份信息" value="已认证" />
				<van-cell title="证件类型" value="居民身份证" />
				<van-cell title="证件号码" value="4306************11" />
				<van-cell title="姓名" value="*城禧" />
				<van-cell title="性别" is-link value="男" />
				<van-cell title="联系地址" is-link value="湖南岳阳" />
				<van-cell title="电子邮箱" is-link value="请填写电子邮箱" />
			</van-cell-group>
		</div>
		<div style="margin-top: 0.3rem;">
			<van-button type="primary" block color="#ffffff"><span style="color: red;">注销</span></van-button>
		</div>

	</div>
</template>

<script>
	import {
		Uploader
	} from 'vant';
	import {
		Button
	} from 'vant';
	import {
		Cell,
		CellGroup
	} from 'vant';
	export default {
		methods: {
			prev() {
				this.$router.go(-1)
			}

		},
		components: {
			[Uploader.name]: Uploader,
			[Button.name]: Button,
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup

		},
		data() {
			return {
				fileList: [],
			};
		},
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
		margin: 0 auto;

	}

	.head {
		height: 21.8rem;
		background-color: #EDEDED;
	}

	.tou {
		width: 100%;
		height: 1rem;
		background-color: #5884E1;
		display: flex;
		flex: 1;
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
		font-size: 34px;
		position: relative;
		right: 2rem;
		top: 10px;

	}

	.tu {
		width: 100%;
		height: 1.2rem;
		background-color: #FFFFFF;
		display: flex;
	}

	.tu span {
		font-size: 0.4rem;
		line-height: 1.2rem;
		margin: 0 0.625rem;
	}

	.tu a {
		color: #DBDBDE;
		font-size: 0.6rem;
		margin: 0.3rem 0.3rem;
	}

	/deep/.van-cell {
		line-height: 1rem;
		font-size: 20px;
	}

	.dianhua .van-icon-arrow::before {
		color: #EDEDED;

	}

	.xiam .van-icon-arrow::before {
		color: #EDEDED;

	}

	.van-cell__title span {
		margin-left: 0.5rem;
	}

	.van-cell__value span {
		margin-right: 0.3rem;
	}
</style>
