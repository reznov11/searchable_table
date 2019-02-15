import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
	getData: [],
}

export default new Vuex.Store({
	state,
	actions,
	mutations:{
		dataTable (state, data) {
			state.getData = data
		}
	},
})