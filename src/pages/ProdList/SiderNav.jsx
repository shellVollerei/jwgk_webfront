import React from "react";
import { Col, Menu, Icon, List } from "antd";
// import QueueAnim from "rc-queue-anim";
// import { getChildrenToRender } from './utils';

class SiderNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["1"]
    };
  }

  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["1"]
  };

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
    const { dataSource, rightListShow } = this.props;
    const { cateMenuList } = dataSource;
    return (
      <Col>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256, position: "fixed" }}
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
          {/* <Menu.Item key="1">aaa</Menu.Item> */}
        </Menu>
      </Col>
    );
  }
}

export default SiderNav;
