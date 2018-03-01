import { combineReducers } from "redux";
import todos from "./todos";
import showNote from "./showNote";

const lambdaNote = combineReducers({
  todos,
  showNote
});

export default lambdaNote;
