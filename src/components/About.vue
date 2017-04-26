<template>
	<transition name="fade">
		<div class="about" v-show="isShowAbout">
			<div class="about-box">
				<p>关于</p>

				<div class="about-content">
					<p>基于 vue2 的 CNode 社区，接口全部来自 CNode 官方，请放心使用。</p><br>
					<p>功能：首页、详情页、用户个人中心、消息页、发布</p><br>
					<p>技术栈：vue2+vue-router+vuex+axios+webpack+flex布局</p><br>
					<p>github: <a href="https://github.com/flute/vue-cnode" target="_blank">https://github.com/flute/vue-cnode</a></p><br>
					<p>持续更新中。。。</p>
				</div>
			</div>
			<div class="close-about" @click="closeAbout"></div>
		</div>
	</transition>
</template>
<script>
export default{
	name:'login',
	computed:{
		isShowAbout(){
			return this.$store.state.isShowAbout
		}
	},
	methods:{
		closeAbout(){
			this.$store.commit('showAbout',false);
		}
	}
}	
</script>
<style>
.about{
	position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    height: 100vh;
    justify-content: center;
}
.fade-enter-active, .fade-leave-active {
  transition: all .4s ease
}
.fade-enter, .fade-leave-active {
	opacity: 0;
}
.close-about{
	position: absolute;
	width: 100%;
	height: 100%;
}
.about-box{
	display: inline-flex;
    height: 250px;
    width: 400px;
    margin: 0 auto;
    margin-top: 10%;
    z-index: 3;
	flex-direction: column;
    align-items: center;
    padding: 20px 50px;
    background: #fff;
    color: #333;
    box-shadow: 0 0 15px #ede;
    border-radius: 5px;
}
.about-content{
	font-size: 14px;
    margin-top: 20px;
}
</style>