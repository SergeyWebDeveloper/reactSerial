import axios from 'axios';

const URL = 'http://api.tvmaze.com/search/shows?q=';

export const fetchApiSerial = (name) => {
	return axios.get(`${URL}${name}`);
};