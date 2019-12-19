import { combineReducers } from "redux";

import studentMessage from "./studentsMessage";
import classMessage from "./classMessage";
import graphMessage from "./graphMessage";
import studentInfo from './studentInfo'

export default combineReducers({
  studentMessage,
  classMessage,
  graphMessage,
  studentInfo
});
