/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-02 21:12:36
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Feature1 from "./Feature1";
import Teams0 from "./Teams0";
import Content9 from "./Content9";
import Teams2 from "./Teams2";
import Point from "./Point";
import {
  Teams00DataSource,
  Content90DataSource,
  Teams20DataSource,
  Feature10DataSource
} from "./data.source";
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams2
        id="Teams2_0"
        key="Teams2_0"
        dataSource={Teams20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Point
        key="list"
        data={["Teams0_0", "Content9_0", "Teams2_0", "Feature1_0"]}
      />
    ];
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
