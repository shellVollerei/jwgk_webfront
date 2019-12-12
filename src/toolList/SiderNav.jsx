import React from "react";
import { Col, Menu } from "antd";
// import QueueAnim from "rc-queue-anim";
// import { getChildrenToRender } from './utils';

class SiderNav extends React.PureComponent {
  render() {
    return (
      <Col>
        <Menu
          onClick={this.handleClick}
          style={{ width: "auto", minWidth: 160 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </Menu>
      </Col>
    );
  }
}

export default SiderNav;
