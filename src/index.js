import 'antd/dist/antd.css';

import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import {rootSaga} from './saga';
import {reducers} from './reducers';
import App from './containers/App';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middlewareRouter = routerMiddleware(history);

const store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(middlewareRouter,sagaMiddleware)
	));

sagaMiddleware.run(rootSaga);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Router>
				<App/>
			</Router>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);