/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-27 20:51:24
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-29 15:39:13
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
      const Data = action.data;
      console.log(Data);

      // TODO: 一系列就数据更新操作，格式参考引入的 Nav30DataSource
      // newState.xxx = xxx

      break;
    default:
  }
  return newState || state;
};
