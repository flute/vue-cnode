<template>
	<div id="app">
		<VHeader></VHeader>
		<router-view></router-view>
	</div>
</template>

<script>
import VHeader from './components/header.vue';
export default {
	name: 'app',
	components:{
		VHeader
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
#app{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-height: 100vh;
	background: #efefef;
}
ul li{
	list-style: none;

}
a{
	color: deepskyblue;
	color: crimson;
	text-decoration: none;
}
</style>
