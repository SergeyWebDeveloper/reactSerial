import React,{Component,Fragment} from 'react';
import { Input } from 'antd';
import {Redirect} from 'react-router-dom';
const Search = Input.Search;

class HomePage extends Component {
	state={
		changeLocation: false,
		value: ''
	};
	handleSearchInput = (value) =>{
		if(value.trim().length){
			this.setState({
				value,
				changeLocation: true
			});
		}
	};
	render(){
		return(
			<Fragment>
				<Search
					placeholder="Введите сериал"
					onSearch={this.handleSearchInput}
					enterButton
				/>
				{this.state.changeLocation&&<Redirect to='/catalog' />}
				{this.state.changeLocation&&localStorage.setItem('query',this.state.value)}
			</Fragment>
		)
	}
}

export default HomePage;