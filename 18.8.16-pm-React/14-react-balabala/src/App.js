// import React, { Component } from 'react';
import React, { Component } from 'react';
import Todolist from './pages/todolist'
// import store from './store';
import './App.css';


class App extends Component {
	render() {
		// console.log('render') 
		return (
			<div className="box">
				<Todolist />
			</div>
		);
	}
}

export default App;