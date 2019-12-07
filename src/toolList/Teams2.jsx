import React from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender, isImg } from "./utils";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

class Teams2 extends React.PureComponent {
  getSideNav = () => {
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
          <Menu.Item key="2">Option 3</Menu.Item>
          <Menu.Item key="2">Option 4</Menu.Item>
          <Menu.Item key="2">Option 5</Menu.Item>
          <Menu.Item key="2">Option 6</Menu.Item>
        </Menu>
      </Col>
    );
  };

  getBlockChildren = data =>
    data.map((item, i) => {
      const { titleWrapper, image, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          {/* TODO 添加路由 */}
          <Link to={`/introduce`}>
            <Row>
              <Col span={7}>
                <div {...image}>
                  <img src={image.children} alt="img" />
                </div>
              </Col>
              <Col span={17}>
                <QueueAnim {...titleWrapper} type="bottom">
                  {titleWrapper.children.map(getChildrenToRender)}
                </QueueAnim>
              </Col>
            </Row>
          </Link>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    const sideNav = this.getSideNav();
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="tween" leaveReverse>
              <QueueAnim
                type="bottom"
                key="block"
                {...dataSource.block}
                component={Row}
              >
                <Col span={6}>{sideNav}</Col>
                <Col span={18}>{listChildren}</Col>
              </QueueAnim>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Teams2;
