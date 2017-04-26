<template>
	<transition name="slide-left">
		<div class="asidemenu" v-show="isShowAside">
			<div class="vmenu">
				<div class="aside-avatar" @click="login">
					<img :src=" userInfo.avatar_url == '' ? 'static/avatar.png' : userInfo.avatar_url ">
					<span>{{ userInfo.avatar_url == ''? '未登录': userInfo.loginname }}</span>
				</div>
				<ul class="aside-content">
					<li><router-link :to="{name:'home'}">首页</router-link></li>
					<li><router-link :to="{name:'message'}">我的消息</router-link></li>
					<li><router-link :to="{name:'publish'}">发布话题</router-link></li>
					<li @click="me">个人中心</li>
					<li @click="about">关于</li>
				</ul>
			</div>
			<div class="asideblock" @click="closeAside"></div>
		</div>
	</transition>
</template>
<script>
export default{
	name:'aside',
	data(){
		return{
			username:this.$store.state.userInfo.loginname
		}
	},
	computed:{
		isShowAside(){
			return this.$store.state.isShowAside
		},
		userInfo(){
			return this.$store.state.userInfo
		}
	},
	methods:{
		closeAside(){
			this.$store.commit('showAside',false)
		},
		login(){
			if( this.$store.state.userInfo.name ){
				return;
			}else{
				this.$store.commit('showLogin',true)
			}
		},
		me(){
			if( this.username ){
				console.log(this.username)
				this.$router.push({name:'user',params:{name:this.username}})
			}else{
				this.$store.commit('showLogin',true)
			}
		},
		about(){
			this.$store.commit('showAbout',true)
		}
	}
}	
</script>
<style>
.asidemenu{
	display: flex;
	width: 100%;
	height: 100%;
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	bottom:0;
	right: 0;
}
.vmenu{
	display: flex;
	width: 200px;
	flex-direction: column;
    background: currentColor;
    box-shadow: 0 0 10px #333;
}
.aside-avatar{
	display: flex;
    height: 200px;
    flex-direction: column;
    align-items: center;
}
.aside-avatar img{
	width: 120px;
    height: 120px;
    border-radius: 60px;
    margin-top: 30px;
    box-shadow: 0 0 15px #eee;
}
.aside-avatar span{
	font-size: 14px;
    margin-top: 15px;
    color: gray;
}
.aside-content{
	margin-top: 20px;
}
.aside-content li{
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 16px;
	color: #cccccc;
	cursor: pointer;
}
.aside-content li::after{
	content:'';
	left: 0;
	bottom: 0;
	width: 50%;
	height: 1px;
	background: #fff
}
.aside-content li a{
	color: #cccccc;
    display: inline-block;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.asideblock{
	flex: 1;
}
.slide-left-enter-active, .slide-left-leave-active {
  transition: all .4s ease
}
.slide-left-enter, .slide-left-leave-active {
	left: -200px;
}
</style>