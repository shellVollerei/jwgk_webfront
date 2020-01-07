/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-19 16:43:56
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-07 19:31:26
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
import { combineReducers } from "redux";


import mainNavList from "./mainNavList";
import footerMsg from "./footerMsg";
import carouselList from "./carouselList";
import categoryList from "./categoryList";
import spuMenuList from "./spuMenuList";
import spuList from "./spuList";
import productDetail from "./productDetail";


export default combineReducers({
  mainNavList,
  footerMsg,
  carouselList,
  categoryList,
  spuMenuList,
  spuList,
  productDetail
});
