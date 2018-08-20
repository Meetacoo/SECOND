 // import store from './index.js'
/*const defaultState = {
	value:'2',
	list:['ccc','ddd']
}
export default defaultState;*/

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';

const store = createStore(reducer,applyMiddleware(thunk))
export default store;