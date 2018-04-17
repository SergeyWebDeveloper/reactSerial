import {
	FETCH_SERIAL_FAIL,
	FETCH_SERIAL_SUCCESS,
	FETCH_SERIAL_START,
	FETCH_CURRENT_SERIAL_START,
	FETCH_CURRENT_SERIAL_SUCCESS,
	FETCH_CURRENT_SERIAL_FAIL
} from '../constants';

const initialState = {
	loading: false,
	mapSerials: [],
	currentSerial: {},
	error: {
		status: false,
		message: ''
	}
};

export const serials = (state = initialState, {type, payload}) => {
	switch (type) {
		case FETCH_SERIAL_START:
		case FETCH_CURRENT_SERIAL_START:
			return {
				...state,
				loading: true
			};
		case FETCH_SERIAL_SUCCESS:
			return {
				...state,
				loading: false,
				mapSerials: [...payload],
				error: {
					status: false,
					message: ''
				}
			};
		case FETCH_SERIAL_FAIL:
			return {
				...state,
				loading: false,
				error: {
					status: true,
					message: payload
				}
			};
		case FETCH_CURRENT_SERIAL_SUCCESS:
			return {
				...state,
				loading: false,
				currentSerial: payload
			};
		case FETCH_CURRENT_SERIAL_FAIL:
			return {
				...state,
				loading: false,
				error: {
					status: true,
					message: payload
				}
			};
		default:
			return state;
	}
};