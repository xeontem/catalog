import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import combineReducers from './reducers/combiner';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(combineReducers, middleware);

window.store = store;

export default store;
