/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-07 20:48:30
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import { GET_SPU_MENU_LIST } from "../actionTypes";
import { SiderNavList } from "../../pages/ProdList/data.source";

const defaultState = SiderNavList;

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));
  // console.log("newState = ", newState);
  
  switch (action.type) {
    case GET_SPU_MENU_LIST:
      var Data = JSON.parse(action.data);
      var finalData = Data.data.menuList;
      newState.cateMenuList = finalData;
      // console.log(Data);
      break;
    default:
  }
  return newState || state;
};
