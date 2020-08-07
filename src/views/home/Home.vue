<template>
	<div class="hoead">
		<div class="tou">
			<span>查询</span>
			<van-icon style="float: right;line-height:1.3rem;font-size: 0.7rem;position: relative;right: 0.3rem;" name="smile-comment-o" />
		</div>
		<div class="lunbo">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item><img src="../../../public/img/lunbo.png"> </van-swipe-item>
				<van-swipe-item><img src="../../../public/img/lunbo2.png"> </van-swipe-item>
				<van-swipe-item><img src="../../../public/img/lunbo3.png"> </van-swipe-item>

			</van-swipe>
		</div>
		<div class="di">
			<van-grid direction="horizontal" :column-num="2" icon-size="1rem" style="font-size: 1rem;">
				<van-grid-item style="color: red;" icon="cash-on-deliver" text="我要上牌" />
				<van-grid-item style="color: yellow;" icon="cash-on-deliver" text="信息变更" />
				<van-grid-item style="color: blue;" icon="cash-on-deliver" text="我要过户" />
				<van-grid-item style="color: green;" icon="cash-on-deliver" text="我要补牌" />
				<van-grid-item style="color: aqua;" icon="cash-on-deliver" text="号码注销" />
				<van-grid-item style="color: blueviolet;" icon="cash-on-deliver" text="盗抢备案" />
				<van-grid-item style="color: darkseagreen;" icon="cash-on-deliver" text="异议申请" />
				<van-grid-item style="color: fuchsia;" icon="cash-on-deliver" text="保险服务" />
			</van-grid>
		</div>
		<div style="text-align: center;margin-top: 0.3rem;">
			<img style="width: 90%;" src="../../../public/img/s-zp2.png" />
		</div>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant';
	import {
		Grid,
		GridItem
	} from 'vant';
	export default {
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Grid.name]: Grid,
			[GridItem.name]: GridItem
		}
	}
</script>

<style scoped="scoped">
	.head {
		background-color: #EDEDED;
		width: 100%;
		height: 20rem;
	}

	.tou {
		text-align: center;
		width: 100%;
		height: 1.3rem;
		background-color: #5884E1;
		color: #FFFFFF;

	}

	.tou span {
		font-size: 0.5rem;
		line-height: 1.3rem;
	}

	.lunbo {
		text-align: center;
		width: 95%;
		margin-top: 0.3rem;
	}

	.lunbo img {
		border-radius: 20px;
		margin-left: 0.7rem;
		width: 90%;
	
	}

	/deep/.van-grid-item__text {
		color: #646566;
		font-size: 0.36rem;
		line-height: 1.5;
		word-wrap: break-word;
		font-weight: bold;


	}

	[class*=van-hairline]::after {
		position: absolute;
		box-sizing: border-box;
		content: ' ';
		pointer-events: none;
		top: -50%;
		right: -50%;
		bottom: -50%;
		left: -50%;
		border: 1px solid #969799;
		-webkit-transform: scale(.8);
		transform: scale(0.5);


	}

	.di {
		margin-top: 0.4rem;
	}
</style>
