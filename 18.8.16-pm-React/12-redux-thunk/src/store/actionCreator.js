import { CHANGE_VALUE,ADD_ITEM,DEL_ITEM,LOAD_INIT_DATA } from './actionTypes.js';
import axios from 'axios';


export const changeValueAction = (payload)=>{
	return ({
		type:CHANGE_VALUE,
		payload
	})
}
export const loadInitDataAction = (payload)=>{
	return ({
		type:LOAD_INIT_DATA,
		payload
	})
}
export const addItemAction = ()=>{
	return ({
		type:ADD_ITEM
	})
}
export const delItemAction = (payload)=>{
	return ({
		type:DEL_ITEM,
		payload
	})
}
export const getInitDataAction = ()=>{
	return (dispatch)=>{
		axios
		.get('http://127.0.0.1:8060')
		.then((data)=>{
			console.log(data);
			const action = loadInitDataAction(data.data);
			dispatch(action);
		})
	}
}