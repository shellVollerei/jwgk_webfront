import { GET_STUDENT_LIST } from "../actionTypes";

const defaultState = {
  info: {
    name: "fatewang",
    academy: "计算机学院",
    group: "软件1603",
    signTime: "2019-11-04 10:10:40.0",
    gender: "M",
    course: JSON.stringify({
      cdmc: " FF305  ",
      className: null,
      isDou: 0,
      jcs: "3-4",
      kcmc: "操作系统A",
      status: null,
      xm: " 陈莉君",
      xqjmc: "1",
      xqmc: " 长安校区东区 ",
      zcd: "9"
    }),
    image: "",
    num: "04163067",
    faceUrl:
      "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
  }
};

export default (state = defaultState, action) => {
  // state 为上一次所保存的数据（value），action 为用户所传递过来的描述（type）

  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case GET_STUDENT_LIST:
      // console.log(action);
      const data = JSON.parse(JSON.stringify(action.data));
      newState.info = data;
      break;
    default:
  }
  return newState || state;
};
