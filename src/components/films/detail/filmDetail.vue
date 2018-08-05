<template>
<div id='filmDetail'>
	<div class="film_detail">
		<img :src="filmData.cover"/>
		<div class="filmIntro">
			<h3>影片简介</h3>
			<ul>
				<li><i>导演</i>:&nbsp;{{filmData.director}}</li>
				<li><i>主演</i>:&nbsp;<span v-for="actor in filmData.actors">&nbsp;|&nbsp;{{actor.name}}</span></li>
				<li><i>地区语言</i>:&nbsp;{{filmData.nation}}({{filmData.language}})</li>
				<li><i>类型</i>:&nbsp;{{filmData.director}}</li>
				<li><i>上映日期</i>:&nbsp;{{filmData.premiereAt | format-date}}</li>
				<li>{{filmData.synopsis}}</li>
			</ul>
		</div>
		<button id="ticket">购票</button>
	</div>
	
</div>
</template>

<script>
import {getFilmsData} from '@/services/filmService';

export default {
	data(){
		return{
			filmData:'',
		}
	},
	methods:{
		
	},
	created(){
//		这里的有bug,重新进入不刷新
		console.log(this.$route.query.filmId)
		getFilmsData(this.$route.query.filmId).then(result=>{
			this.filmData = result;
		})
	},
//	mounted(){
//		this.$refs.page.refreshDom();
//	},

}
</script>

<style>
#filmDetail{
	position: relative;
}
.film_detail{
	width: 100%;
	position: absolute;
	top: 50px;
	left: 0;
}
.film_detail img{
	width: 100%;
}
.filmIntro{
	width: 100%;
    margin: 16px auto;
}
.filmIntro>h3{
	font-size: 14px;
	padding-left: 4px;
	font-weight: 100;
	border-left: 16px solid RGB(228, 200, 156);
}
.filmIntro>ul li{
	padding: 15px 0 0 20px;
	box-sizing: border-box;
	font-size: 12px;
}
.filmIntro>ul li i{
	font-style: normal;
	display: inline-block;
	width: 50px;
	text-align-last: justify;
}
#ticket{
    font-size: 14px;
	width: 40%;
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: #fe8233;
    border-radius: 18px;
    color: #fff;
    position: absolute;
    left: 30%;
}
</style>