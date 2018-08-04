<template>
<div id="location" class="page">
    <h1>定位</h1>
</div>
</template>

<script>
import {getCityData} from '@/services/cityService.js';

export default {
	data(){
		return{
			cityData:[],
		}
	},
	mounted(){
		getCityData().then(result=>{
			console.log(result)
			this.cityData = result;
		})
	}
}
</script>

<style>

</style>
