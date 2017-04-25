import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Article from '@/components/Article'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/article/:id',
			name: 'article',
			component: Article
		},
		{
			path: '/user/:name',
			name: 'user',
			component: User
		}
	]
})
