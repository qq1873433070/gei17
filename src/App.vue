<template>
	<div id="app">
		<router-view></router-view>

		<div v-show="bol">
			<tab-bar></tab-bar>
		</div>
		<TabbarItem></TabbarItem>
	</div>
</template>

<script>
	import TabBar from './components/tabbar/TabBars.vue'
	import TabbarItem from './components/tabbar/TabbarItems.vue'
	export default {
		name: 'App',
		components: {
			TabBar,
			TabbarItem
		},
		data() {
			return {
				bol: true
			}
		},
		watch: {
			$route(to) {
				console.log(to.path)
				if (to.path == '/zhuce' || to.path == '/login' || to.path == '/personaldata' || to.path == '/email' || to.path ==
					'/change' || to.path == '/cache'||to.path=='/regard') {
					this.bol = false
				} else {
					this.bol = true
				}
			}
		}
	}
</script>

<style>
</style>
