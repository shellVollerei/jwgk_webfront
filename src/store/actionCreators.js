/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-19 16:43:56
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-29 16:02:12
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import request from "../utils/request";

import {
  GET_MAIN_NAV_LIST,
  GET_FOOTER_MSG
} from "./actionTypes";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MainNav 栏

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
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Footer 底栏

// 获取公司信息
const getComMsgAction = data => ({
  type: GET_FOOTER_MSG,
  data
});

export const getComMsg = () => {
  return dispatch => {
    request.get("/post", {
      params: {
        post_type: "footer_list"
      }
    }).then(resData=>{
      const data = resData;
      const action = getComMsgAction(data);
      dispatch(action);
    }).finally(()=>{
      // console.log("Now we are alreday get the MainNavList");
    }).catch(e=>{
      console.log(e);
    })
  }
}

// 获取联系人信息
const getLinkmanMsgAction = data => ({
  type: GET_FOOTER_MSG,
  data
});

export const getLinkmanMsg = () => {
  return dispatch => {
    request.get("/post", {
      params: {
        post_type: "footer_contact"
      }
    }).then(resData=>{
      const data = resData;
      const action = getLinkmanMsgAction(data);
      dispatch(action);
    }).finally(()=>{
      // console.log("Now we are alreday get the MainNavList");
    }).catch(e=>{
      console.log(e);
    })
  }
}