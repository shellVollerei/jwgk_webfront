/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-15 23:08:35
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { enquireScreen } from "enquire-js";
import { Col } from "antd";

import store from "../../store/index";
import { getSpuMenuList } from "../../store/actionCreators";

import SiderNav from "./SiderNav";
import PhoneSiderNav from "./PhoneSiderNav";
import SkuList from "../SkuList/index"; // 右侧产品列表

import "./less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

export default class Department extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      spuMenuList: store.getState().spuMenuList,
      spuLeftMenuId: this.getDepartmentId(),
      // TODO: openKeys 应该建立相应的 redux action, 随后动态传递给子组件
      openKey: store.getState().spuMenuList.cateMenuList[0].cate_id // 默认为左侧列表的第一个 id
      // rightListData: store.getState().spuList
    };

    this.setState(() => {
      var state = store.getState().spuMenuList;
      state.spuMenuList = {};
      return state;
    });

    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState({
      spuMenuList: store.getState().spuMenuList
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    console.log("这个为什么会打印三次呢？ this.state ==== ", this.state);
  };

  getOpenKey = openKey => {
    this.setState({
      openKey
    });
  };

  getDepartmentId = () => {
    // 替换掉 /department/, 只留下相应的 department_id 用以获取左侧下方列表
    // console.log(window.location.pathname.replace(/\/\bdepartment\b\/|\?.*$/g, ""));
    return window.location.pathname.replace(/\/\bdepartment\b\//g, "");
  }

  componentDidMount() {
    // 左侧列表通过截取 url 上的 pathname 属性进行 $request 请求发送
    const actionMenuList = getSpuMenuList(this.getDepartmentId());
    // 将相应的 departmentId 存至 localStorage 中，下次刷新时取用即可
    localStorage.setItem("department_id", this.getDepartmentId());
    store.dispatch(actionMenuList);

    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <div>
        {/* 手机屏 NavBar 适配 */}
        <PhoneSiderNav
          dataSource={this.state.spuMenuList}
          rightListShow={this.getOpenKey}
        />
        <Col
          className="left-side-bar"
          span={5}
          style={{ minWidth: 160, height: "100%" }}
          ref={d => {
            this.dom = d;
          }}
        >
          {/* 电脑屏 NavBar 适配 */}
          <SiderNav
            dataSource={this.state.spuMenuList}
            rightListShow={this.getOpenKey}
          />
        </Col>
        <Col
          span={19}
          className="templates-wrapper"
          ref={d => {
            this.dom = d;
          }}
        >
          <SkuList
            dataSource={this.state.spuListId}
            rightListCateId={this.state.openKey}
          />
        </Col>
      </div>
    );
  }
}
