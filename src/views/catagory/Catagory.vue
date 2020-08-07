<template>
	<div class="head">
		<div class="tou">
			<span>查询</span>
			<van-icon style="float: right;line-height:1.3rem;font-size: 0.7rem;position: relative;right: 0.3rem;" name="scan" />
		</div>
		<div class="diyi">
			<div class="yi">
				<div style="width: 7px; height: 0.7rem;background-color: #3478F6;border-radius: 10px;position: relative;top: 0.3rem;"></div>
				<strong>我的车辆</strong>
			</div>
			<hr>
			<div style="display: flex;" class="er">
				<img src="../../../public/img/c-zp1.png" />
				<van-cell title="车辆信息" to="index" />

			</div>
			<hr style="width: 90%;text-align: center;" />
			<div style="display: flex;" class="er">
				<img src="../../../public/img/c-zp1.png" />
				<van-cell title="业务进度" to="index" />

			</div>
			<hr style="width: 90%;text-align: center;" />
			<div style="display: flex;" class="er">
				<img src="../../../public/img/c-zp1.png" />
				<van-cell title="电子行驶证" to="index" />

			</div>
			<hr style="width: 90%;text-align: center;" />
			<div style="display: flex;" class="er">
				<img src="../../../public/img/c-zp1.png" />
				<van-cell title="我的保单" to="index" />

			</div>
		</div>
		<div class="dier">
			<div class="yi">
				<div style="width: 7px; height: 0.7rem;background-color: #3478F6;border-radius: 10px;position: relative;top: 0.3rem;"></div>
				<strong>公告查询</strong>
			</div>
			<hr>
			<div style="display: flex;" class="er">
				<img src="../../../public/img/c-zp1.png" />
				<van-cell title="登记须知" to="index" />

			</div>
			<hr style="width: 90%;text-align: center;" />
			<div style="display: flex;" class="er">
				<img src="../../../public/img/c-zp1.png" />
				<van-cell title="登记网点" to="index" />

			</div>
			<hr style="width: 90%;text-align: center;" />
			<div style="display: flex;" class="er">
				<img src="../../../public/img/c-zp1.png" />
				<van-cell title="公告目录" to="index" />

			</div>
			<hr style="width: 90%;text-align: center;" />
			<div style="display: flex;" class="er">
				<img src="../../../public/img/c-zp1.png" />
				<van-cell title="CCC核验" to="index" />

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

	.diyi {

		width: 100%;
		height: 8.2rem;
		background-color: #FFFFFF;
		margin-top: 0.3rem;
	}

	.dier {

		width: 100%;
		height: 8.2rem;
		background-color: #FFFFFF;
		margin-top: 1rem;
	}

	.yi {
		display: flex;
		height: 1rem;
		line-height: 1.4rem;
		margin-left: 0.3rem;
	}

	.yi strong {
		margin-left: 0.5rem;
		font-size: 0.4rem;
	}

	.van-cell {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 0rem 0.21333rem;
		overflow: hidden;
		color: #323233;
		font-size: 0.5rem;
		line-height: 0.8rem;
		background-color: #fff;
	}

	.er img {
		width: 10%;
		height: 10%;

		margin-left: 0.4rem;
	}
</style>
