import React,{ Component } from 'react';
class Item extends Component {
	handleDel(){
		console.log(this.props.index)
		// this.props.handleDel(this.props.index)
		this.props.handleDel(this.props.index)
	}
	render() {
		return (
			<li onClick={this.handleDel.bind(this)}>
				{this.props.content}
			</li>
		)
	}
}
export default Item;