<template>
	<div class="user-container">
		<div class="user-avatar">
			<img :src="datas.avatar_url">
		</div>
		<div class="user-info">
			<p class="user-name">{{name}}</p>
			<p>积分 {{datas.score}}</p>
			<p>注册时间 {{changeTime(datas.create_at)}}</p>
			<a class="github" :href="'https://github.com/'+datas.githubUsername"  target="_blank"><icon name="github"></icon></a>
		</div>
		<div class="recent-topics">
			<div class="recent-title">
				最近创建的话题
			</div>
			<div class="recent-content">
				<div class="recent-item" v-for="(item,index) in datas.recent_topics">
					<img :src="item.author.avatar_url">
					<span> <router-link :to="{name:'article',params:{id:item.id}}"> {{item.title}} </router-link> </span>
				</div>
				<div class="notip" v-show="datas.recent_topics.length == 0">
					暂无
				</div>
			</div>
		</div>
		<div class="recent-replies">
			<div class="recent-title">
				最近参与的话题
			</div>
			<div class="recent-content">
				<div class="recent-item" v-for="(item,index) in datas.recent_replies">
					<img :src="item.author.avatar_url">
					<span> <router-link :to="{name:'article',params:{id:item.id}}"> {{item.title}} </router-link> </span>
				</div>
				<div class="notip" v-show="datas.recent_replies.length == 0">
					暂无
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'user',
	data(){
		return{
			name: this.$route.params.name,
			datas:[]
		}
	},
	methods:{
		fetchData(){
			this.axios.get('https://cnodejs.org/api/v1/user/'+this.name)
			.then( response => response.data.data )
			.then( res => this.datas = res )
			.catch( err => console.error(err) )
		}
	},
	mounted(){
		this.fetchData();
	}
}	
</script>
<style>
.user-container{
	width: 70%;
    margin: 0 auto;
    padding-top: 50px;
}
.user-avatar{
	display: inline-flex;
    width: 120px;
    height: 120px;
}
.user-avatar img{
	width: 100%;
	height: 100%;
	background: cornflowerblue;
	border-radius: 60px;
	box-shadow: 0 0 15px 5px #ccc;
}
.user-info{
	margin-top: -60px;
    background: #fff;
    font-size: 12px;
    padding: 60px 0 10px 0;
}
.user-name{
	font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
}
.recent-topics,.recent-replies{
	background: #ffffff;
    margin-top: 20px;
}
.recent-title{
	height: 40px;
    line-height: 40px;
    text-align: left;
    padding: 0 20px;
    background: cadetblue;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
}
.recent-item {
	padding: 6px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.recent-item img{
	width: 40px;
	height: 40px;
	border-radius: 5px;
	margin-right: 20px;
	background: burlywood;
}
.recent-item span{
	font-size: 14px;
}
.github{
	color: #333333;
}
.notip{
	padding: 10px 20px;
    text-align: left;
    font-size: 14px;
}
</style>