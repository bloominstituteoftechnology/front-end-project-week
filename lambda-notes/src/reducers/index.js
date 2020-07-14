import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  user: userReducer
});

export default rootReducer;
