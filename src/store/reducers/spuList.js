/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-14 12:01:19
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
      // TODO: 映射 /department/department_id 右侧展示列表。与之配合的是需要先获取 category_id

      console.log(Data)

      break;
    default:
  }
  return newState || state;
};
