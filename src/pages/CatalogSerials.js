import React,{PureComponent,Fragment} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {CurrentSerial} from './CurrentSerial';


class CatalogSerials extends PureComponent {
	renderSerialItem = () => {
		return _.map(this.props.serials.mapSerials,(item)=>{
			return <CurrentSerial urlParent={this.props.match.url} key={item.show.id} info={item} />
		});
	};
	render(){
		return(
			<Fragment>
				{this.renderSerialItem()}
			</Fragment>
		)
	}
}

const mapStateToProps = ({serials}) => {
	return {serials}
};

export default connect(mapStateToProps,null)(CatalogSerials);
