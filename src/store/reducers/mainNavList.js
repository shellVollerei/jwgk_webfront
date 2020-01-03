/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-27 20:51:24
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-03 15:35:08
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
import { GET_MAIN_NAV_LIST } from "../actionTypes";
import { Nav30DataSource } from "../../publicComponents/data.source";

const defaultState = Nav30DataSource;

export default (state = defaultState, action) => {
  // state 为上一次所保存的数据（value），action 为用户所传递过来的描述（type）
  // console.log("state = ", state);
  // console.log("action = ", action);

  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case GET_MAIN_NAV_LIST:
      const Data = JSON.parse(action.data);
      const trueData = Data.data;

      let resTabList = trueData.tabList;
      // console.log("resTabList = ", resTabList);
      newState.logo.children = trueData.logoUrl;

      newState.Menu.children.map((item, index) => {
        item.name = resTabList[index].href.slice(1);
        item.children.href = resTabList[index].href;
        item.children.children[0] = { children: resTabList[index].name, name: "text" };
        return item;
      });
      
      console.log("newState = ", newState);
      break;
    default:
  }
  return newState || state;
};
