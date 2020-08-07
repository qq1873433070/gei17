<template>
	<div class="hoead">
		<div class="tou">
			<div class="tou2">
				<img src="../../../public/img/w-zp1.png" />
				<router-link to="/login">
					<a>登陆</a>
					<a>/</a>
				</router-link>
				<router-link to="/zhuce">
					<a>注册</a>
				</router-link>
			</div>
		</div>
		<div class="zhong">
			<div style="display: flex;background-color: #FFFFFF;line-height: 1rem;width: 100%;height: 1.2rem;">
				<span style="margin-left: 0.2rem;margin-top: 0.1rem;"><img style="width: 1rem;height: 1rem;" src="../../../public/img/w-zp2.png">
				</span>
				<van-cell title="个人资料" is-link to="/personaldata" />
			</div>

			<div style="display: flex;background-color: #FFFFFF;line-height: 1rem;width: 100%;height: 1.2rem;">
				<span style="margin-left: 0.2rem;margin-top: 0.1rem;"><img style="width: 1rem;height: 1rem;" src="../../../public/img/w-zp2.png">
				</span>
				<van-cell title="邮寄地址" is-link to="/email" />
			</div>
			<div style="display: flex;background-color: #FFFFFF;line-height: 1rem;width: 100%;height: 1.2rem;">
				<span style="margin-left: 0.2rem;margin-top: 0.1rem;"><img style="width: 1rem;height: 1rem;" src="../../../public/img/w-zp2.png">
				</span>
				<van-cell title="修改密码" is-link to="/change" />
			</div>
			
		</div>
		
		<div class="di">
			<div style="display: flex;background-color: #FFFFFF;line-height: 1rem;width: 100%;height: 1.2rem;">
				<span style="margin-left: 0.2rem;margin-top: 0.1rem;"><img style="width: 1rem;height: 1rem;" src="../../../public/img/w-zp2.png">
				</span>
				<van-cell title="清楚缓存" is-link to="/cache" />
			</div>
			<div style="display: flex;background-color: #FFFFFF;line-height: 1rem;width: 100%;height: 1.2rem;">
				<span style="margin-left: 0.2rem;margin-top: 0.1rem;"><img style="width: 1rem;height: 1rem;" src="../../../public/img/w-zp2.png">
				</span>
				<van-cell title="关于我们" is-link to="/regard" />
			</div>
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
		}
	}
</script>

<style scoped="scoped">
	.hoead {
		width: 100%;
		height: 100%;
		background-color: #EDEDED;
	}

	.tou {
		width: 100%;
		height: 5rem;
		background-color: #5884E1;

	}

	.tou2 {
		display: flex;
		padding: 2rem 1rem;
	}

	.tou2 img {
		width: 20%;
		height: 20%;
	}

	.tou2 a {
		color: beige;
		font-size: 0.4rem;
		margin-top: 0.4rem;
		margin-left: 0.1rem;
	}

	

	/deep/ .van-cell__title span {
		font-size: 0.5rem;
	}

	/deep/ .van-cell {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 0.13333rem 0.21333rem;
		overflow: hidden;
		color: #323233;
		font-size: 0.18667rem;
		line-height: 1rem;
		background-color: #fff;
	}

	/deep/ .van-cell__right-icon {
		margin-left: -0.93333rem;
		color: #969799;
		margin-top: 30px;
	}
	.zhong{
		margin-top: 0.3rem;
	}
	.di{
		margin-top: 0.3rem;
		width: 100%;
		height: 2rem;
	}
</style>
