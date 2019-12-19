import { GET_COURSES_LIST } from "../actionTypes";

// reducer 可以接收 state，但绝不能修改 state。return 出来的数据最终返回给了 store
const defaultState = {
  courseList: [],
  dataSource: [
    {
      key: "1",
      Monday: JSON.stringify({
        cdmc: " FF305 ",
        jcs: "3-4",
        kcmc: "操作系统A",
        xm: " 陈莉君",
        xqjmc: null,
        xqmc: " 长安校区东区 ",
        zcd: "1-16",
        className: null,
        isDou: 0,
        status: null
      }),
      Tuesday: JSON.stringify({
        cdmc: " FF305 ",
        jcs: "3-4",
        kcmc: "操作系统A",
        xm: " 陈莉君",
        xqjmc: null,
        xqmc: " 长安校区东区 ",
        zcd: "1-16",
        className: null,
        isDou: 0,
        status: null
      }),
      Wednesday: JSON.stringify({
        cdmc: " FF305 ",
        jcs: "3-4",
        kcmc: "操作系统A",
        xm: " 陈莉君",
        xqjmc: null,
        xqmc: " 长安校区东区 ",
        zcd: "1-16",
        className: null,
        isDou: 0,
        status: null
      }),
      Thursday: JSON.stringify({
        cdmc: " FF305 ",
        jcs: "3-4",
        kcmc: "操作系统A",
        xm: " 陈莉君",
        xqjmc: null,
        xqmc: " 长安校区东区 ",
        zcd: "1-16",
        className: null,
        isDou: 0,
        status: null
      }),
      Friday: JSON.stringify({
        cdmc: " FF305 ",
        jcs: "3-4",
        kcmc: "操作系统A",
        xm: " 陈莉君",
        xqjmc: null,
        xqmc: " 长安校区东区 ",
        zcd: "1-16",
        className: null,
        isDou: 0,
        status: null
      })
    }
  ],
  columns: [
    {
      title: "Monday",
      dataIndex: "Monday",
      key: "Monday"
    },
    {
      title: "Tuesday",
      dataIndex: "Tuesday",
      key: "Tuesday"
    },
    {
      title: "Wednesday",
      dataIndex: "Wednesday",
      key: "Wednesday"
    },
    {
      title: "Thursday",
      dataIndex: "Thursday",
      key: "Thursday"
    },
    {
      title: "Friday",
      dataIndex: "Friday",
      key: "Friday"
    }
  ]
};

// function jsonToString(data) {
//   let newData = new Array(5);

//   return;
// }

function initData(data) {
  const newData = new Array(5),
    index = 0;

  newData[0] = {
    key: index,
    Monday: data.slice(0, 1)[0],
    Tuesday: data.slice(5, 6)[0],
    Wednesday: data.slice(10, 11)[0],
    Thursday: data.slice(15, 16)[0],
    Friday: data.slice(20, 21)[0]
  };
  newData[1] = {
    key: index + 1,
    Monday: data.slice(1, 2)[0],
    Tuesday: data.slice(6, 7)[0],
    Wednesday: data.slice(11, 12)[0],
    Thursday: data.slice(16, 17)[0],
    Friday: data.slice(21, 22)[0]
  };
  newData[2] = {
    key: index + 2,
    Monday: data.slice(2, 3)[0],
    Tuesday: data.slice(7, 8)[0],
    Wednesday: data.slice(12, 13)[0],
    Thursday: data.slice(17, 18)[0],
    Friday: data.slice(22, 23)[0]
  };
  newData[3] = {
    key: index + 3,
    Monday: data.slice(3, 4)[0],
    Tuesday: data.slice(8, 9)[0],
    Wednesday: data.slice(13, 14)[0],
    Thursday: data.slice(18, 19)[0],
    Friday: data.slice(23, 24)[0]
  };
  newData[4] = {
    key: index + 4,
    Monday: data.slice(4, 5)[0],
    Tuesday: data.slice(9, 10)[0],
    Wednesday: data.slice(14, 15)[0],
    Thursday: data.slice(19, 20)[0],
    Friday: data.slice(24, 25)[0]
  };

  return newData;
}

export default (state = defaultState, action) => {
  // state 为上一次所保存的数据（value），action 为用户所传递过来的描述（type）
  // console.log("state = ", state);
  // console.log("action = ", action);

  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case GET_COURSES_LIST:
      const Data = action.data.data;
      // console.log(Data);

      // newState.courseList.Monday = Data.slice(0, 5);
      // newState.courseList.Tuesday = Data.slice(5, 10);
      // newState.courseList.Wednesday = Data.slice(10, 15);
      // newState.courseList.Thursday = Data.slice(15, 20);
      // newState.courseList.Friday = Data.slice(20, 25);

      newState.dataSource = initData(Data);
      // newState.dataSource = jsonToString(newState.dataSource);

      // console.log(newState.dataSource);

      break;
    default:
  }
  return newState || state;
};
