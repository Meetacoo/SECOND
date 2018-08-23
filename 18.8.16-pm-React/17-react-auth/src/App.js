// import React, { Component } from 'react';
import React, { Component } from 'react';
import Todolist from './pages/todolist';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
// import store from './store';
import './App.css';

class A extends Component {
	render() {
		return (
			<div className="box">
				<p>
					hausfgf
					{this.props.match.params.id}
				</p>
			</div>
		)
	}
}
class Login extends Component {
	render() {
		return (
			<div className="box">
				<h1>
					Component Login
				</h1>
			</div>
		)
	}
}

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			login:true
		}
	}
	render() {
		// console.log('render') 

		const ProtectedRoute = ({ component:Component,...rest })=>(
			<Route {...rest} render={props=>(
				this.state.login
				? (<Component {...props} />)
				: (<Redirect to="/login" />)
			)}
			/>
		)

		return (
			<Router>
				<div className="box">
					<ul>
						<li>
							<Link to="/todolist">Todolist</Link>
						</li>
						<li>
							<Link to="/a">A</Link>
						</li>
						<li>
							<Link to="/b">b-sub</Link>
						</li>
					</ul>

					<Route path="/todolist" component={Todolist} />
					<ProtectedRoute path="/a" component={A} />
					<Route path="/b" render={(route)=>(<h1>bbbbbbb</h1>)} />
					<Route path="/login" component={ Login } />
				</div>
			</Router>
		);
	}
}

export default App;