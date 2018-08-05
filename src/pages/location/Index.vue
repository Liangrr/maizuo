<template>
<div id="location">
<div class="city_bg">
    <ul class="theme">
    	<li class="zimu" v-for="(itemDetail,keyIndex) in keyDetail">
    		<h3>{{itemDetail}}</h3>
    		<div class="cityName" v-for="(val,valIndex) in valDetail[keyIndex]">
    			{{val}}
    		</div>
    	</li>
    </ul>
</div>
</div>
</template>

<script>
import {getCityData} from '@/services/cityService.js';

export default {
	data(){
		return{
			theme:['GPS定位的城市','热门城市','按字母排序'],
			hotCity:['北京','上海','深圳','广州'],
			keyDetail:[],
			valDetail:[],
		}
	},
	mounted(){
		getCityData().then(result=>{
//			请求得到的数据赋值
			this.keyDetail = result.cityKey;
			this.valDetail = result.cityVal;
		})
	},
}
</script>

<style scoped>
#location{
	position: relative;
}
.city_bg{
	width: 100%;
	min-height: 100%;
	position: absolute;
	top: 50px;
	left: 0;
}

.zimu>h3{
	width: 100%;
	padding-left: 15px;
	box-sizing: border-box;
	height: 40px;
	line-height: 40px;
	overflow: hidden;
}
.cityName{
	text-align: center;
	width: 25%;
	height: 30px;
	line-height: 30px;	
	float: left;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
</style>
