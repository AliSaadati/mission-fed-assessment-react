import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import allReducer from '../reducers';

// include redux dev tools enhancer
// allow multiple redux store enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// add thunk middleware for executing asynchronous redux actions
// add redux dev tools for use in browser
const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;