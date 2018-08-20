import React,{ Component } from 'react';
import PropTypes from 'prop-types'
class Item extends Component {
	constructor(props){
		super(props);
		this.handleDel = this.handleDel.bind(this);
	}
	/*static getDerivedStateFromProps(nextProps, prevState){
		console.log('Item getDerivedStateFromProps',nextProps, prevState)
		return {};
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('Item shouldComponentUpdate',nextProps, nextState)
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('Item getSnapshotBeforeUpdate',prevProps, prevState)
		return 111;
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('Item componentDidUpdate',prevProps, prevState,snapshot)
	}
	componentDidMount(){
		console.log('Item componentDidMount')
	}	
	componentWillUnmount(){
		console.log('Item componentWillUnmount')
	}*/
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.content != this.props.content){
			return true;
		}else{
			return false;
		}
		
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