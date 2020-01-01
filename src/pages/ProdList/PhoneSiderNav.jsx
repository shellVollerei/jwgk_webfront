import React from "react";
import { Menu, Icon } from "antd";
const { SubMenu } = Menu;
// import QueueAnim from "rc-queue-anim";
// import { getChildrenToRender } from './utils';

class SiderNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      iconStyle: "icon-show",
      navStyle: "nav-list-curtain-close",
      curtainStyle: "nav-list-close"
    };
  }
  // TODO: 后期将此组件信息提取至 data.source.js 中，由 redux 统一进行管理

  closeCurtain = () => {
    // 隐藏幕布 & phoneSiderNav & 显示 Icon
    this.setState({
      navStyle: "nav-list-curtain-close",
      iconStyle: "icon-show",
      curtainStyle: "nav-list-close"
    });
  };
  openCurtain = () => {
    // 给幕布curtain和导航phoneSiderNav加闪出事件，并隐藏 Icon
    this.setState({
      navStyle: "nav-list-open",
      iconStyle: "icon-hide",
      curtainStyle: "nav-list-curtain-open"
    });
  };

  handleClick = () => {
    // TODO: 点击跳转相应页面
  };

  render() {
    return (
      <div>
        <div className="phone-sider-bar">
          <Icon
            type="database"
            theme="filled"
            className={[this.state.iconStyle, "icon"].join(" ")}
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
        <div
          className={[this.state.curtainStyle, "nav-list-curtain"].join(" ")}
          onClick={this.closeCurtain}
        ></div>
        <div className={[this.state.navStyle, "nav-list"].join(" ")}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            {/* <Menu.ItemGroup key="g1" title="Item 1"> */}
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
            {/* </Menu.ItemGroup> */}
          </Menu>
        </div>
      </div>
    );
  }
}

export default SiderNav;
