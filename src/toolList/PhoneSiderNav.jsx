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
      curtainStyle: "nav-list-close",
      navOpen: "nav-list-curtain-open",
      navClose: "nav-list-curtain-close",
      curtainOpen: "nav-list-open",
      curtainClose: "nav-list-close"
    };
  }

  closeCurtain = () => {
    console.log("close");
    this.setState({
      navStyle: "nav-list-curtain-close",
      iconStyle: "icon-show",
      curtainStyle: "nav-list-close"
    });
    // TODO: 隐藏幕布 & phoneSiderNav & 显示 Icon
  };
  openCurtain = () => {
    console.log("open");
    this.setState({
      navStyle: "nav-list-curtain-open",
      iconStyle: "icon-hide",
      curtainStyle: "nav-list-open"
    });
    // TODO: 给幕布curtain和导航phoneSiderNav加闪出事件，并隐藏 Icon
  };

  render() {
    return (
      <div>
        <div className="phone-sider-bar">
          <Icon
            type="database"
            theme="filled"
            className={this.iconStyle}
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
        <div className={this.curtainStyle} onClick={this.closeCurtain}></div>
        <div className={this.navStyle}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="setting" />
                  <span>Navigation Three</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}

export default SiderNav;
