import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

export const NotFound = () => {
	return(
		<Fragment>
			<h1>Страница не найдена.</h1>
			<p>Вернуться <Link to='/'>на главную</Link></p>
		</Fragment>
	)
};