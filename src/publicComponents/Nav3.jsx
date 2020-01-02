/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-02 21:12:13
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import TweenOne from "rc-tween-one";
import { Menu } from "antd";
import { getChildrenToRender } from "./utils";
import { Link, Route } from "react-router-dom";

const { Item, SubMenu } = Menu;

class Header3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      currentKey: "/products"
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen
    });
  };

  tabClick = item => {
    console.log(item);
    this.setState({
      currentKey: `/${item.key}`
    });
    console.log(this.state.currentKey);
  };

  componentWillMount() {
    const currentKey = window.location.hash.replace(/#|\?.*$/g, ""); // hash模式
    // const currentKey = window.location.pathname.replace(/#|\?.*$/g, ""); // Browser模式

    this.setState({
      currentKey
    });

    // console.log(currentKey);
    // console.log(window.location);
  }

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen, currentKey } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map(item => {
      const { children: a, subItem, ...itemProps } = item;
      // console.log(a);
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header3-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header3-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <Route>
                  <Link {...childItem}>
                    {childItem.children.map(getChildrenToRender)}
                  </Link>
                </Route>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <Route>
            <Link
              to={a.href}
              className={`header3-item-block ${a.className}`.trim()}
            >
              {a.children.map(getChildrenToRender)}
            </Link>
          </Route>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: "from" }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? " open" : ""}`}
        >
          <TweenOne
            animation={{ x: -30, type: "from", ease: "easeOutQuad" }}
            {...dataSource.logo}
          >
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    x: 0,
                    height: 0,
                    duration: 300,
                    onComplete: e => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = "auto";
                      }
                    },
                    ease: "easeInOutQuad"
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? "inline" : "horizontal"}
              // defaultSelectedKeys={["products"]}
              selectedKeys={[currentKey]}
              onClick={this.tabClick}
              theme="light"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header3;
