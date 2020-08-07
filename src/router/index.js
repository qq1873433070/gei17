import Vue from 'vue'
import Router from 'vue-router'

//resolve 重复点击报错
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
	return originalReplace.call(this, location).catch(err => err);
};

const Home = () => import('../views/home/Home.vue')
const Catagoty = () => import('../views/catagory/Catagory.vue')
const Search = () => import('../views/search/Search.vue')


Vue.use(Router)

const routes = [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/catagory',
		component: Catagoty
	},
	{
		path: '/search',
		component: Search
	},
	{
		path: '/login',
		component: () => import("../components/wo/login")
	},
	{
		path: '/zhuce',
		component: () => import("../components/wo/zhuce")
	},
	{
		path: '/personaldata',
		component: () => import("../components/PersonalData/personaldata")
	},
	{
		path: '/email',
		component: () => import("../components/Email/email")
	},
	{
		path: '/change',
		component: () => import("../components/Change/change")
	},
	{
		path: '/cache',
		component: () => import("../components/Cache/cache")
	},

	{
		path: '/regard',
		component: () => import("../components/Regard/regard")
	}

]

const router = new Router({
	routes,
	mode: 'history'
})

export default router
