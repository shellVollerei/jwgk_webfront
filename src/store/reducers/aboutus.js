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
  GET_CEO_WISHES,
  GET_COM_INTRO_HIS,
  GET_TEAMMATES_LIST,
  GET_SOURCE_MANAGE
} from "../actionTypes";
import {
  Teams00DataSource,
  Content90DataSource,
  Teams20DataSource,
  Feature10DataSource
} from "../../pages/Aboutus/data.source";

const defaultState = "";

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const Data = JSON.parse(action.data);

  switch (action.type) {
    case GET_CEO_WISHES:
      console.log(Data);
      break;
    case GET_COM_INTRO_HIS:
      console.log(Data);
      break;
    case GET_TEAMMATES_LIST:
      console.log(Data);
      break;
    case GET_SOURCE_MANAGE:
      console.log(Data);
      break;
    default:
  }
  return newState || state;
};
