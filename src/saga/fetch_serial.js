import {call,put} from 'redux-saga/effects';
import {
	fetchApiSerial,
	fetchApiCurrentSerial
} from '../api';
import {
	FETCH_SERIAL_SUCCESS,
	FETCH_SERIAL_FAIL,
	FETCH_CURRENT_SERIAL_SUCCESS,
	FETCH_CURRENT_SERIAL_FAIL
} from '../constants';

export function* fetchSerial(action) {
	const {data} = yield call(fetchApiSerial,action.payload);
	if(data.length){
		yield put({
			type: FETCH_SERIAL_SUCCESS,
			payload: data
		});
	} else {
		yield put({
			type: FETCH_SERIAL_FAIL,
			error: {
				status: true,
				message: 'Результатов нет, попробуйте еще...'
			}
		})
	}
}

export function* fetchCurrentSerial(action) {
	const {data} = yield call(fetchApiCurrentSerial,action.payload);
	if(Object.keys(data).length){
		yield put({
			type: FETCH_CURRENT_SERIAL_SUCCESS,
			payload: data
		});
	} else {
		yield put({
			type: FETCH_CURRENT_SERIAL_FAIL,
			payload: 'Ошибка загрузки сериала'
		});
	}
}