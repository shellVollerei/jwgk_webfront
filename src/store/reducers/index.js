/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-19 16:43:56
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-04 23:03:45
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
import { combineReducers } from "redux";


import mainNavList from "./mainNavList";
import footerMsg from "./footerMsg";


export default combineReducers({
  mainNavList,
  footerMsg,
});
