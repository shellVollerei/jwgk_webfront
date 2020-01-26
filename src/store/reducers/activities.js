/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-07 21:50:33
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import {
  GET_INTERNATIONAL_EXCHANGE,
  GET_HOSPITAL_ACTIVITIES,
  GET_EXHIBITION_ACTIVITIES
} from "../actionTypes";
import {
  Feature10DataSource,
  Feature40DataSource,
  Content90DataSource
} from "../../pages/Activities/data.source";

const defaultState = "";

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const Data = JSON.parse(action.data);

  switch (action.type) {
    case GET_INTERNATIONAL_EXCHANGE:
      console.log(Data);
      break;
    case GET_HOSPITAL_ACTIVITIES:
      console.log(Data);
      break;
    case GET_EXHIBITION_ACTIVITIES:
      console.log(Data);
      break;
    default:
  }
  return newState || state;
};
