import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import logger from "redux-logger"


import rootReducer from "./rootReducer"
const middlewares = [thunk];
const enhancers = [
  applyMiddleware(...middlewares),
  
];

export const store=createStore(rootReducer, compose(...enhancers));











