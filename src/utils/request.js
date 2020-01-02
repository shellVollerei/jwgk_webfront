/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-20 10:45:26
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-01 23:23:23
 * @Description  : This is a tool which is used to package axios
 * @ContactMe    : siir_52721@qq.com
 */

import qs from "qs";
import axios from "axios";

import log from "./log";

// export const baseURL = process.env.NODE_ENV === "production" ? "/" : "/proxy";
export const baseURL = "http://39.100.118.220/";

// 创建一个错误
function errorCreate(msg) {
  const err = new Error(msg);
  errorLog(err);
  throw err;
}

// 记录和显示错误
function errorLog(err) {
  // 打印到控制台
  if (process.env.NODE_ENV === "development") {
    log.danger(">>>>>> Error >>>>>>");
    console.log(err);
  }
}

// 创建一个 axios 实例
const service = axios.create({
  baseURL,
  timeout: 30000, // 请求超时时间
  headers: {
    "Content-Type": "application/json"
  },
  transformRequest: function(data, config) {
    if (config["Content-Type"] === "application/x-www-form-urlencoded") {
      // return escape(qs.stringify(data));
      return qs.stringify(data);
    } else if (config["Content-Type"] === "application/json") {
      // return escape(JSON.stringify(data));
      return JSON.stringify(data);
    } else {
      // return escape(data);
      return data;
    }
  },
  transformResponse: function (data) {
    // 反编译汉字码
    // return JSON.parse(unescape(JSON.stringify(data)));
    return data;
  },
});

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response;
    if (response.config.customResponse) {
      return dataAxios;
    }
    // 这个状态码是和后端约定的
    const { code } = dataAxios;
    // 根据 code 进行判断
    if (code === undefined) {
      return dataAxios;
    } else {
      let resCode = code;
      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (resCode) {
        case 100:
          return dataAxios.data;
        default:
          // 错误状态码为400  由于后台只有这两种状态码故默认报错
          errorCreate(
            // `${dataAxios.message || dataAxios.msg}: ${response.config.url}`
            `we have no message about backend, if u have any question plz contact backend provider`
          );
          break;
      }
    }
  },
  error => {
    errorLog(error);
    return Promise.reject(error);
  }
);

export default service;
