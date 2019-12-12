/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import { Col } from "antd";

import Teams4 from "./Teams4";
import SiderNav from "./SiderNav";
import PhoneSiderNav from "./PhoneSiderNav";

import { Teams4DataSource } from "./data.source";
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
    const children = [
      <Teams4
        id="Teams4_1"
        key="Teams4_1"
        dataSource={Teams4DataSource}
        isMobile={this.state.isMobile}
      />
    ];
    return (
      <div>
        <Col
          className="left-side-bar"
          span={5}
          style={{ minWidth: 160, height: "100%" }}
        >
          <SiderNav />
        </Col>
        <Col
          span={19}
          className="templates-wrapper"
          ref={d => {
            this.dom = d;
          }}
        >
          {children}
        </Col>
        <PhoneSiderNav />
      </div>
    );
  }
}
