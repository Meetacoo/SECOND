import { CHANGE_VALUE,ADD_ITEM,DEL_ITEM } from './actionTypes.js';

export const changeValueAction = (payload)=>{
	return ({
		type:CHANGE_VALUE,
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