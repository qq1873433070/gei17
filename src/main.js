import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index'
import {
	Icon
} from 'vant';
Vue.use(Icon);
import axios from "axios"; //直接引用就行
Vue.prototype.axios = axios
Vue.config.productionTip = false
import 'vant/lib/index.css';
axios.defaults.baseURL = ' /api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
