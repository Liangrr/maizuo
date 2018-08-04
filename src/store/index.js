import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	title:'瑞影',
	city:'深圳'
};
const mutations = {
	changeTitle(state,params){
		state.title = params;
	},
	changeCity(state,params){
		state.city = params;
	}
}


const store = new Vuex.Store({
	state,
	mutations
});

export default store;
