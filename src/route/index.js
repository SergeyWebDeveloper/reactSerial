import React from 'react';
import {Route,Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';

export const Routing = () => {
	return(
		<Switch>
			<Route exact={true} path='/' component={HomePage} />
		</Switch>
	)
};