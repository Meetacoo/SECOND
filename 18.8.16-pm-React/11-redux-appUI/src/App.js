import React, { Component } from 'react';
import store from './store'
// import { DatePicker } from 'antd';
import { Input,Button,Row,Col,List } from 'antd';
// import { CHANGE_VALUE,ADD_ITEM,DEL_ITEM } from './store/actionTypes.js'
import { changeValueAction,addItemAction,delItemAction } from './store/actionCreator.js';
import AppUI from './AppUI.js';
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
		this.handleDel = this.handleDel.bind(this);
		// this.state = store;
		this.state = store.getState();
		// console.log(store);
		store.subscribe(() =>{
			console.log(store.getState());
			this.setState(store.getState());
		})
	}

	handleChange(e){
		const action = changeValueAction(e.target.value);
		store.dispatch(action);
	}

	handleAdd(e){
		const action = addItemAction();
		store.dispatch(action);
	}

	handleDel(index){
		console.log('this.index:::',index);
		const action = delItemAction(index);
		store.dispatch(action);
	}
	render() {
		return (
			<AppUI 
				value = {this.state.value} 
				list = {this.state.list} 
				handleChange = {this.handleChange} 
				handleAdd = {this.handleAdd} 
				handleDel = {this.handleDel} 
			/>
		);
	}
}

export default App;