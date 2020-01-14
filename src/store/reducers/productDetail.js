/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-14 12:00:29
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import { GET_PRODUCT_DETAIL } from "../actionTypes";
import { Footer10DataSource } from "../../publicComponents/data.source";

const defaultState = Footer10DataSource;

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));
  // console.log("newState = ", newState);
  
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      // const Data = JSON.parse(action.data);
      // TODO: 映射产品详情页信息。数据结构暂且未完善，留坑
      break;
    default:
  }
  return newState || state;
};
