/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-09 17:12:04
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-03 16:44:28
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { enquireScreen } from "enquire-js";

import store from "./store/index";
import { getMainNavList } from "./store/actionCreators";

import Header from "./publicComponents/Nav3";
import Footer from './publicComponents/Footer1';
import "./publicComponents/less/antMotionStyle.less";

import Income from "./pages/Income";
import Detail from "./pages/Detail";
import Aboutus from "./pages/Aboutus";
import Activities from "./pages/Activities";
import Products from "./pages/Products";
import ProdList from "./pages/ProdList";    // ProdList 为产品列表，SkuList 为货品列表

import {
  Nav30DataSource,
  Footer10DataSource
} from "./publicComponents/data.source";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      headerNav: Nav30DataSource
    };

    this.state = store.getState().mainNavList;
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    const headerNav = store.getState().mainNavList;
    this.setState({
      headerNav: headerNav
    });
    console.log(headerNav);
  }

  // componentWillMount() {
  //   const action = getMainNavList();
  //   store.dispatch(action);
  // }

  componentDidMount() {
    const action = getMainNavList();
    store.dispatch(action);
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    
  }
  render() {
    return (
      <Router>
        <Switch>
          <div style={{ overflow: "hidden" }}>
            <Header
              id="Nav3_0"
              key="Nav3_0"
              dataSource={this.state.headerNav}
              isMobile={this.state.isMobile}
              style={{ position: "fixed" }}
            />
            <div
              className="nouse"
              style={{ width: "100%", height: "64px" }}
            ></div>
            <div style={{width: "100%", height: "calc(100% - 144px)"}}>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/Income"></Redirect>}
              ></Route>
              <Route exact path="/income" component={Income} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/aboutus" component={Aboutus} />
              <Route exact path="/typelist/:serve_type" component={ProdList} />
              <Route exact path="/detail/:pro_id" component={Detail} />
            </div>
            <Footer
              id="Footer1_0"
              key="Footer1_0"
              dataSource={Footer10DataSource}
              isMobile={this.state.isMobile}
            />,
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
