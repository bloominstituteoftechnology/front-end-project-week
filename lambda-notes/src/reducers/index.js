import { combineReducers } from "redux";
// import { noteReducer } from "./noteReducer";
import { notesReducer } from "./notesReducer";

const rootReducer = combineReducers({
  notesReducer
});

export default rootReducer;
