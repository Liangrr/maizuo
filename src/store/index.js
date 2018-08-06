import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	title:'瑞影',
	city:'深圳',
	filmId:'',
};
const mutations = {
//	传进来标题
	changeTitle(state,title){
		state.title = title;
	},
//	传进来城市
	changeCity(state,city){
		state.city = city;
	},
//	传进来电影id
	changeFilmId(state,id){
		state.filmId = id;
	}
}


const store = new Vuex.Store({
	state,
	mutations
});

export default store;
