import React, { Component } from 'react';
// import { DatePicker } from 'antd';
import { Input,Button,Row,Col,List } from 'antd';
import 'antd/dist/antd.css';
import './App.css';


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


class App extends Component {
	render() {
		// console.log('render')
		return (
			<div className="box">
				 <Row>
					<Col span={18} ><Input /> </Col>
					<Col span={6} ><Button type="primary">增加</Button></Col>
				</Row>
				<List
					style={{ marginTop: 10 }}
					bordered
					dataSource={data}
					renderItem={item => (<List.Item>{item}</List.Item>)}
				/>
			</div>
		);
	}
}

export default App;