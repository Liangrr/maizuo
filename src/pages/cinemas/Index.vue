<template>
<page id="cinema" class="page" ref="page">
	<ul>
        <li v-for="(value, key) in cinemaData" :key="key">
            <p class="title" @click="showCinemas(key)">{{key}}</p>
            <ul v-if="value.show" v-once>
                <li class="cinema" v-for="item in value.data" :key="item.id">
                    <div class="cinema_title">
	                    <h4>{{item.name}}</h4>
	                    <p>{{item.address}}</p>
	                    <p>{{item.geocode}}</p>
                    </div>
                    <i class="iconfont icon-youjiantou"></i>
                </li>
            </ul>
        </li>
    </ul>
</page>
</template>

<script>
import {getCinemaListData} from '@/services/cinemaService.js';
	
export default {
	data(){
		return{
			cinemaData:[],
		}
	},
	methods:{
		showCinemas(key){
			let value = this.cinemaData[key];
			value.show = !value.show;
			//识别到新高度
            this.$nextTick(()=>{
                this.$refs.page.refreshDom();
            })
		}
	},
	mounted(){
		getCinemaListData().then(result=>{
			this.cinemaData = result;
		})
	}

}
</script>

<style scoped="scoped">
.title{
	height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 16px;
    background: #e1e1e1;
    margin-bottom: 1px;
    color: #636363;
    cursor: pointer;
}
.cinema {
	width: 100%;
	height: 70px;
	background-color: #fff;
    padding: 10px 0 12px 16px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.cinema_title{
	width: 70%;
}
.cinema h4,.cinema p{
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.cinema h4{
	width: 90%;
	font-weight: 600;
	color: black;
	font-size: 14px;
	opacity: 0.6;
}
.cinema p{
	font-size: 12px;
	height: 26px;
	line-height: 26px;
	width: 100%;
    color: #ccc;
}
.cinema i.iconfont{
	font-size: 36px;
	position: absolute;
	right: 30px;
	top: 2px;
}
</style>
