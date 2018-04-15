import React from 'react';
import {Route,Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CatalogSerials from '../pages/CatalogSerials';

export const Routing = () => {
	return(
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/catalog' component={CatalogSerials} />
			<Route path='/catalog/:name' component={()=>'Children'}/>
		</Switch>
	)
};