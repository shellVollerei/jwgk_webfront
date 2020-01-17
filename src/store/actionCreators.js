/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-19 16:43:56
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-17 21:10:56
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import $request from "../utils/request";

import {
  GET_MAIN_NAV_LIST,
  GET_FOOTER_MSG,
  GET_CAROUSEL_LIST,
  GET_CATEGORY_LIST,
  GET_SPU_MENU_LIST,
  GET_SPU_LIST,
  GET_PRODUCT_DETAIL
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
      })
      .then(resData=>{
        const data = resData;
        const action = getMainNavListAction(data);
        dispatch(action);
      })
      .catch(e=>{
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

export const getFooterMsg = () => {
  // 获取公司信息
  var comMsg = 
    $request
      .get("/post", {
        params: {
          post_type: "footer_list"
        }
      })
      .then(resData=>{
        return resData;
      })
      .catch(e=>{
        console.log(e);
      })

  // 获取公司联系人信息
  var contactMsg = 
    $request
      .get("/post", {
        params: {
          post_type: "footer_contact"
        }
      })
      .then(resData=>{
        return resData;
      })
      .catch(e=>{
        console.log(e);
      })
      
      return dispatch => {
        Promise
          .all([comMsg, contactMsg])
          .then(val => {
            // 映射 footerMsg
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

// 轮播列表 carouselList
const getCarouselListAction = data => ({
  type: GET_CAROUSEL_LIST,
  data
});

// 轮播列表
export const getCarouselList = () => {
  return dispatch => {
    $request
      .get(`/post`, {
        params: {
          post_type: "slide_list"
        }
      })
      .then(resData => {
        const data = resData;
        const action = getCarouselListAction(data);
        dispatch(action);
      })
      .catch(e => {
        console.log(e);
      })
  }
}

// 下方科室列表生成
const getDepartmentListAction = data => ({
  type: GET_CATEGORY_LIST,
  data
});

// 科室列表
export const getDepartmentList = () => {
  return dispatch => {
    $request
      .get(`/post`, {
        params: {
          post_type: "product_get_department_list"
        }
      })
      .then(resData => {
        const data = resData;
        const action = getDepartmentListAction(data);
        dispatch(action);
      })
      .catch(e => {
        console.log(e);
      })
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 产品页 /* department/:department_id */ 
const getSpuMenuListAction = data => ({
  type: GET_SPU_MENU_LIST,
  data
});

// 产品分类列表 (左侧菜单列表部分)
export const getSpuMenuList = (spuListId) => {
  return dispatch => {
    $request
      .get(`/post`, {
        params: {
          post_type: "get_menu_prod",
          cate_id: spuListId
        }
      })
      .then(resData => {
        const data = resData;
        const action = getSpuMenuListAction(data);
        dispatch(action);
      })
      .catch(e => {
        console.log(e);
      })
  }
}

// 产品菜单（右侧 Content 部分）
const getSpuListAction = data => ({
  type: GET_SPU_LIST,
  data
});

// 产品菜单
export const getSpuList = rightListCateId => {
  return dispatch => {
    $request
      .get(`/post`, {
        params: {
          post_type: "product_get_spu_list",
          cate_id: rightListCateId,
          page: 0,
          limit: 10000
        }
      })
      .then(resData => {
        const data = resData;
        const action = getSpuListAction(data);
        dispatch(action);
      })
      .catch(e => {
        console.log(e);
      })
  }
}

// TODO: 产品详情
const getProductDetailAction = data => ({
  type: GET_PRODUCT_DETAIL,
  data
});

// 产品菜单
export const getProductDetail = () => {
  return dispatch => {
    $request
      .get(`/post`, {
        params: {
          post_type: "product_get_specific_spu",
          spu_id: localStorage.spu_id
        }
      })
      .then(resData => {
        const data = resData;
        const action = getProductDetailAction(data);
        dispatch(action);
      })
      .catch(e => {
        console.log(e);
      })
  }
}