/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-31 18:02:10
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import { GET_FOOTER_MSG } from "../actionTypes";
import { Footer10DataSource } from "../../publicComponents/data.source";

const defaultState = Footer10DataSource;

export default (state = defaultState, action) => {
  // state 为上一次所保存的数据（value），action 为用户所传递过来的描述（type）
  // console.log("state = ", state);
  // console.log("action = ", action);

  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case GET_FOOTER_MSG:
      const Data = action.data;
      console.log(Data);

      // TODO: 一系列就数据更新操作，格式参考引入的 Footer00DataSource
      // newState.xxx = xxx

      break;
    default:
  }
  return newState || state;
};
