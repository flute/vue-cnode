import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Article from '@/components/Article'
import User from '@/components/User'
import Message from '@/components/Message'
import Publish from '@/components/Publish'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home'
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
		},
		{
			path: '/messages',
			name: 'message',
			component: Message
		},
		{
			path: '/post',
			name: 'publish',
			component: Publish
		},
		{
			path: '/about',
			name: 'about',
			component: About
		}
	]
})
