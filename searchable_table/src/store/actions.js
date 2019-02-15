import * as api from '../api'

export const getData = ({ commit }) => {
    api.getData(data => {
        commit('dataTable', data.default)
    })
}