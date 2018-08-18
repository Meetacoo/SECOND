import React,{ Component } from 'react';
import PropTypes from 'prop-types'
class Item extends Component {
	constructor(props){
		super(props);
		this.handleDel = this.handleDel.bind(this);
	}
	handleDel(){
		// console.log(this.props.index)
		// this.props.handleDel(this.props.index)
		// this.props.handleDel(this.props.index)
		const { handleDel,index } = this.props;
		handleDel(index);
	}
	render() {
		return (
			<li onClick={this.handleDel}>
				{this.props.content}
			</li>
		)
	}
}

export default Item;