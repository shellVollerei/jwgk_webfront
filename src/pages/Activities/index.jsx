/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-19 23:50:06
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Feature1 from './Feature1';
import Feature4 from './Feature4';
import Content9 from './Content9';
import Point from './Point';
import {
  Feature10DataSource,
  Feature40DataSource,
  Content90DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const children = [
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature4
        id="Feature4_0"
        key="Feature4_0"
        dataSource={Feature40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={this.state.isMobile}
      />, // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point key="list" data={['Feature1_0', 'Feature4_0', 'Content9_0']} />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {children}
      </div>
    );
  }
}
