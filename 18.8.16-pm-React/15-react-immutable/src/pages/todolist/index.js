// import React, { Component } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input,Button,Row,Col,List } from 'antd';
import 'antd/dist/antd.css';
import { actionCreator } from './store'
import './Todolist.css';


class Todolist extends Component {
	render() {
		// console.log('render') 
		return (
			<div className="Todolist">
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
		this.props.handleGetInitData()
	}
}
const mapStateToProps = (state)=>{
	// console.log(state)
	/*return {
		value:state.todolist.get('value'),
		list:state.todolist.get('list')
	}*/
	return {
		value:state.get('todolist').get('value'),
		list:state.get('todolist').get('list')
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		handleChange:(e)=>{
			const action = actionCreator.changeValueAction(e.target.value);
			// console.log(action)
			dispatch(action)
		},
		handleAdd:()=>{
			const action = actionCreator.addItemAction();
			dispatch(action)
		},
		handleDel:(index)=>{
			const action = actionCreator.delItemAction(index);
			dispatch(action)
		},
		handleGetInitData:()=>{
			const action = actionCreator.getInitDataAction();
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);