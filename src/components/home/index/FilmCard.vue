<template>
	<div class="filmcard" @click="filmDetailAction(filmId)">
		<img :src="data.cover"/>
		<div class="row" v-if="type==='playing'">
			<h3>{{data.name}}</h3>
			<p v-if="type==='playing'">{{data.cinemaCount}}家影院上映&nbsp;{{data.watchCount}}人购票</p>
			<b class="sorce" v-if="type==='playing'">{{data.grade}}</b>
		</div>
		
		<div class="row2" v-if="type==='coming'">
			<h3>{{data.name}}</h3>
			<b class="date" v-if="type==='coming'">{{data.premiereAt | format-date}}</b>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			data:Object,
			type:String,
//			点击哪部电影传进来的ID
			filmId:Number,
		},
		methods:{
			filmDetailAction(fid){
				this.$router.push(
					{path: '/filmDetail'}
	           	);
//	           	把电影id存进vuex
	           	this.$store.commit('changeFilmId',fid)
			},
		},
	}
</script>

<style>
.filmcard{
	width: 100%;
	padding:20px 20px 0 20px;
	box-sizing: border-box;
	position: relative;
	background-color: #ebebeb;
}
.row,.row2{
	height: 40px;
	padding-left: 28px;
	padding-top: 13px;
	background-color: white;
	position: relative;
}
.row2{
	height: 20px;
	padding-top: 10px;
}
.row  h3,.row2  h3{
    font-size: 12px;
    line-height: 15px;
}
.row p{
	line-height: 15px;
	color: #9a9a9a;
    font-size: 12px;
}
.row .sorce{
	line-height: 50px;
    color: #f78360;
    font-size: 18px;
    position: absolute;
    top: 2px;
    right: 15px;
}
.row2 .date{
    color: #f78360;
	font-size: 12px;
	position: absolute;
	top: 7px;
	right: 20px;
}
</style>