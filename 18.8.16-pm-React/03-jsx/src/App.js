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
		// console.log(list.splice(index,1));
		// console.log(list.splice(index));
		list.splice(index,2);
		// list.splice(index);
		// this.state.list = list;
		this.setState({
			list:list
		})
	}
	render() {

		return (
			/*
				<Fragment>
					<input />
					<button>提交</button>
				</Fragment>
				
				<div style={{background:"orange"}}>
					<input />
					<button>提交</button>
				</div>

				<div className="box">
					<input />
					<button>提交</button>
				</div>
				<div className="box">
					<input value={this.state.value} onChange={this.handleChange.bind(this)} />
					<button onClick={this.handleAdd.bind(this)} >提交</button>
					<ul>
						<li>one</li>
						<li>two</li>
					</ul>
				</div>
			*/
			<div className="box">
				<input value={this.state.value} onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleAdd.bind(this)} >提交</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return (
								<li 
								key={index} 
								onClick={this.handleDel.bind(this,index)}
								>
								{item}
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default App;
