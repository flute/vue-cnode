<template>
	<div id="app">
		<VHeader></VHeader>
		<VAside></VAside>
		<VLogin></VLogin>
		<VAbout></VAbout>
		<router-view></router-view>
	</div>
</template>

<script>
import VHeader from './components/header.vue'
import VAside from './components/Aside.vue'
import VLogin from './components/Login.vue'
import VAbout from './components/About.vue'

export default {
	name: 'app',
	components:{
		VHeader,
		VAside,
		VLogin,
		VAbout
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	text-align: left;
}
#app{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-height: 100vh;
	background: #efefef;
	position: relative;
}
ul li{
	list-style: none;
	text-align: left;
}
a{
	color: deepskyblue;
	color: crimson;
	text-decoration: none;
}
</style>
