import { request } from '@/store/api.js';
import { getPortFolioData } from '@/util/index.js';

export default {
	getStocksList({ commit }) {
		return request(this.$axios, 'get', 'https://work.setu.co/assignments/stock-ui/stocks').then(response => {
			commit('getStocksList', response);
		}).catch(() => { })
	},
	async getPortfolio({ commit }) {
		const res = await getPortFolioData(this.$axios)
		commit('getPortfolio', res)
	},
	buyStocks({ dispatch }, data) {
		return request(this.$axios, 'post', 'https://work.setu.co/assignments/stock-ui/admin/buy', data)
	},
	sellStocks({ dispatch }, data) {
		return request(this.$axios, 'post', 'https://work.setu.co/assignments/stock-ui/admin/sell', data)
	},
}