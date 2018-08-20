import React, { Component } from 'react';
import store from './store'
// import { DatePicker } from 'antd';
import { Input,Button,Row,Col,List } from 'antd';
import 'antd/dist/antd.css';
import './App.css';


class App extends Component {
	constructor(props){
		super(props);
		/*this.state = {
			value:'',
			list:['aaa','bbb']
		}*/
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		// this.state = store
		this.state = store.getState()
		// console.log(store)
		store.subscribe(() =>{
			console.log(store.getState())
			this.setState(store.getState())
		})
	}

	handleChange(e){
		const action = {
			type:'change_value',
			payload:e.target.value
		}
		store.dispatch(action);
	}

	handleAdd(e){
		const action = {
			type:'add_value'
		}
		store.dispatch(action);
	}

	handleDel(item){
		console.log('this.item:::',item)
		const action = {
			type:'del_value',
			payload:item
		}
		store.dispatch(action);
	}
	render() {
		// console.log('render')
		return (
			<div className="box">
				 <Row>
					<Col span={18} >
						<Input 
							value={this.state.value} 
							onChange={this.handleChange}
						/> 
					</Col>
					<Col span={6} >
						<Button 
							type="primary" 
							onClick={this.handleAdd}
						>
							增加
						</Button>
					</Col>
				</Row>
				<List
					style={{ marginTop: 10 }}
					bordered
					dataSource={this.state.list}
					renderItem={(item,index) => (<List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)}
				/>
			</div>
		);
	}
}

export default App;