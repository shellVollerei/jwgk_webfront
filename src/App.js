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
import Footer from "./Components/Footer1";
import Home from "./Home";
import Introduce from "./Introduce";
import Aboutus from "./Aboutus";
import Activities from "./Activities";
import Products from "./Products";

import {
  Nav00DataSource,
  // Footer00DataSource,
  Footer10DataSource
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
            <Route exact path="/products" render={() => 
              <Products>
                <Route path="/products/introduce" component={Introduce} />
              </Products>
            } />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Footer
              id="Footer1_0"
              key="Footer1_0"
              dataSource={Footer10DataSource}
              isMobile={this.state.isMobile}
            />
            ,
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
