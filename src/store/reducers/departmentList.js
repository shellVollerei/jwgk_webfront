/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-17 21:17:41
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import { GET_DEPARTMENT_LIST } from "../actionTypes";
import { Feature00DataSource } from "../../pages/Products/data.source";

const defaultState = Feature00DataSource;

var updateDepartmentList = (Data) => {
  var cateArr = [];

  for(var item of Data){
    cateArr.push({
      name: `block${item.cate_id}`,
      className: "content0-block",
      md: 8,
      xs: 24,
      href: `/department/department_${item.cate_id}`,
      children: {
        className: "content0-block-item",
        children: [
          {
            name: "image",
            className: "content0-block-icon",
            children: `/${item.imgSrc}`
          },
          {
            name: "title",
            className: "content0-block-title",
            children: item.name
          },
          {
            name: "content",
            children: item.description
          }
        ]
      }
    })
  }
  return cateArr;
}

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));
  
  switch (action.type) {
    case GET_DEPARTMENT_LIST:
      var Data = JSON.parse(action.data);
      Data = Data.data.departmentList;

      var cateArr = updateDepartmentList(Data);

      newState.childWrapper.children = cateArr;

      // console.log(newState);
      break;
    default:
  }
  return newState || state;
};
