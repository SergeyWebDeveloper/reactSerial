import React,{PureComponent,Fragment} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {ItemSerial} from './ItemSerial';


class CatalogSerials extends PureComponent {
	renderSerialItem = () => {
		return _.map(this.props.serials.mapSerials,(item)=>{
			return <ItemSerial urlParent={this.props.match.url} key={item.show.id} info={item} />
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
