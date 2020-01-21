import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col, Pagination } from "antd";
import QueueAnim from "rc-queue-anim";
import { Link } from "react-router-dom";
// import { getChildrenToRender } from './utils';

class Content8 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      total: 50
    };
  }

  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;

  getBlockChildren = (item, i) => {
    const children = item.children;
    const delay = this.props.isMobile ? i * 50 : this.getDelay(i, 24 / item.md);
    const liAnim = {
      y: 30,
      opacity: 0,
      type: "from",
      ease: "easeOutQuad",
      delay
    };
    return (
      <TweenOne component={Col} animation={liAnim} key={i.toString()} {...item}>
        <div {...children}>
          <Link to={item.href}>
            <div className="image-wrapper" {...children.img} style={{cursor: "pointer"}}>
              <img src={children.img.children} alt="img" />
            </div>
            <h2 {...children.title} style={{cursor: "pointer"}}>{children.title.children}</h2>
            {/* <div {...children.content}>{children.content.children}</div> */}
          </Link>
        </div>
      </TweenOne>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const children = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          {/* <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div> */}
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="img">
              <Row {...dataSource.block} key="img">
                {children}
              </Row>
            </QueueAnim>
            <Pagination
              style={{textAlign: "center"}}
              total={this.state.total}
              showTotal={total => `Total ${this.state.total} items`}
              pageSize={8}
              defaultCurrent={this.state.currentPage}
            />
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content8;
