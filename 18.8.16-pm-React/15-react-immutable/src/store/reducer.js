import { combineReducers } from 'redux-immutable';
import { reducer as todolistReducer } from '../pages/todolist/store';
// import { fromJS } from 'redux-immutable';


export default combineReducers({
	todolist:todolistReducer
})