const axios = require('axios');
const qs = require('qs');
const { URL } = require('../config/api_url_config');

axios.defaults.timeout = 15000;           //超时时间
axios.defaults.retry = 3;                 //请求次数
axios.defaults.retryDelay = 1000;         //请求间隙

export default class HTTP {
	axiosPost (options) {
		axios({
			url: URL.API_BASE_URL + options.url,
			method: 'POST',
			data: options.data
		}).then((res) => {
			options.success(res);
		}).catch((err) => {
			options.error(err);
		})
	}
	axiosGet (options) {
		let url = URL.API_BASE_URL + options.url;
		if (options.data) {
			url += "?"+ qs.stringify(options.data);
		}
		axios(url)
		.then((res) => {
			options.success(res);
		}).catch((err) => {
			options.error(err);
		})
	}
}