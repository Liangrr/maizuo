<template>
<div id="home" class="page">
    <Banner :data='bannerData'/>
    
    <div class="new_playing">
    	<Film-card v-for='item in playingData' :key='item.id' :data='item' type='playing'/>
    </div>
	
	
	<div class="coming_soon">
		<Film-card v-for='item in comingData' :key='item.id' :data='item' type='coming'/>
	</div>
	
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
    mounted(){
        // 请求轮播图的数据
        // 请求正在热映电影的数据
        // 请求即将上映电影的数据
        getBannerData().then(result=>{
        	this.bannerData = result;
        }),
        getComingSoonData().then(result=>{
        	this.comingData = result;
//          console.log(result);
        })
        ,
        getNowPlayingData().then(result=>{
        	this.playingData = result;
//          console.log(result);
        })

    }
}
</script>

<style>

</style>
