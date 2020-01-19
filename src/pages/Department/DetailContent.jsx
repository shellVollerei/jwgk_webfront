import React from "react";
import { Col, Menu, Icon } from "antd";

import store from "../../store/index";
import SkuList from "../SkuList/index"; // 右侧产品列表

import "./less/antMotionStyle.less";

class SiderNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      iconStyle: "icon-show",
      navStyle: "nav-list-curtain-close",
      curtainStyle: "nav-list-close",
      cate_id: window.location.search.replace(/\?openKey=/g, "") === "" ?
        store.getState().spuMenuList.cateMenuList[0].cate_id :
        window.location.search.replace(/\?openKey=/g, "")
    };
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 手机端 start >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
      cate_id: this.state.cate_id // 默认为左侧列表的第一个 id]
    });
  };
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 手机端 end >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : []
    });
  };

  rightListShow = (openKey) => {
    window.history.pushState(null, null, `${window.location.pathname}?openKey=${openKey}`);
    
    this.setState({
      cate_id: openKey
    })
  }

  render() {
    const { dataSource } = this.props;
    const { cateMenuList } = dataSource;
    return (
      <div className="container">
        {/* 手机端左侧列表 */}
        <div className="phone-sider-container">
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
              defaultOpenKeys={[this.state.cate_id]}
              selectedKeys={[this.state.cate_id]}
              onOpenChange={this.onOpenChange}
              mode="inline"
            >
              {cateMenuList.map((item, i) => {
                return (
                  <Menu.Item
                    key={item.cate_id}
                    onClick={()=>
                      this.rightListShow(item.cate_id)
                    }
                  >
                    {item.name}
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
        </div>
        {/* PC 端左侧列表 */}
        <Col 
          span={5} 
          className="pc-sider-container" 
          ref={d => {
            this.dom = d;
          }}
        >
          <Menu
            mode="inline"
            defaultOpenKeys={[this.state.cate_id]}
            selectedKeys={[this.state.cate_id]}
            onOpenChange={this.onOpenChange}
            style={{ minWidth: 160, position: "relative" }}
          >
            {cateMenuList.map(item => {
              return (
                <Menu.Item
                  key={item.cate_id}
                  onClick={()=>
                    this.rightListShow(item.cate_id)
                  }
                >
                  {item.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
        {/* 内容部分 */}
        <Col 
          span={19}
          ref={d => {
            this.dom = d;
          }}
        >
          <SkuList 
            dataSource={this.state.spuListId}
            // 此处是否需要传递
            rightListCateId={this.state.cate_id}
          />
        </Col>
      </div>
    );
  }
}

export default SiderNav;
