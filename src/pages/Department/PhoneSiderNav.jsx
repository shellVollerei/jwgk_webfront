import React from "react";
import { Menu, Icon } from "antd";
import store from "../../store/index";

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
      curtainStyle: "nav-list-curtain-open",
      openKeys: [store.getState().spuMenuList.cateMenuList[0].cate_id] // 默认为左侧列表的第一个 id]
    });
  };

  handleClick = () => {
    // TODO: 点击跳转相应页面
  };

  render() {
    const { dataSource, rightListShow, openKey } = this.props;
    const { cateMenuList } = dataSource;

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
            selectedKeys={openKey}
            defaultSelectedKeys={openKey}
            mode="inline"
          >
            {cateMenuList.map((item, i) => {
              return (
                <Menu.Item
                  key={item.cate_id}
                  onClick={()=>
                    rightListShow && rightListShow(item.cate_id)
                  }
                >
                  {item.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
      </div>
    );
  }
}

export default SiderNav;
