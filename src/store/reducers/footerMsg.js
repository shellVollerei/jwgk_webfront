/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-29 15:39:44
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-06 00:18:09
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import { GET_FOOTER_MSG } from "../actionTypes";
import { Footer10DataSource } from "../../publicComponents/data.source";

const defaultState = Footer10DataSource;

// 生成信息列表
var getInfoList = (list, finalList) => {
  for(var key in list){
    finalList.push({ href: '#', name: key, children: `${key}：${list[key]}` })
  }
  return finalList;
}

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));
  // console.log("newState = ", newState);
  
  switch (action.type) {
    case GET_FOOTER_MSG:
      const Data = JSON.parse(action.data);
      const CompanyData = JSON.parse(Data.companyData).data;
      const ContactsData = JSON.parse(Data.contactsData).data;

      // console.log(CompanyData);
      // console.log(ContactsData);

      var companyDataList = [], 
        SellLeaderDataList = [], 
        MarketLeaderDataList = [];
        
      var MarketLeader = ContactsData[0],
        SellLeaderData = ContactsData[1];

      getInfoList(CompanyData[0], companyDataList);
      getInfoList(MarketLeader, MarketLeaderDataList);
      getInfoList(SellLeaderData, SellLeaderDataList);

      newState.block.children[0].childWrapper.children = SellLeaderDataList.slice(1);
      newState.block.children[1].childWrapper.children = MarketLeaderDataList.slice(1);
      newState.block.children[2].childWrapper.children = companyDataList.slice(1);

      // console.log("footerMsg newState = ", newState);
      break;
    default:
  }
  return newState || state;
};
