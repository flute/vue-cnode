<template>
	<div class="publish-container">
		<div class="publish-form">
			<div>
				<span>选择版块:</span>
				<select v-model="selected">
					<option v-for="(item,index) in tab" :value="index">{{item}}</option>
				</select>
			</div>
			<input type="text" v-model="title">
			<textarea v-model="content"></textarea>
			<button @click="submit">提交</button>
		</div>
	</div>
</template>
<script>
export default{
	name:'publish',
	data(){
		return{
			tab:{
				ask:'问答',
				share:'分享',
				job:'招聘'
			},
			selected:'',
			title: '',
			content:'',
			accesstoken:this.$store.state.userInfo.accesstoken
		}
	},
	methods:{
		submit(){
			if( !this.accesstoken ){
				this.$store.commit('showLogin',true)
				return
			}
			if( !this.title || !this.content || !this.selected ){
				alert('请填写必须内容')
			}
			var data = {accesstoken:this.accesstoken,title:this.title,tab:this.selected,content:this.content}
			this.postData(data)
		},
		postData(data){
			this.axios.post('https://cnodejs.org/api/v1/topics',data)
			.then( res => {
				if( res.data.success ){
					this.$router.push({name:'article',params:{id:res.data.topic_id}})
				}else{
					alert(res.data.error_msg)
				}
			})
			.catch( err => console.error(err) )
		}
	}
}	
</script>
<style>
.publish-container{
	width: 70%;
	margin: 0 auto;
	background: #fff;
    height: 100vh;
}
.publish-form{
	padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
    margin: 0 auto;
}
.publish-form div{
	height: 40px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    color: #333;
}
.publish-form select{
	margin-left: 20px;
    height: 28px;
    line-height: 28px;
    width: 120px;
    text-align: center;
    font-size: 14px;
    color: #333;
    border-color: mediumvioletred;
    outline: none
}
.publish-form input{
	height: 30px;
    line-height: 30px;
    width: 80%;
    border: 0;
    background: transparent;
    outline: none;
    border-bottom: 1px solid mediumvioletred;
    padding: 5px 10px;
    font-size: 16px;
    color: #333;
    margin-bottom: 30px;
}
.publish-form textarea{
	width: 80%;
	height: 180px;
	max-width: 80%;
	max-height: 300px;
    padding: 5px 10px;
    border: 1px solid mediumvioletred;
    outline: none;
    font-size: 14px;
    color: #333;
}
.publish-form button{
	width: 120px;
    height: 30px;
    line-height: 30px;
    border: 0;
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background: mediumvioletred;
    outline: none;
    cursor: pointer;
}
</style>