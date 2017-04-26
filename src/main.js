// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import moment from 'moment'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.changeTime = time => moment(time).startOf('minute').fromNow().replace(/hours?/, '小时').replace('ago', '前').replace(/days?/, '天').replace(/minutes?/, '分钟').replace(/\ban?/, '1').replace(/months?/, '个月').replace(/\byears?/, '年').replace(/\s/g, '').replace('fewseconds','分钟');


const store = new Vuex.Store({
	state:{
		isShowAside: false,
		isShowLogin: false,
		isShowAbout: false,
		userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) || {avatar_url: '', id: '', loginname: '', accesstoken: ''}
	},
	mutations:{
		showAside(state,flag){
			state.isShowAside = flag
		},
		showLogin(state,flag){
			state.isShowLogin = flag
		},
		showAbout(state,flag){
			state.isShowAbout = flag
		},
		updateUserInfo(state){
			state.userInfo = localStorage.userInfo && JSON.parse(localStorage.userInfo) || {avatar_url: '', id: '', loginname: '', accesstoken: ''}
		}
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
