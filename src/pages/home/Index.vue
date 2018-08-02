<template>
<div id="home" class="page">
    <Banner :data='bannerData'/>
    
    <div class="new_playing">
    	<Film-card v-for='item in playingData' :key='item.id' :data='item' type='playing'/>
    </div>
	<div class="more_button" @click="goFilm('playing')">更多热映电影</div>
	
	<div class="coming_soon">
		<Film-card v-for='item in comingData' :key='item.id' :data='item' type='coming'/>
	</div>
	<div class="more_button" @click="goFilm('coming')">更多即将上映电影</div>
	
</div>
</template>

<script>
import Banner from '@/components/home/index/Banner.vue';
import FilmCard from '@/components/home/index/FilmCard.vue';
import {getComingSoonData,getNowPlayingData,getBannerData} from '../../services/filmService';

export default {
	components:{
		Banner,
		FilmCard
	},
	data(){
		return {
			bannerData:[],
			playingData:[],
			comingData:[],
		}
	},
	methods:{
		goFilm(flag){
			this.$router.push(
                {path: '/films', query: {flag}}
            );
		}
	},
    mounted(){
        // 请求轮播图的数据
        // 请求正在热映电影的数据
        // 请求即将上映电影的数据
        getBannerData().then(result=>{
        	this.bannerData = result;
        }),
        getComingSoonData(1,2).then(({data})=>{
        	this.comingData = data;
        })
        ,
        getNowPlayingData(1,2).then(({data})=>{
        	this.playingData = data;
        })

    }
}
</script>

<style>
.more_button{
    width: 50%;
    height: 30px;
    border-radius: 20px;
    border: 1px solid #ddd;
    text-align: center;
    line-height: 30px;
    margin: 20px auto;
    color: #333;
    font-size: 12px;
}
</style>
