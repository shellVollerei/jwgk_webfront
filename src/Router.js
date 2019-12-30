/*
 * @Author: fatewang
 * @Date: 2019-12-20 11:16:01
 * @Last Modified by: fatewang
 * @Last Modified time: 2019-12-20 11:17:23
 */

import React, { Component } from "react";
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { enquireScreen } from "enquire-js";

import store from "./store/index";
import { getMainNavList } from "./store/actionCreators";

import Header from "./publicComponents/Nav3";
// import Footer from "./publicComponents/Footer2";
import Footer from "./publicComponents/Footer0";
import "./publicComponents/less/antMotionStyle.less";

import Income from "./pages/Income";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Aboutus from "./pages/Aboutus";
import Activities from "./pages/Activities";
import Products from "./pages/Products";
import TypeList from "./pages/typeList";

import {
  Nav30DataSource,
  Footer00DataSource
} from "./publicComponents/data.source";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };

    this.state = store.getState().mainNavList;
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    this.setState(store.getState().mainNavList);
  }

  componentWillMount() {
    const action = getMainNavList();
    store.dispatch(action);
  }

  componentDidMount() {
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
              dataSource={Nav30DataSource}
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
              {/* 
              <Route exact path="/home" component={Home} />
              <Route exact path="/income" component={Income} />
              <Route exact path="/introduce" component={Introduce} /> 
               */}
              {/* <Route
                exact
                path="/products"
                render={() => (
                  <Products>
                    <Route path="/products/introduce" component={Introduce} />
                  </Products>
                )}
              /> */}
              {/* <Route
                exact
                path="/toollist"
                render={() => (
                  <ToolList>
                    <Route path="/toollist/introduce" component={Introduce} />
                  </ToolList>
                )}
              /> */}
              <Route exact path="/products" component={Products} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/aboutus" component={Aboutus} />
              <Route exact path="/typelist" component={TypeList} />
            </div>
            <Footer
              id="Footer0_0"
              key="Footer0_0"
              dataSource={Footer00DataSource}
              isMobile={this.state.isMobile}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
