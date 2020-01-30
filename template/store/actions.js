import { request } from '@/store/api.js';

export default {
	getStocksList({ commit }) {
		commit('isLoading', true)
		return request(this.$axios, 'get', 'https://work.setu.co/assignments/stock-ui/stocks').then(response => {
			console.log('u87587897698479')
			console.log(response);
			commit('isLoading', false)
			commit('getStocksList', response);
		}).catch(error => {
			console.log('++++++++++')
			console.log(error.response.status);
		})
	},
	addEmployee({ dispatch }, data) {
		return request(this.$axios, 'post', 'http://dummy.restapiexample.com/api/v1/create', data)
	},
	updateEmployee({ dispatch }, { id, employeeForm }) {
		return request(this.$axios, 'put', `http://dummy.restapiexample.com/api/v1/update/${id}`, employeeForm)
	},
	deleteEmployee({ dispatch }, id) {
		return request(this.$axios, 'delete', `http://dummy.restapiexample.com/api/v1/delete/${id}`)
	}
}