import  * as types from './actionTypes.js';

const defaultState = {
	value:'2',
	list:['ccc','ddd']
}
export default function(state = defaultState,action){
	// console.log(action)
	if (action.type === types.CHANGE_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.value = action.payload;
		return newState;
	}
	if (action.type === types.LOAD_INIT_DATA) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.payload;
		return newState;
	}
	if (action.type === types.ADD_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.value);
		newState.value = "";
		return newState;
	}
	if (action.type === types.DEL_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	return state;
};