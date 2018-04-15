import {FETCH_SERIAL_START} from '../constants';


export const fetchSerial = (name) => {
	return {
		type: FETCH_SERIAL_START,
		payload: name
	}
};