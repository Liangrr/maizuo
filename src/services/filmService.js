import axios from 'axios';
import API from '../api/index.js';


//轮播图
export function getBannerData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.BANNER_API,{
			params:{
				__t: new Date().getTime(),
			}
		})
		.then(response=>{
			//处理请求成功的数据
	        let data = response.data.data.billboards.map(item=>{
	            return {
	                id:item.id,
	                imageUrl:item.imageUrl
	            }
	        })
	        resolve(data);
		})
		.catch(error=>{
        	console.log('失败');
    	})
	})
}

//正在热映的电影
export function getNowPlayingData(page,count){
	return new Promise((resolve,reject)=>{
		axios.get(API.NOW_PLAYING_API,{
			params:{
				__t: new Date().getTime(),
	            page,
	            count
			}
		})
		.then(response=>{
			//处理请求成功的数据
//			console.log(response)
	        let data = response.data.data.films.map(item=>{
	            return {
	                name: item.name,
	                id: item.id,
	                cover: item.cover.origin,
	                cinemaCount: item.cinemaCount,
	                watchCount: item.watchCount,
	                grade: item.grade,
	                poster:item.poster.origin,
	                intro:item.intro,
	            }
	        })
	        resolve({data,total:response.data.data.page.total});
		})
		.catch(error=>{
        	console.log('失败');
    	})
	})
}

//即将上映的电影
export function getComingSoonData(page,count){
return new Promise((resolve, reject)=>{
    //发送请求
    axios.get(API.COMING_SOON_API, {
        params: {
            __t: new Date().getTime(),
            page,
            count
        }
    })
    .then(response=>{
        //处理请求成功的数据
        let data = response.data.data.films.map(item=>{
            return {
                name: item.name,
                id: item.id,
                cover: item.cover.origin,
                premiereAt:item.premiereAt,
                poster:item.poster.origin,
                intro:item.intro,
            }
        })
        resolve({data,total:response.data.data.page.total});
    })
    .catch(error=>{
        console.log('失败');
    })
}); 
}
