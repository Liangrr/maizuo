<template>
<div id="cinema" class="page" ref="page">
	<ul>
        <li v-for="(value, key) in cinemaData" :key="key">
            <p class="title" @click="showCinemas(key)">{{key}}</p>
            <ul v-if="value.show" v-once>
                <li class="cinema" v-for="item in value.data" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </li>
    </ul>
</div>
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
			console.log(result)
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
    border-radius: 5px;
    padding: 10px 0 12px 16px;
    cursor: pointer;
}
</style>
