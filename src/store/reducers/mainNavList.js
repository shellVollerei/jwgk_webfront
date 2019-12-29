/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-27 20:51:24
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-29 12:14:55
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

      // newState.courseList.Monday = Data.slice(0, 5);
      // newState.courseList.Tuesday = Data.slice(5, 10);
      // newState.courseList.Wednesday = Data.slice(10, 15);
      // newState.courseList.Thursday = Data.slice(15, 20);
      // newState.courseList.Friday = Data.slice(20, 25);

      // newState.dataSource = initData(Data);
      // newState.dataSource = jsonToString(newState.dataSource);

      // console.log(newState.dataSource);

      break;
    default:
  }
  return newState || state;
};
