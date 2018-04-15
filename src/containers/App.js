import React, {Component} from 'react';
import {Routing} from '../route';
import {Row, Col} from 'antd';

class App extends Component {
	render() {
		return (
			<div className='container__app' style={{padding: '15px'}}>
				<Row>
					<Col span={24}>
						<Routing/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default App;