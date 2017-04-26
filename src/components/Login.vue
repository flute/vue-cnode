<template>
	<transition name="fade">
		<div class="login" v-show="isShowLogin">
			<div class="login-box">
				<p>Access Token</p>
				<input type="text" v-model="accesstoken">
				<button @click="checkAc">登陆</button>
				<span>{{tips}}</span>
			</div>
			<div class="close-login" @click="closeLogin"></div>
		</div>
	</transition>
</template>
<script>
export default{
	name:'login',
	data(){
		return{
			accesstoken:'',
			tips:''
		}
	},
	computed:{
		isShowLogin(){
			return this.$store.state.isShowLogin
		}
	},
	methods:{
		closeLogin(){
			this.$store.commit('showLogin',false);
		},
		checkAc(){
			if( !this.accesstoken ) return;
			this.axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:this.accesstoken})
			.then( response => response.data )
			.then( res => {
				if( res.success ){
					res.accesstoken = this.accesstoken
					this.accesstoken = ''
					this.$store.commit('showLogin',false)
					localStorage.userInfo = JSON.stringify(res)
					this.$store.commit('updateUserInfo')
				}else{
					this.tips = res.error_msg
				}
			})
		}
	}
}	
</script>
<style>
.login{
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
.close-login{
	position: absolute;
	width: 100%;
	height: 100%;
}
.login-box{
	display: inline-flex;
    height: 150px;
    width: 300px;
    margin: 0 auto;
    margin-top: 10%;
    z-index: 3;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px 50px;
    background: darkorchid;
    color: #ffffff;
}
.login-box p{
	font-size: 16px;
    font-weight: 500;
}
.login-box input{
	margin: 10px 0 20px 0;
	border: 0;
    background: transparent;
    border-bottom: 1px solid #ffffff;
    width: 80%;
    outline: none;
    padding: 5px 10px;
    font-size: 14px;
    color: #eee;
}
.login-box button{
	width: 80px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #efefef;
    font-size: 14px;
    background: transparent;
    color: floralwhite;
    cursor: pointer;
    outline: none
}
.login-box button:hover{
	border-color: skyblue;
	color:skyblue;
}

</style>