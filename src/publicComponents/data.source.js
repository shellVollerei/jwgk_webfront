/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-04 17:15:54
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-04 17:55:38
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
import React from "react";

export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children:
      "https://pic2.superbed.cn/item/5df07f341f8f59f4d6d06301.png"
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "aaa",
        className: "header3-item",
        children: {
          href: "/aaa",
          children: [{ children: "产品", name: "text" }]
        }
      },
      {
        name: "bbb",
        className: "header3-item",
        children: {
          href: "/bbb",
          children: [{ children: "活动", name: "text" }]
        }
      },
      {
        name: "ccc",
        className: "header3-item",
        children: {
          href: "/ccc",
          children: [{ children: "关于我们", name: "text" }]
        }
      }
    ]
  },
  mobileMenu: { className: "header3-mobile-menu" }
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '渠道' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'name: 魏建军' },
            { href: '#', name: 'link0', children: 'position: 全国渠道经理' },
            { href: '#', name: 'link0', children: 'telephone: 15321658159' },
            { href: '#', name: 'link0', children: 'email: hytcfx@163.com' },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '市场' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'name: 张倩' },
            { href: '#', name: 'link0', children: 'position: 市场部经理' },
            { href: '#', name: 'link0', children: 'telephone: 13716815786' },
            { href: '#', name: 'link0', children: 'email: hytcs3@163.com' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 12,
        className: 'block',
        title: { children: '公司信息' },
        childWrapper: {
          children: [
            { name: 'link1', href: '#', children: 'slogan: 我们专注临床实践中的问题，围绕这些问题寻访适合的产品、理念和技术，为临床提供高效、方便实施的解决方案。' },
            { name: 'link2', href: '#', children: 'address: 北京市西城区西直门外大街110号中糖大厦401室' },
            { name: 'link3', href: '#', children: 'worktime: 周一至周五：8:00-18:00' },
            { name: 'link4', href: '#', children: 'telephone: 010-88382778' },
            { name: 'link5', href: '#', children: 'fax1: 010-88384086' },
            { name: 'link6', href: '#', children: 'fax2: 88382778-802' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2020 by <a href="#">JWGK Studio</a> All Rights
          Reserved
        </span>
      </>
    ),
  },
};