import axios from 'axios';
import API from '@/api';

export function getCityData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.CITY_API,{
			params:{
				__t:new Date().getTime(),
			}
		}).then(response=>{
			let city = response.data.data.cities;
			
//			let cinemaArr = response.data.data.cinemas;
//			let cinemaMap = {};
//			cinemaArr.map(item=>{
//				let name = item.district.name;
//				if(!cinemaMap[name]){
//					cinemaMap[name] = {
//						show:false,
//						data:[]
//					}
//				}
//				cinemaMap[name].data.push(item);
//			})
			resolve(city);
		}).catch(error=>{
			console.log('失败')
		})
	})
}