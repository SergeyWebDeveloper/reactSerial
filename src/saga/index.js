import {takeEvery} from 'redux-saga';

import {
	FETCH_SERIAL_START,
	FETCH_CURRENT_SERIAL_START
} from '../constants';

import {
	fetchSerial,
	fetchCurrentSerial
} from './fetch_serial';

export function* rootSaga() {
	yield takeEvery(FETCH_SERIAL_START,fetchSerial);
	yield takeEvery(FETCH_CURRENT_SERIAL_START,fetchCurrentSerial);
}