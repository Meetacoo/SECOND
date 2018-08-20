/*import {createStore} from 'redux';
import reducer from './reducer.js'

const store = createStore(reducer)
export default store;*/

const defaultState = {
	value:'2',
	list:['ccc','ddd']
}
export default function(state = defaultState,action){
	console.log(action)
	if (action.type === 'change_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.value = action.payload;
		return newState;
	}
	if (action.type === 'add_item') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.value);
		newState.value = "";
		return newState;
	}
	if (action.type === 'del_item') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	return state;
};
