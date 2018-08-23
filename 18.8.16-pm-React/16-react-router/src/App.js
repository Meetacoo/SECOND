// import React, { Component } from 'react';
import React, { Component } from 'react';
import Todolist from './pages/todolist';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
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
	/*render() {
		return (
			<div className="box">
				<p>
					hausfgf
				</p>
				
				<Switch>
					<Route path="/a" component={A} />
					<Route path="/a/:id" component={A} />
				</Switch>
			</div>
		)
	}*/
}

class App extends Component {
	render() {
		// console.log('render') 
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
							<Link to="/a/123">A-prama</Link>
						</li>
						<li>
							<Link to="/a/sub">A-sub</Link>
						</li>
						<li>
							<Link to="/a/456">a-456-id</Link>
						</li>
						<li>
							<Link to="/b/sub">b-sub</Link>
						</li>
					</ul>

					<Route path="/todolist" component={Todolist} />
					<Switch>
						<Route exact path="/a" component={A} />
						<Route path="/a/sub" render={()=>(<h1>a-sub</h1>)} />
						<Route path="/a/:id" render={(route)=>(<h1>a-param-{route.match.params.id}</h1>)} />
					</Switch>
					<Route path="/b/:id" render={(route)=>(<h1>b-param-{route.match.params.id}</h1>)} />
				</div>
			</Router>
		);
	}
}

export default App;