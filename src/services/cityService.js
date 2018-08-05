import axios from 'axios';
import API from '@/api';

export function getCityData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.CITY_API,{
			params:{
				__t:new Date().getTime(),
			}
		}).then(response=>{
			let cities = response.data.data.cities;
		  	let citiesMap = {};
		  	let keyArr = [];
		  	let valArr = [];
		  	let obj = {};
//		  	遍历数据,把城市放到对应字母的数组里
		  	cities.map(item=>{
	    		let letter = item.pinyin[0];
		    	if(!citiesMap[letter]){
		      		citiesMap[letter] = [];
		    	}
		    	
		    	citiesMap[letter].push(item.name);
		 	 })
//		  	因为对象是无序的,把他放到数组里，有序
			for(let i in citiesMap){
				keyArr.push(i);
				valArr.push(citiesMap[i])
			}
//			冒泡排序将key和val排好
			for(let j=0;j<keyArr.length;j++){
				for(let k=j+1;k<keyArr.length;k++){
					if(keyArr[j]>keyArr[k]){
						let midkey = keyArr[j];
						keyArr[j] = keyArr[k];
						keyArr[k] = midkey;
						let midval = valArr[j];
						valArr[j] = valArr[k];
						valArr[k] = midval;
					}
				}
			}
//			赋给obj
			obj['cityKey'] = keyArr;
			obj['cityVal'] = valArr;
			resolve(obj);
		}).catch(error=>{
			console.log('失败')
		})
	})
}