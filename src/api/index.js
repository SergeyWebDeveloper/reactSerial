import axios from 'axios';

const URL = 'https://api.tvmaze.com/search/shows?q=';
const URL_NAME = 'https://api.tvmaze.com/singlesearch/shows?q=';

export const fetchApiSerial = (name) => {
	return axios.get(`${URL}${name}`);
};

export const fetchApiCurrentSerial = (name) => {
	return axios.get(`${URL_NAME}${name}`)
		.catch(()=>{
			return {
				data: {}
			}
		})
};