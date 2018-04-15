import {takeEvery} from 'redux-saga';

import {FETCH_SERIAL_START} from '../constants';

import {fetchSerial} from './fetch_serial';

export function* rootSaga() {
	yield takeEvery(FETCH_SERIAL_START,fetchSerial);
}