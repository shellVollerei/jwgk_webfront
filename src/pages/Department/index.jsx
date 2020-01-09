/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-09 18:37:19
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
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
    return window.location.pathname.slice(12);
  }

  componentDidMount() {
    // 左侧列表通过截取 url 上的 pathname 属性进行 $request 请求发送
    const actionMenuList = getSpuMenuList(this.getDepartmentId());
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
          {/* TODO: 向 TypeContent 中传递列表相关参数，动态更新内容区域 */}
          <SkuList
            dataSource={this.state.spuListId}
            rightListCateId={this.state.openKey}
          />
        </Col>
      </div>
    );
  }
}
