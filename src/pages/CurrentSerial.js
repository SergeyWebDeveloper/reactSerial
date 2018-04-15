import React from 'react';
import {Col, Card} from 'antd';
import {Link} from 'react-router-dom';

const imageNotFound = 'http://cdn33.printdirect.ru/cache/product/9f/0d/4796990/tov/all/480z480_front_22_0_0_0_af04848715154fddafd84b6d1268.jpg?rnd=1371225321';

export const CurrentSerial = ({info,urlParent}) => {
	const {genres, image, name, type, id} = info.show;
	const nameLink = name.split(' ').join('-');
	return (
		<Col span={8} style={{padding: '0 15px'}}>
			<Card title={`Название: ${name}`} bordered={true} style={{minHeight: '230px', marginBottom: '15px'}}>
				<div style={{minHeight: '60px'}}>
					{genres.length ? <p>Жанр: {genres.join(' ')}</p> : null}
					<p>Тип: {type}</p>
				</div>
				<p><img src={image === null ? imageNotFound : image.medium} alt={name} height={150}/></p>
				<p>
					<Link
						className='ant-btn ant-btn-primary'
						id={id}
						to={`${urlParent}/${nameLink}`}
					>
					Подробнее
				</Link>
				</p>
			</Card>
		</Col>
	)
};