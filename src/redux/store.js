import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { poopUp } from './poopUp';

const reduses = combineReducers({
	poopUp,
});

export let store = createStore(reduses, applyMiddleware(thunk));
window.store = store;
