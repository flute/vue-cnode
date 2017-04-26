<template>
	<div class="message-container">
		<div class="message-hasnotread">
			<div class="recent-title">
				未读消息
			</div>
			<div class="recent-content">
				<div class="recent-item" v-for="(item,index) in messages.hasnot_read_messages">
					<img :src="item.author.avatar_url">
					<span> <router-link :to="{name:'article',params:{id:item.topic.id}}"> {{item.topic.title}} </router-link> </span>
				</div>
				<div class="notip" v-show="messages.hasnot_read_messages.length == 0">
					无消息
				</div>
			</div>
		</div>
		<div class="message-hasread">
			<div class="recent-title">
				过往消息
			</div>
			<div class="recent-content">
				<div class="recent-item" v-for="(item,index) in messages.has_read_messages">
					<img :src="item.author.avatar_url">
					<span> <router-link :to="{name:'article',params:{id:item.topic.id}}"> {{item.topic.title}} </router-link> </span>
				</div>
				<div class="notip" v-show="messages.hasnot_read_messages.length == 0">
					无消息
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'message',
	data(){
		return{
			accesstoken: this.$store.state.userInfo.accesstoken,
			messages:[]
		}
	},
	methods:{
		fetchData(){
			this.axios.get('https://cnodejs.org/api/v1/messages?accesstoken='+this.accesstoken)
			.then( response => response.data.data )
			.then( res => this.messages = res )
			.catch( err => console.error(err) )
		}
	},
	mounted(){
		if( !this.accesstoken ){
			this.$store.commit('showLogin',true);
			return;
		}
		this.fetchData();
	}
}	
</script>
<style>
.message-container{
	width: 70%;
    margin: 0 auto;
    margin-top: 20px;
}
.message-hasread,.message-hasnotread{
	background: #ffffff;
	margin-top: 10px;
}
</style>