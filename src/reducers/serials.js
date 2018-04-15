import {
	FETCH_SERIAL_FAIL,
	FETCH_SERIAL_SUCCESS,
	FETCH_SERIAL_START
} from '../constants';

const initialState = {
	loading: false,
	mapSerials: [],
	error: {
		status: false,
		message: ''
	}
};
export const serials = (state = initialState, {type, payload}) => {
	switch (type) {
		case FETCH_SERIAL_START:
			return {
				...state,
				loading: true
			};
		case FETCH_SERIAL_SUCCESS:
			return {
				...state,
				loading: false,
				mapSerials: [...payload,...state.mapSerials],
				error: {
					status: false,
					message: ''
				}
			};
		case FETCH_SERIAL_FAIL:
			return {
				...state,
				error: {
					status: true,
					message: payload
				}
			};
		default:
			return state;
	}
};