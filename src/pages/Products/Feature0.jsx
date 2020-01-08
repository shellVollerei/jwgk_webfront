import React from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";
import { Link } from "react-router-dom";

class Content extends React.PureComponent {

  setProdMenuList = (href) => {
    // console.log("href = ", href)
    var str = href.slice(12);
    // console.log("str = ", str)
    // TODO: 这里把 prod_menu_list_id 存储至第三方存储对象中，传递给其父组件 index，再由
    localStorage.setItem('prod_menu_list_id', str);
  }

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
                    {/* Link :to=`/department/:department_id` */}
                    <Link to={block.href} onClick={() => this.setProdMenuList(block.href)} >
                      <div {...item}>
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
