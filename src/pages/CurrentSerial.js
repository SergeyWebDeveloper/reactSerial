import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Spin} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchCurrentSerial} from '../actions';
import {imageNotFound} from './ItemSerial';


class CurrentSerial extends PureComponent {
	componentDidMount() {
		this.props.fetchCurrentSerial(this.props.match.params.name);
	};

	renderSerial = () => {
		const {serial} = this.props;
		return (
			<ul style={{listStyleType: 'none'}}>
				{serial.name ?
					<li>Название: {serial.name}</li> : null}
				{serial.genres.length > 0 ?
					<li>Жанр: {serial.genres.join(',')}</li> : null}
				<li><img src={serial.image ? serial.image.medium : imageNotFound} alt={serial.name}/></li>
				{serial.premiered ?
					<li>Премьера: {serial.premiered}</li> : null}
				{serial.url ?
					<li><a className='ant-btn ant-btn-primary' href={serial.url} target='_blank'>Ссылка на сериал</a></li> : null}
				<li><Link to={`/${this.props.location.pathname.split('/')[1]}`} className='ant-btn ant-btn-primary'>Назад</Link></li>
			</ul>
		)
	};

	renderErrorMessage = () => {
		return(
			<h1>{this.props.error.message}</h1>
		)
	};

	render() {
		return (
			<Row>
				<Col span={24}>
					{this.props.loading ? <Spin size='large'/> : null}
					{Object.keys(this.props.serial).length > 0 ? this.renderSerial() : null}
					{this.props.error.status&&this.renderErrorMessage()}
				</Col>
			</Row>
		)
	}
};

const mapStateToProps = ({serials}) => {
	return {
		serial: serials.currentSerial,
		loading: serials.loading,
		error: serials.error
	}
};

CurrentSerial.propTypes = {
	serial: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.object
};

export default connect(mapStateToProps, {fetchCurrentSerial})(CurrentSerial);