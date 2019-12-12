import React from "react";
import { Icon } from "antd";
// import QueueAnim from "rc-queue-anim";
// import { getChildrenToRender } from './utils';

class SiderNav extends React.PureComponent {
  closeCurtain = () => {
    console.log("close");
  };
  openCurtain = () => {
    console.log("open");
  };

  render() {
    return (
      <div>
        <div className="phone-sider-bar">
          <Icon
            type="double-left"
            onClick={this.openCurtain}
            style={{
              fontSize: 40,
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%"
            }}
          />
        </div>
        <div className="nav-list-curtain" onClick={this.closeCurtain}>
          <div className="nav-list"></div>
        </div>
      </div>
    );
  }
}

export default SiderNav;
