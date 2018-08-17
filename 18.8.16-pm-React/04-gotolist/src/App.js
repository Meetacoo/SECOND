import React, { Component } from 'react';
import Item from './Item';
import './App.css'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			value:'',
			list:['one','two']
		}
	}
	handleAdd(){
		console.log(this.state)
		this.setState({
			list:[...this.state.list,this.state.value],
			value:''
		})
	}
	handleChange(e){
		console.log(e.target.value);
		console.log(this.state);
		this.setState({
			value:e.target.value
		})
	}
	handleDel(index){
		// console.log(index);
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState({
			list:list
		})
	}
	render() {

		return (
			<div className="box">
				<input value={this.state.value} onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleAdd.bind(this)} >提交</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return (	
								<Item 
									key={index} 
									content={item} 
									// index={index} 
									handleDel={this.handleDel.bind(this)}
								/>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default App;
