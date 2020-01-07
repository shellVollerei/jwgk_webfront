/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:47:54
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-07 21:47:42
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
