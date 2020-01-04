/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-19 16:43:56
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-04 22:58:22
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import $request from "../utils/request";

import {
  GET_MAIN_NAV_LIST,
  GET_FOOTER_MSG,
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
    $request
      .get(`/post`, {
      params: {
        post_type: "get_menu_main"
      }
    }).then(resData=>{
      const data = resData;
      const action = getMainNavListAction(data);
      dispatch(action);
    }).catch(e=>{
      console.log(e);
    })
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Footer 底栏

// 汇总信息
const getFooterMsgAction = data => ({
  type: GET_FOOTER_MSG,
  data
});

export const getFooterMsg = data => {
  // 获取公司信息
  var comMsg = $request.get("/post", {
    params: {
      post_type: "footer_list"
    }
  }).then(resData=>{
    return resData;
  }).catch(e=>{
    console.log(e);
  })

  // 获取公司联系人信息
  var contactMsg = $request.get("/post", {
    params: {
      post_type: "footer_contact"
    }
  }).then(resData=>{
    return resData;
  }).catch(e=>{
    console.log(e);
  })
  
  return dispatch => {
    Promise
      .all([comMsg, contactMsg])
      .then(val => {
        // TODO: 映射 footerMsg
        const footerData = {};
        footerData.companyData = val[0];
        footerData.contactsData = val[1];

        // 务必转化为字符串
        const action = getFooterMsgAction(JSON.stringify(footerData));
        dispatch(action);
      })
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 产品页