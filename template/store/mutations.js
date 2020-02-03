export default {
	getStocksList(state, stockList) {
		state.stockList = stockList;
	},
	getPortfolio(state, portfolio) {
		state.portfolio = portfolio;
	},
	isLoading(state, isLoading) {
		state.isLoading = isLoading;
	},
	toggleDrawer(state) {
		state.drawer = !state.drawer
	},
	drawer(state, val) {
		state.drawer = val
	}
}