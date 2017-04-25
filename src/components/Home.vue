<template>
	<div class="home">
		<div class="top">
			<div class="tabbar">
				<span @click="changeTab('all')" v-bind:class=" active===''||active==='all'?'active':'' ">全部</span>
				<span @click="changeTab('share')" v-bind:class=" active==='share'?'active':'' ">分享</span>
				<span @click="changeTab('good')" v-bind:class=" active==='good'?'active':'' ">精华</span>
				<span @click="changeTab('ask')" v-bind:class=" active==='ask'?'active':'' ">问答</span>
				<span @click="changeTab('job')" v-bind:class=" active==='job'?'active':'' ">招聘</span>
			</div>
		</div>
		<div class="content" v-show="!loading">
			<ul>
				<li v-for="(item,index) in datas">
					<img class="avatar" :src="item.author.avatar_url">
					<div class="item-content">
						<div class="item-cleft">
							<div class="item-tab">
								<span v-show="item.tab">{{type[item.tab]}}</span>
							</div>
							<div class="item-title">
								<p><router-link :to="{name: 'article', params: {id: item.id}}">{{item.title}}</router-link></p>
								<p class="item-info">
									<span class="item-count"><b>{{item.reply_count}}</b> / {{item.visit_count}}</span>
									<span class="item-time">{{changeTime(item.create_at)}}</span>
								</p>
							</div>
						</div>
					</div>
					
				</li>
			</ul>
		</div>
		<div class="loading" v-show="loading">
			<i class="icon-more"></i>
		</div>
	</div>
</template>

<script>
export default {
	name:'home',
	data(){
		return{
			type:{
				share:'分享',
				good:'精华',
				ask:'问答',
				job:'招聘'
			},
			active:'',
			datas:[],
			loading:true
		}
	},
	methods:{
		fetchData(tab){
			this.loading = true;
			this.axios.get('https://cnodejs.org/api/v1/topics?tab='+tab)
			.then(result => result.data.data)
			.then(res => {
				this.datas = res;
				this.loading = false;
				//console.log(this.datas) 
			})
			.catch(function(err){
				console.error(err)
			})
		},
		changeTab(type){
			this.active = type;
			this.fetchData(type);
		}
	},
	mounted(){
		this.fetchData('all');
	},
	created(){
		console.info()
	}
}
</script>

<style>
.home ul li{
	display: flex;
	flex-direction: row;
	height: 40px;
	align-items: center;
	padding: 10px 5%;
	border-bottom: 1px solid #eee;
}
.tabbar{
	display: flex;
	align-items: center;
}
.tabbar span{
	display: flex;
	height: 40px;
	align-items: center;
	justify-content: center;
	flex: 1;
	cursor: pointer;
	color: #ffffff;
	font-size: 16px;
}
.tabbar span.active{
	color: #000000;
	border-bottom: 3px solid mediumorchid;
}
.top{
	background: darkseagreen;
}
.content{
	width: 70%;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0 0 15px #ccc;
}
.home{
    padding-bottom: 10px;
}
.avatar{
	width: 40px;
	height: 40px;
	border-radius: 5px;
}
.item-time{
	font-size: 12px;
}
.item-content{
	flex: 1;
    display: flex;
    align-items: center;
}
.item-cleft{
	flex: 1;
    display: flex;
}
.item-title{
	flex: 1;
	display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.item-title p{
	width: 100%;
	display: flex;
}
.item-title p a{
	text-align: left;
}
.item-tab{
	margin: 0 10px;
    width: 50px;
}
.item-title p{
	font-size: 14px;
}
.item-info{
	display: flex;
	justify-content: space-between;
}
.item-tab span{
	font-size: 12px;
    background: darkseagreen;
    color: #ffffff;
    padding: 2px 5px;
    border-radius: 5px;
}
.item-count{
	font-size: 12px;
    color: #666;
}
.item-count b{
	color: darkkhaki;
    font-weight: 100;
}
@-webkit-keyframes loading{
	from {-webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(360deg);}
}
.loading {
	display: inline-block;
	width: 40px;
	height: 40px;
	background: url('../../static/icon-loading.svg') no-repeat;
	background-size: contain;
	animation: loading .4s linear infinite;
	margin-top: 20px;
}
</style>