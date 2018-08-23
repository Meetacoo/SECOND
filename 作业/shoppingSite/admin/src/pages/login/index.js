// import React, { Component } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Input,Button,Row,Col,List } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { actionCreator } from './store'
import './index.css';
const FormItem = Form.Item;


class Login extends Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	handleSubmit(e) {
	e.preventDefault();
	this.props.form.validateFields((err, values) => {
		if (!err) {
			console.log('Received values of form: ', values);
		}
	});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="Login">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
						{getFieldDecorator('userName', {
							rules: [{ required: true, message: '请输入用户名!' },{pattern:/^[a-zA-Z0-9_-]{4,16}$/,message:'4到16位（字母，数字，下划线，减号）'}],
						})(
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: '请输入密码!' },{pattern:/^[a-zA-Z0-9_-]{4,16}$/,message:'4到16位（字母，数字，下划线，减号）'}],
						})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
						)}
					</FormItem>
					<FormItem>
						<Button type="primary" onClick={this.handleSubmit} className="login-form-button">
							Log in
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
	
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;