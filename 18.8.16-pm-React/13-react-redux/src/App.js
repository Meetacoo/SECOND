// import React, { Component } from 'react';
import React, { Component } from 'react';
// import store from './store';
import { connect } from 'react-redux';
import { changeValueAction,addItemAction,delItemAction,getInitDataAction } from './store/actionCreator.js';
import { Input,Button,Row,Col,List } from 'antd';
import 'antd/dist/antd.css';
import './App.css';


class App extends Component {
	render() {
		// console.log('render')
		return (
			<div className="box">
				 <Row>
					<Col span={18} >
						<Input 
							value={this.props.value} 
							onChange={this.props.handleChange}
						/> 
					</Col>
					<Col span={6} >
						<Button 
							type="primary"
							onClick={this.props.handleAdd}
						>
							增加
						</Button>
					</Col>
				</Row>
				<List
					style={{ marginTop: 10 }}
					bordered
					dataSource={this.props.list}
					renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDel(index)}}>{item}</List.Item>)}
				/>
			</div>
		);
	}
	componentDidMount(){
		// this.props.handleGetInitData()
	}
}
const mapStateToProps = (state)=>{
	// console.log(state)
	return {
		value:state.value,
		list:state.list
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		handleChange:(e)=>{
			const action = changeValueAction(e.target.value);
			// console.log(action)
			dispatch(action)
		},
		handleAdd:()=>{
			const action = addItemAction();
			dispatch(action)
		},
		handleDel:(index)=>{
			const action = delItemAction(index);
			dispatch(action)
		},
		handleGetInitData:()=>{
			const action = getInitDataAction();
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);