/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-09 17:12:04
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-21 23:08:24
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { enquireScreen } from "enquire-js";

import store from "./store/index";
import { getMainNavList, getFooterMsg } from "./store/actionCreators";

import Header from "./publicComponents/Nav3";
import Footer from './publicComponents/Footer1';
import "./publicComponents/less/antMotionStyle.less";

import Income from "./pages/Income";
import Aboutus from "./pages/Aboutus";
import Activities from "./pages/Activities";
import Products from "./pages/Products";
import Department from "./pages/Department";    // Department 为产品列表，SkuList 为货品列表
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      headerNav: store.getState().mainNavList,
      footerMsg: store.getState().footerMsg
    };

    this.setState(()=>{
      var state = store.getState().mainNavList;
      state.headerNav = {};
      return state;
    });

    this.setState(()=>{
      var state = store.getState().footerMsg;
      state.footerMsg = {};
      return state;
    });
    
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    this.setState({
      headerNav: store.getState().mainNavList,
      footerMsg: store.getState().footerMsg
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // console.log("this.state ==== ", this.state);
  }

  componentDidMount() {
    const actionHeader = getMainNavList();
    const actionFooter = getFooterMsg();
    store.dispatch(actionHeader);
    store.dispatch(actionFooter);
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }
  
  render() {
    return (
      <Router>
        <div style={{ overflow: "hidden" }}>
          <Header
            id="Nav3_0"
            key="Nav3_0"
            dataSource={this.state.headerNav}
            isMobile={this.state.isMobile}
            style={{ position: "fixed" }}
          />
          <div style={{ height: "calc(100% - 144px)", maxWidth: 1200, margin: "64px auto"}}>
            <Switch>
              <Route exact path="/" component={Income} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/aboutus" component={Aboutus} />
              <Route exact path="/department/:department_id" component={Department} />
              <Route exact path="/detail/:pro_id" component={Detail} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
          <Footer
            id="Footer1_0"
            key="Footer1_0"
            dataSource={this.state.footerMsg}
            isMobile={this.state.isMobile}
          />,
        </div>
      </Router>
    );
  }
}

export default App;
