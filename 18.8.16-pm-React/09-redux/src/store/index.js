/*const defaultState = {
	value:'2',
	list:['ccc','ddd']
}
export default defaultState;*/

import {createStore} from 'redux';
import reducer from './reducer.js'

const store = createStore(reducer)
export default store;