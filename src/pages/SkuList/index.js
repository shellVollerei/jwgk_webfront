/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-14 11:51:55
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
      rightListCateId: props.rightListCateId,
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.rightListCateId !== this.props.rightListCateId) {
      this.setState({
        rightListCateId: nextProps.rightListCateId
      });
      // TODO: 异步操作获取数据，渲染页面
      // TODO: 将相应的 rightListCateId 存储至 redux 中，保证刷新后自动加载相应页面
      console.log("右侧列表ID rightListCateId = ", nextProps.rightListCateId);
    }
  }

  componentDidMount() {
    const actionSpuList = getSpuList(this.state.rightListCateId);
    store.dispatch(actionSpuList);

    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    console.log("rightListCateId = ", this.props.rightListCateId);
    const children = [
      <Teams4
        id="Teams4_1"
        key="Teams4_1"
        dataSource={Teams4DataSource}
        // dataSource={this.state.spuList}
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
