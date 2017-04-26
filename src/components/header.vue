<template lang="html">
	<div class="header">
		<div class="menu" v-on:click="showAside"><icon name="bars"></icon></div>
		<h1><router-link :to="{name:'home'}">{{name}}</router-link></h1>
	</div>
</template>

<script>
export default{
	name:'header',
	data(){
		return{
			name:'CNode'
		}
	},
	methods:{
		showAside(){
			this.$store.commit('showAside',true)
		}
	}
}
</script>

<style>
.header{
	height: 60px;
    line-height: 60px;
	background: darkseagreen;
}
.header h1{
	text-align: center;
}
.header h1 a{
	text-align: center;
	color: #ffffff;
}
.menu{
	position: absolute;
    margin-left: 20px;
    cursor: pointer;
    color: #fff;
}	
</style>