/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:49:09
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-03 11:42:28
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import qs from "qs";
import axios from "axios";

import log from "./log";

// export const baseURL = process.env.NODE_ENV === "production" ? "/" : "/proxy";

export const baseURL = "/";

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
      return qs.stringify(data);
    } else if (config["Content-Type"] === "application/json") {
      return JSON.stringify(data);
    } else {
      return data;
    }
  },
  transformResponse: function(data) {
    return data;
  }
});

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = JSON.parse(response.data);
    if (response.config.customResponse) {
      return dataAxios;
    }
    // 这个状态码是和后端约定的
    const { success } = dataAxios;
    // 根据 code 进行判断
    if (success) {
      return dataAxios.data;
    } else {
      errorCreate(`${dataAxios.msg}: ${response.config.url}`);
      return dataAxios;
    }
  },
  error => {
    errorLog(error);
    return Promise.reject(error);
  }
);

export default service;
