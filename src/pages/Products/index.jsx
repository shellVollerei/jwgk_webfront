/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-18 23:32:52
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { enquireScreen } from "enquire-js";

import Feature0 from "./Feature0";
import "./less/antMotionStyle.less";
import store from "../../store";
import { getDepartmentList } from "../../store/actionCreators"

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      departmentList: store.getState().departmentList
    };

    this.setState(() => {
      var state = store.getState().departmentList;
      state.departmentList = {};
      return state;
    });

    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState({
      departmentList: store.getState().departmentList
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // console.log("this.state ==== ", this.state);
  }

  componentDidMount() {
    const actionDepartmentList = getDepartmentList();
    store.dispatch(actionDepartmentList);

    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    
  }

  render() {
    const children = [
      <Feature0
        id="Feature0_0"
        key="Feature0_0"
        dataSource={this.state.departmentList}
        isMobile={this.state.isMobile}
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
