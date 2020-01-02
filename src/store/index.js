/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-02 21:11:51
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
