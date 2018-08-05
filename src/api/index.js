/*
接口功能：即将上映的电影
接口参数：__t:时间戳 
        page: 请求页面
        count:请求个数
*/
const COMING_SOON_API = '/v4/api/film/coming-soon';
/*
接口功能：正在热映的电影
接口参数：__t:时间戳 
        page: 请求页面
        count:请求个数
*/
const NOW_PLAYING_API = '/v4/api/film/now-playing';
/*
接口功能：轮播图
接口参数：__t:时间戳 
        page: 请求页面
        count:请求个数
*/
const BANNER_API = '/v4/api/billboard/home';
/*
接口功能：影院地址
接口参数：__t:时间戳 
*/
const CINEMAS_API = '/v4/api/cinema';
/*
接口功能：城市地址
接口参数：__t:时间戳 
*/
const CITY_API = '/v4/api/city';

/*
接口功能：电影所有详情
接口参数：__t:时间戳 
*/
const FILMS_API = '/v4/api/film';

export default {
	COMING_SOON_API,
	NOW_PLAYING_API,
	BANNER_API,
	CINEMAS_API,
	CITY_API,
	FILMS_API
}
