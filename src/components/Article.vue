<template>
	<div class="article">
		<div class="content" v-show="!loading">
			<div class="atop">
				<div class="atitle">
					{{datas.title}}
				</div>
				<p>
					发布于 {{changeTime(datas.create_at)}} 作者<router-link :to="{name:'user',params:{name:author}}"> {{author}}</router-link> {{datas.visit_count}} 次浏览 来自 {{type[datas.tab]}}
				</p>
			</div>
			<div class="md" v-html="datas.content"></div>
		</div>
		<div class="acomment" v-show="!loading">
			<div class="reply_count">{{datas.reply_count}} 条回复</div>
			<div class="acomment-item" v-for="(item,index) in datas.replies">
				<div class="acomment-avatar">
					<img :src="item.author.avatar_url">
				</div>
				<div class="acomment-content">
					<p>
						<span class="reply-name"><router-link :to="{name:'user',params:{name:item.author.loginname}}">{{item.author.loginname}}</router-link></span> 
					</p>
					<p v-html="item.content"></p>
				</div>
				<div class="acomment-option">
					<span class="reply-info">{{index+1}}楼 {{changeTime(item.create_at)}}</span>
					<span class="up"><icon name="thumbs-o-up"></icon>{{item.ups.length}}</span>
				</div>
			</div>
		</div>
		<div class="loading" v-show="loading">
			<i class="icon-more"></i>
		</div>
	</div>
</template>

<script>
export default{
	name:'article',
	data(){
		return{
			type:{
				share:'分享',
				good:'精华',
				ask:'问答',
				job:'招聘'
			},
			id: this.$route.params.id,
			datas:[],
			author:'',
			loading:true
		}
	},
	methods:{
		fetchData(){
			this.loading = true
			this.axios.get('https://cnodejs.org/api/v1/topic/'+this.id)
			.then(result => result.data.data)
			.then(res => {
				this.datas = res;
				this.author = res.author.loginname
				this.loading = false
			})
			.catch(function(err){
				console.error(err)
			})
		}
	},
	mounted(){
		this.fetchData()
	}
}
</script>

<style>
.article{
	background: #efefef;
	text-align: center;
}
.md{
	text-align: left;
    padding: 10px 30px;
    font-size: 14px;
    color: #333;
    line-height: 24px;
}
.atop{
	padding: 10px 30px;
    border-bottom: 1px solid #efefef;
    text-align: left;
}
.atitle{
	font-size: 20px;
    font-weight: 500;
}
.atop p{
	font-size: 12px;
    margin-top: 5px;
}
.md h1,.md h2,.md h3,.md h4,.md h5{
	border-bottom: 1px solid #eee;
    margin: 20px 0 10px 0;
    padding-bottom: 5px;
}
.md ul li{
	list-style-type: disc;
}
.md ul,.md ol,.markdown-text ol,.markdown-text ul{
	margin: 0 0 10px 25px;
}
.md hr{
	margin: 20px 0;
    border: 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #fff;
}
blockquote {
    padding: 0 0 0 15px;
    margin: 0 0 20px;
    border-left: 5px solid #eee;
}
.md img {
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
}
.acomment{
	width: 70%;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0 0 15px #ccc;
    margin-top: 10px;
}
.acomment-item{
	display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
}
.acomment-avatar img{
	width: 40px;
	height: 40px;
	border-radius: 5px;
	background: burlywood;
    border: 1px solid #eee;
}
.acomment-option{
	font-size: 12px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.acomment-content{
	flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.reply_count{
	height: 40px;
    line-height: 40px;
    text-align: left;
    padding: 0 20px;
    background: darkslategrey;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
}
.acomment-content{
	margin: 0 20px 0 20px;
    font-size: 14px;
}
.reply-name{
	color: #000;
    width: 200px;
    display: inline-block;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.reply-info{
	color: #999;
    margin-left: 10px;
}
.up{
	display: inline-flex;
    width: 50px;
    justify-content: flex-end;
    align-items: center;
}
.up svg{
	width: 12px;
	margin-right: 5px;
	color: #999;
	cursor: pointer;
}
.up svg:hover{
	color: deepskyblue
}
.markdown-text p{
	text-align: left;
}
.markdown-text p img{
	max-width: 100%;
	display: block;
    margin: 5px 0;
    box-shadow: 0 0 10px #eee;
}
.acomment-avatar{
	display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}
</style>