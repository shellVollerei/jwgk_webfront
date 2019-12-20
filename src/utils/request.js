/*
 * @Author: fatewang@tencent.com
 * @Date: 2019-04-19 11:17:56
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-10-27 16:50:26
 */

import qs from "qs";
import axios from "axios";
// import { Message } from "element-ui";

import log from "@/utils/log";

export const baseURL = process.env.NODE_ENV === "production" ? "/" : "/proxy";

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
  // 显示提示
  alert({
    message: err.message,
    showClose: true,
    type: "error",
    duration: 5 * 1000,
    offset: 100
  });
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
  }
});

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data;
    if (response.config.customResponse) {
      return dataAxios;
    }
    // 这个状态码是和后端约定的
    const { code, status } = dataAxios;
    // 根据 code 进行判断
    if (code === undefined && status === undefined) {
      return dataAxios;
    } else {
      let resCode = code;
      if (code === undefined) {
        resCode = status;
      }
      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (resCode) {
        case 0:
          return dataAxios.data;
        case 401:
          window.location.href = dataAxios.data && dataAxios.data.redirect;
          break;
        default:
          // 不是正确的 code
          errorCreate(
            `${dataAxios.message || dataAxios.msg}: ${response.config.url}`
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
