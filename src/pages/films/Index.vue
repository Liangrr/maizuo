<template>
<page id="films" :onScroll="handlePageScroll" ref='page'>
    <nav class="nav">
        <li v-for="(item, index) in navData" :key="index" 
            @click="selectNav(item.flag)" :class="{active: show==item.flag}">
            {{item.title}}
        </li>
    </nav>
	<div v-show="show=='playing'">
		<film-item v-for="item in playingData" :key='item.id' :data='item' type='playing'></film-item>
	</div>
	<div v-show="show=='coming'">
		<film-item v-for="item in comingData"  :key='item.id' :data='item' type='coming'></film-item>
	</div>
</page>
</template>

<script>
import FilmItem from '@/components/films/index/FilmItem.vue';
import {getComingSoonData,getNowPlayingData} from '@/services/filmService';

export default {
	components:{
		FilmItem
	},
	data(){
		return {
			show: this.$router.history.current.query.flag || 'playing',
			navData:[
				{title:'正在热映',flag:'playing'},
				{title:'即将上映',flag:'coming'}
			],
			
			playingData:[],
			comingData:[],
			playingPage:1,
			comingPage:1,
			count:7,
			canLoadPlaying:true,
			canLoadComing:true,
		}
	},
	methods:{
		selectNav(flag){
			this.show = flag;
		},
		requestPlayingData(){
			this.canLoadPlaying = false;
			getNowPlayingData(this.playingPage,this.count).then(({data,total})=>{
	        	this.playingData = [...this.playingData,...data];
	        	this.$nextTick(()=>{
//	        		滚动容器识别新高度
	        		this.$refs.page.refreshDom();
//	        		页数小于总页数
	        		if (this.playingPage<total) {
		        		this.playingPage++;
	//	        		请求完解锁
		        		this.canLoadPlaying = true;
	        		} else{
//	        			大于的话就锁
	        			this.canLoadPlaying = false;
	        		}
	        	})
	        	
	        })
		},
		requestComingData(){
			this.canLoadComing = false;
			getComingSoonData(this.comingPage,this.count).then(({data,total})=>{
	        	this.comingData = [...this.comingData,...data];
	        	this.$nextTick(()=>{
//	        		滚动容器识别新高度
	        		this.$refs.page.refreshDom();
//	        		页数小于总页数
	        		if (this.comingPage<total) {
		        		this.comingPage++;
	//	        		请求完解锁
		        		this.canLoadComing = true;
	        		} else{
//	        			大于的话就锁
	        			this.canLoadComing = false;
	        		}
	        	})
	        })
		},
		requestData(){
			if (this.show == 'playing' && this.playingData.length<=0 ) {
				this.requestPlayingData();
			}else if(this.show == 'coming' && this.comingData.length<=0 ){
				this.requestComingData();
			}
		},
		//页面的滚动事件
        handlePageScroll(y){
            // 请求下一页数据
            // 位置<50
            // this.show == 'playing' && this.canLoadPlaying  请求正在热映的数据
            // this.show == 'coming' && this.canLoadComing  请求即将上映的数据
            if(y < 50){
                if(this.show ==='playing' && this.canLoadPlaying){
//              	执行方法请求数据
                    this.requestPlayingData();
                }else if(this.show === 'coming' && this.canLoadComing){
//              	执行方法请求数据
                    this.requestComingData();
                }
            }
        }
	},
	watch:{
		show(newOld){
			this.requestData();
		}
	},
	mounted(){
        // 请求数据
        this.requestData();
	},
	activated(){
        //每一次进入页面，都需要判断哪个导航选中
        this.show = this.$router.history.current.query.flag || 'playing';
    }
}
</script>

<style>
#films{
	width: 100%;
	background-color: #f9f9f9;
	padding:0 15px;
	box-sizing: border-box;
}
.nav{
	width: 100%;
	display: flex;
	list-style: none;
}
.nav li{
	height: 46px;
	line-height: 46px;
	flex: 1;
	font-size: 16px;
	text-align: center;
    color: #6a6a6a;
    cursor: pointer;
	border-bottom: 1px solid #f78360;
}
.nav li.active{
	height: 44px;
	line-height: 46px;
	color:#f78360;
	border-bottom: 3px solid #f78360;
}
</style>
