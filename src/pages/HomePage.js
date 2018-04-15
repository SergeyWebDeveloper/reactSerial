import React,{PureComponent,Fragment} from 'react';
import { Input } from 'antd';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchSerial} from '../actions';
const Search = Input.Search;

class HomePage extends PureComponent {
	state={
		changeLocation: false
	};
	handleSearchInput = (value) =>{
		this.props.fetchSerial(value);
	};
	componentWillReceiveProps(nextProps){
		if(this.props.serials.mapSerials.length!==nextProps.serials.mapSerials.length){
			this.setState({
				changeLocation: true
			});
		}
	}
	render(){
		return(
			<Fragment>
				<Search
					placeholder="Введите сериал"
					onSearch={this.handleSearchInput}
					enterButton
				/>
				{this.state.changeLocation&&<Redirect to='/catalog-serials' />}
			</Fragment>
		)
	}
}

const mapStateToProps = ({serials}) => {
	return {serials}
};

export default (connect(mapStateToProps,{fetchSerial})(HomePage));