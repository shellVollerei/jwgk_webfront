/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-02 21:13:53
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import { Col } from "antd";

import SiderNav from "./SiderNav";
import PhoneSiderNav from "./PhoneSiderNav";
import SkuList from "../SkuList/index"; // 产品列表

// TODO: SiderNavList 动态渲染给 NavBar
import { SiderNavList } from "./data.source";
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
      isMobile
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
    return (
      <div>
        {/* 手机屏 NavBar 适配 */}
        <PhoneSiderNav />
        <Col
          className="left-side-bar"
          span={5}
          style={{ minWidth: 160, height: "100%" }}
          ref={d => {
            this.dom = d;
          }}
        >
          {/* 电脑屏 NavBar 适配 */}
          <SiderNav />
        </Col>
        <Col
          span={19}
          className="templates-wrapper"
          ref={d => {
            this.dom = d;
          }}
        >
          {/* TODO: 向 TypeContent 中传递列表相关参数，动态更新内容区域 */}
          <SkuList />
        </Col>
      </div>
    );
  }
}
