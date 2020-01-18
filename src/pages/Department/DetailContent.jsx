import React from "react";
import { Col, Menu, Icon, List } from "antd";
import { withRouter } from "react-router-dom";

import store from "../../store/index";
import SkuList from "../SkuList/index"; // 右侧产品列表

import "./less/antMotionStyle.less";

class SiderNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [store.getState().spuMenuList.cateMenuList[0].cate_id],
      iconStyle: "icon-show",
      navStyle: "nav-list-curtain-close",
      curtainStyle: "nav-list-close",
      cate_id: store.getState().spuMenuList.cateMenuList[0].cate_id
    };
  }

  // >>>>>>>>>>>>>>>>> 手机端 >>>>>>>>>>>>>>>>>>>>>>>>>>
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

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : []
    });
  };

  rightListShow = (cate_id) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", cate_id);
    console.log("this.props ========== ", this.props);
    this.props.history.push({
      name: "111"
    })
    this.props.history.location.search = "aaa=111"
    // browserHistory.push('/department/department_:department_id?name=111');
    // window.location.href = `${this.props.location.pathname}?cate_id=${cate_id}`
    window.history.pushState(null, null, `${this.props.location.pathname}?cate_id=${cate_id}`);
    console.log("this.props.history.location.search ========== ", this.props.history.location.search);
    this.setState({
      cate_id,
      openKeys: [cate_id]
    })
  }

  render() {
    // console.log(this.props);
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
              defaultOpenKeys={this.state.openKeys}
              selectedKeys={this.state.openKeys}
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
            defaultOpenKeys={this.state.openKeys}
            selectedKeys={this.state.openKeys}
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
            rightListCateId={this.state.openKeys}
          />
        </Col>
      </div>
    );
  }
}

export default withRouter(SiderNav);
