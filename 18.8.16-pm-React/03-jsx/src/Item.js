import React,{ Component } from 'react';
class Item extends Component {
	render() {
		return (
			<li >
				{this.props.content}
			</li>
		)
	}
}
export default Item;