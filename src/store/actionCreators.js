/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-19 16:43:56
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-29 15:07:17
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import request from "../utils/request";

import {
  GET_MAIN_NAV_LIST
} from "./actionTypes";

// 获取 nav 栏跳转链接
const getMainNavListAction = data => ({
  type: GET_MAIN_NAV_LIST,
  data
});

export const getMainNavList = () => {
  return dispatch => {
    request.get("/post", {
      params: {
        post_type: "primary_menu"
      }
    }).then(resData=>{
      const data = resData;
      const action = getMainNavListAction(data);
      dispatch(action);
    }).finally(()=>{
      // console.log("Now we are alreday get the MainNavList");
    }).catch(e=>{
      console.log(e);
    })
  }
}