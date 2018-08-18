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
		const { content,test } = this.props;
		return (
			<li onClick={this.handleDel}>
				{test}-{ content }
			</li>
		)
	}
}
// 引入的 import PropTypes from 'prop-types'
// Item 上有 propTypes 此属性，用于校验
Item.propTypes = {
	index:PropTypes.number.isRequired,
	content:PropTypes.string.isRequired,
	handleDel:PropTypes.func.isRequired,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
	test:PropTypes.string.isRequired
}
// 默认值
// 如果 App.js 不传，则用这个
Item.defaultProps = {
	test:'test'
}
export default Item;