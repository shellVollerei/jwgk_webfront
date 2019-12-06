import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { enquireScreen } from "enquire-js";
import Header from "./Components/Nav0";
import Footer from "./Components/Footer0";
import Home from "./Home";
import Introduce from "./Introduce";

import {
  Nav00DataSource,
  Footer00DataSource
} from "./Components/basicData.source.js";

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
          <div>
            <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/home"></Redirect>}
            ></Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/introduce" component={Introduce} />
            <Footer dataSource={Footer00DataSource} isMobile={this.isMobile} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
