/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-27 20:51:24
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-05 00:39:08
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
import { GET_MAIN_NAV_LIST } from "../actionTypes";
import { Nav30DataSource } from "../../publicComponents/data.source";

const defaultState = Nav30DataSource;

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case GET_MAIN_NAV_LIST:
      const Data = action.data;

      let resTabList = Data.tabList;

      newState.logo.children = Data.logoUrl;

      newState.Menu.children.map((item, index) => {
        item.name = resTabList[index].href.slice(1);
        item.children.href = resTabList[index].href;
        item.children.children[0] = {
          children: resTabList[index].name,
          name: "text"
        };
        return item;
      });

      // console.log("manNav newState = ", newState);
      break;
    default:
  }
  return newState || state;
};
