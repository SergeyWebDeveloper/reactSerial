import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {serials} from './serials';

export const reducers = combineReducers({
	router: routerReducer,
	serials
});
