/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import { Col } from "antd";
import { Menu, Icon } from "antd";

import Teams2 from "./Teams2";
import { Teams20DataSource } from "./data.source";
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
      <Teams2
        id="Teams2_0"
        key="Teams2_0"
        dataSource={Teams20DataSource}
        isMobile={this.state.isMobile}
      />
      // <Point key="list" data={["Teams2_0"]} />
    ];
    const getSideBar = () => {
      return (
        <Col>
          <Menu
            onClick={this.handleClick}
            style={{ width: "auto", minWidth: 160 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </Menu>
        </Col>
      );
    };
    const showSideBar = getSideBar();
    return (
      <div>
        <Col
          className="left-side-bar"
          span={6}
          style={{ minWidth: 160, height: "100%", backgroundColor: "red" }}
        >
          {showSideBar}
        </Col>
        <Col
          span={18}
          className="templates-wrapper"
          ref={d => {
            this.dom = d;
          }}
        >
          {/* 如果不是 dva 2.0 替换成 {children} start */}
          {/* <Col span={6}>{showSideBar}</Col> */}
          <Col>{this.state.show && children}</Col>
          {/* 如果不是 dva 2.0 替换成 {children} end */}
        </Col>
      </div>
    );
  }
}
