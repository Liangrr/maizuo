<template>
	<div id="location">
		<p>热门城市</p>
		<ul>
			<li v-for="(item,index) in cityList" @click="cityAction(index)">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				cityList:['北京','上海','深圳','广州'],
			}
		},
		methods:{
			cityAction(index){
				this.$center.$emit('send-city',this.cityList[index]);
				this.$router.back();
			}
		}
	}
</script>

<style>
#location{
	width: 100%;
	position: absolute;
	top: 44px;
	bottom: 0;
	background-color: dodgerblue;
}
#location p{
	width: 100%;
	height: 30px;
	line-height: 30px;
	padding-left: 20px;
	box-sizing: border-box;
	background-color: #eee;
}
#location ul{
	width: 100%;
	height: 40px;
	line-height: 40px;
	display: flex;
	background-color: white;
}
#location ul li{
	text-align: center;
	float: left;
	flex: 1;
}
</style>