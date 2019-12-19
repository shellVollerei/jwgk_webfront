// import React from "react";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children:
      "https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg"
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "products",
        className: "header3-item",
        children: {
          href: "/products",
          children: [{ children: "产品", name: "text" }]
        }
      },
      {
        name: "activities",
        className: "header3-item",
        children: {
          href: "/activities",
          children: [{ children: "活动", name: "text" }]
        }
      },
      {
        name: "aboutus",
        className: "header3-item",
        children: {
          href: "/aboutus",
          children: [{ children: "关于我们", name: "text" }]
        }
      }
    ]
  },
  mobileMenu: { className: "header3-mobile-menu" }
};
