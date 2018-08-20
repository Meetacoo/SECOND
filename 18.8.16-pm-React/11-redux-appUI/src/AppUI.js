import React, { Component } from 'react';
import { Input,Button,Row,Col,List } from 'antd';

/*class AppUI extends Component {
	render() {
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
}*/
const AppUI = (props)=>{
	return (
		<div className="box">
			<Row>
				<Col span={18} >
					<Input 
						value={props.value} 
						onChange={props.handleChange}
					/> 
				</Col>
				<Col span={6} >
					<Button 
						type="primary" 
						onClick={props.handleAdd}
					>
						增加
					</Button>
				</Col>
			</Row>
			<List
				style={{ marginTop: 10 }}
				bordered
				dataSource={props.list}
				renderItem={(item,index) => (<List.Item onClick={()=>{props.handleDel(index)}}>{item}</List.Item>)}
			/>
		</div>
	)
}

export default AppUI;