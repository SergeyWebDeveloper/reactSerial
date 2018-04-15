import React, {PureComponent} from 'react';
import {Routing} from '../route';
import {Row, Col} from 'antd';

class App extends PureComponent {
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