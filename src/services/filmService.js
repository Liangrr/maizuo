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

//请求所有电影数据,电影详情页用到
export function getFilmsData(filmId){
return new Promise((resolve, reject)=>{
    //发送请求
    axios.get(API.FILMS_API+'/'+filmId, {
//  axios.get(API.FILMS_API+'/4280', {
        params: {
            __t: new Date().getTime(),
        }
    })
    .then(response=>{
        //处理请求成功的数据
        let film = response.data.data.film;
//      单个数据不需要循环遍历
        let data = {
//          	图片,导演,主演，地区，语言，上映时间，简介,
				cover: film.cover.origin,
            	director:film.director,
            	actors:film.actors,
            	nation:film.nation,
            	language:film.language,
            	premiereAt:film.premiereAt,
            	synopsis:film.synopsis,         
            	name: film.name, //名字备用
                poster:film.poster.origin,//竖图备用
		}
        resolve(data);
    })
    .catch(error=>{
        console.log('失败');
    })
}); 
}