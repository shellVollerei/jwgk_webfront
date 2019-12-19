import React from "react";
import { Button, Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { isImg } from "./utils";
import { Link } from "react-router-dom";

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={["bottom", "top"]}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === "string" &&
            dataSource.title.children.match(isImg) ? (
              <img src={dataSource.title.children} width="100%" alt="img" />
            ) : (
              dataSource.title.children
            )}
          </div>
          <div key="content" {...dataSource.content}>
            {dataSource.content.children}
          </div>
          <Link to="/products">
            <Button ghost key="button" {...dataSource.button}>
              {dataSource.button.children}
            </Button>
          </Link>
        </QueueAnim>
      </div>
    );
  }
}
export default Banner;
