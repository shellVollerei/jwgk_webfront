/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:47:54
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-02 21:11:08
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
