<template lang="html">
	<div class="header">
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
	}
}
</script>

<style>
.header{
	height: 60px;
    line-height: 60px;
	background: darkseagreen;
}
h1 a{
	text-align: center;
	color: #ffffff;
}	
</style>