/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-08 23:49:37
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import { GET_SPU_MENU_LIST } from "../actionTypes";
import { SiderNavList } from "../../pages/Department/data.source";

const defaultState = SiderNavList;

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));
  // console.log("newState = ", newState);
  
  switch (action.type) {
    case GET_SPU_MENU_LIST:
      var Data = JSON.parse(action.data);
      console.log(Data);
      if(Data.data.code === 400){
        return newState;
      }
      var finalData = Data.data.menuList;
      newState.cateMenuList = finalData;
      break;
    default:
  }
  return newState || state;
};
