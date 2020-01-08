/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-08 23:37:51
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import { GET_SPU_LIST } from "../actionTypes";
import { Footer10DataSource } from "../../publicComponents/data.source";

const defaultState = Footer10DataSource;

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));
  // console.log("newState = ", newState);
  
  switch (action.type) {
    case GET_SPU_LIST:
      const Data = JSON.parse(action.data);
      // TODO: 映射轮播列表

      console.log(Data)

      break;
    default:
  }
  return newState || state;
};
