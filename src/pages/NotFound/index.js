/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-21 21:52:51
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div style={{width: "100%", height: "calc(100vh - 200px)"}}>
        <div style={{position: "relative", top: "50%", transform: "translateY(-50%)"}}>
          <div style={{fontSize: 100, textAlign: "center"}}>404</div>
          <div style={{fontSize: 40, textAlign: "center"}}>Page Not Found</div>
          <div style={{fontSize: 30, textAlign: "center"}}>Please check your URL is correct</div>
        </div>
      </div>
    );
  }
}
