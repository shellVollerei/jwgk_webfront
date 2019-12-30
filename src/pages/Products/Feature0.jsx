import React from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";
import { Link } from "react-router-dom";

class Content extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <Link to={`/typelist`}>
                      {/* TODO：这里加上路由 */}
                      <div {...item}>
                        {/* TODO: 后期更改一下 utils.js 文件把 getChildrenToRender 分离出来避免代码冗余。 */}
                        {/* TODO: 同时此处的 getChildrenToRender 要进行改造，使其渲染为带 link 标签的部分，以后台传递过来的字段进行路由跳转显示 */}
                        {item.children.map(getChildrenToRender)}
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
