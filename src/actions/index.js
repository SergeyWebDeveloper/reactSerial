import {
	FETCH_SERIAL_START,
	FETCH_CURRENT_SERIAL_START
} from '../constants';


export const fetchSerial = (name) => {
	return {
		type: FETCH_SERIAL_START,
		payload: name
	}
};

export const fetchCurrentSerial = (name) => {
	return{
		type: FETCH_CURRENT_SERIAL_START,
		payload: name
	}
};
