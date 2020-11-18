import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './data/reducer';

const initialState = {};

const devTools =   
typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? 
window.__REDUX_DEVTOOLS_EXTENSION__() : compose;

const middlewares = [thunk, logger];
const middlewareEnhancers = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancers, devTools]
const composedEnhancers = compose(...enhancers)

const store = createStore(
  reducer,
  initialState,
  composedEnhancers
);

export default store;