/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-19 16:43:56
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-27 23:03:30
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
import axios from "axios";
import request from "../utils/request";

import {
  GET_STUDENTS_LIST,
  GET_COURSES_LIST,
  GET_STUDENT_LIST,
  GET_MAIN_NAV_LIST
} from "./actionTypes";

// 获取 nav 栏跳转链接
const getMainNavListAction = data => ({
  type: GET_MAIN_NAV_LIST,
  data
});

export const getMainNavList = data => {
  return dispatch => {
    request.get("", {
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

// 获取学生列表
const getStudentsListAction = data => ({
  type: GET_STUDENTS_LIST,
  data
});

export const getStudentsList = () => {
  return dispatch => {
    axios
      .get("http://118.31.58.177:8080/Face/signIn/showAll", {
        params: {
          className: "软件1701"
        }
      })
      .then(res => {
        const data = res.data;
        // console.log('Student Message = ', data);
        const action = getStudentsListAction(data);
        dispatch(action);
      })
      .finally(() => {
        // console.log("Now we are alreday get the studentsList");
      })
      .catch(e => {
        console.log(e);
      });
  };
};

// 获取学生具体信息
const getStudentAction = data => ({
  type: GET_STUDENT_LIST,
  data
});

export const getStudentInfo = (stuNum = "04173011", lessonId = 40289, faceUrl = "https://oss-cn-shenzhen.aliyuncs.com/bimawen/image/face/7770BDE9E33A/ZDg3ODAxZjc0ODgyY2FlMTBiZDkxN2U3NWViMWQyOWYmc3RvcmFnZV90eXBlPW9zcw==.jpg") => {
  return dispatch => {
    axios
      .get("http://118.31.58.177:8080/Face/signIn/showOne", {
        params: {
          num: stuNum,
          lessonId: lessonId
        }
      })
      .then(res => {
        const data = res.data.data;
        data.faceUrl = faceUrl;
        // console.log(data);
        const action = getStudentAction(data);
        dispatch(action);
      });
  };
};

// 获取课程表
const getCourseListAction = data => ({
  type: GET_COURSES_LIST,
  data
});

export const getCoursesList = () => {
  return dispatch => {
    axios
      .get("http://118.31.58.177:8080/Face/courseTable/select", {
        params: {
          className: "软件1701"
        }
      })
      .then(res => {
        // console.log("res = ", res);
        const data = res.data;
        const action = getCourseListAction(data);
        dispatch(action);
      })
      .finally(() => {
        // console.log("Now we are alreday get the coursesList");
      })
      .catch(e => {
        console.log(e);
      });
  };
};
