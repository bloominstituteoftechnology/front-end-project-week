import { combineReducers } from "redux";
import { notesReducer } from "./NoteReducer";

export default combineReducers({
  notes: notesReducer
});
