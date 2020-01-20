/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-31 17:42:48
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-20 23:15:36
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { enquireScreen } from "enquire-js";

import Pricing0 from "./Pricing0";
import { Pricing00DataSource } from "./data.source";
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      spu: "large",
      spuList: ["Large", "Default", "Small"]
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }

  handleSpuChange = e => {
    this.setState({ spu: e.target.value });
    window.history.pushState(null, null, `${window.location.pathname}?spuid=${e.target.value}`);
    console.log(e.target.value);
  };

  render() {
    const children = [
      <Pricing0
        id="Pricing0_0"
        key="Pricing0_0"
        dataSource={Pricing00DataSource}
        isMobile={this.state.isMobile}
        handleSpuChange={this.handleSpuChange}
        spu={this.state.spu}
        spuList={this.state.spuList}
      />
    ];
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d;
        }}
      >
        {children}
      </div>
    );
  }
}
