import React from "react";
import { Col, Menu, Icon, List } from "antd";
import store from "../../store/index";

class SiderNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: openKeys 应从父组件中动态获取，然后渲染至子组件中
      openKeys: [store.getState().spuMenuList.cateMenuList[0].cate_id] // 默认为左侧列表的第一个 id]
    };
  }

  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    // console.log(this.props);
    const { dataSource, rightListShow, openKey } = this.props;
    const storageOpenKey = localStorage.getItem("open_key");
    console.log("openKey =============================================== ",Object.prototype.toString.call(openKey));
    console.log("storageOpenKey =============================================== ", Object.prototype.toString.call(storageOpenKey));
    const { cateMenuList } = dataSource;
    return (
      <Col>
        <Menu
          mode="inline"
          defaultOpenKeys={openKey.toString() === storageOpenKey? openKey: storageOpenKey}
          selectedKeys={openKey.toString() === storageOpenKey? openKey: storageOpenKey}
          onOpenChange={this.onOpenChange}
          style={{ minWidth: 160, position: "relative" }}
        >
          {cateMenuList.map(item => {
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
      </Col>
    );
  }
}

export default SiderNav;
