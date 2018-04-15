import React,{PureComponent} from 'react';
import { Input } from 'antd';
import {connect} from 'react-redux';
import {fetchSerial} from '../actions';
const Search = Input.Search;

class HomePage extends PureComponent {
	handleSearchInput = (value) =>{
		console.log(value);
		// history.push('/catalog-serials');
		this.props.fetchSerial(value);
	};
	render(){
		return(
			<Search
				placeholder="Введите сериал"
				onSearch={this.handleSearchInput}
				enterButton
			/>
		)
	}
}

export default connect(null,{fetchSerial})(HomePage);