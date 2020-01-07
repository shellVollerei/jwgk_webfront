/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-07 20:49:43
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { enquireScreen } from "enquire-js";

import Teams4 from "./Teams4";

import { Teams4DataSource } from "./data.source";
import "./less/antMotionStyle.less";

// import store from "../../store";
import store from "../../store/index"
import { getSpuList } from "../../store/actionCreators";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      rightListCateId: this.props.rightListCateId,
      spuList: store.getState().spuList
    };

    this.setState(() => {
      var state = store.getState().spuList;
      state.spuList = {};
      return state;
    });

    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    this.setState({
      spuList: store.getState().spuList
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // console.log("this.state ==== ", this.state);
  }

  componentDidMount() {
    const actionSpuList = getSpuList(this.props.rightListCateId);
    store.dispatch(actionSpuList);

    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    console.log(this.props.rightListCateId);
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
        {children}
      </div>
    );
  }
}
