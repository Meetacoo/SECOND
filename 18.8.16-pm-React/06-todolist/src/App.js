import React, { Component } from 'react';
import Item from './Item';
import Test from './Test';
import './App.css'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			value:'',
			list:['one','two']
		}
		this.handleAdd = this.handleAdd.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDel = this.handleDel.bind(this);
	}
	handleAdd(){
		console.log(this.state);
		this.setState((preState)=>({
			list:[...preState.list,preState.value],
			value:''
		}),()=>{
			console.log(this.ul.querySelectorAll('li'))
		})

	}
	handleChange(e){
		console.log(e.target.value);
		console.log(this.state);
		// const value = e.target.value;
		const value = this.input.value;
		this.setState((preState)=>({
			value
		}))
	}
	handleDel(index){
		this.setState((preState)=>{
			const list = [...preState.list];
			list.splice(index,1);
			return{
				list
			}
		})
	}

	getItems(){
		return this.state.list.map((item,index)=>{
			return (	
				<Item 
					key={index} 
					content={item} 
					index={index} 
					test={'hello'} 
					handleDel={this.handleDel}
				/>
			)
		})
	}
	render() {
		console.log('render')
		return (
			<div className="box">
				<input 
					value={this.state.value} 
					onChange={this.handleChange} 
					ref={(input)=>{
						this.input = input;
						console.log("input:::",input)
					}}
				/>
				<button onClick={this.handleAdd} >提交</button>
				<ul ref={(ul)=>{
					this.ul = ul;
					console.log("ul:::",ul)
				}}>
					{
						this.getItems()
					}
				</ul>
				<Test />
			</div>
		);
	}
}

export default App;