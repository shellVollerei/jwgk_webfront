import { GET_STUDENTS_LIST } from "../actionTypes";

// reducer 可以接收 state，但绝不能修改 state。return 出来的数据最终返回给了 store
const defaultState = {
  arriveList: [
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://oss-cn-shenzhen.aliyuncs.com/bimawen/image/face/7770BDE9E33A/ZDg3ODAxZjc0ODgyY2FlMTBiZDkxN2U3NWViMWQyOWYmc3RvcmFnZV90eXBlPW9zcw==.jpg"
    },
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    }
  ],

  lateList: [
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    }
  ],

  absentList: [
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    },
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    },
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    },
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    },
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    },
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    },
    {
      signinId: 2,
      lessonId: 40289,
      num: "04173010",
      count: 1,
      status: 0,
      faceUrl:
        "https://i0.hdslb.com/bfs/archive/fec5e009989c7dc2a20844db52ff32e62aca1828.jpg@336w_190h.webp"
    }
  ]
};

export default (state = defaultState, action) => {
  // state 为上一次所保存的数据（value），action 为用户所传递过来的描述（type）
  // console.log("state = ", state);
  // console.log("action = ", action);

  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case GET_STUDENTS_LIST:
      // console.log(action.data.data);
      newState.arriveList = action.data.data[0];
      newState.lateList = action.data.data[1];
      newState.absentList = action.data.data[2];
      newState.msg = action.data.err;
      break;
    default:
  }
  return newState || state;
};
