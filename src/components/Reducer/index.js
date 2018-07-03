import { combineReducers } from "redux";

import notes from "./notesReducer";
import auth from "./authReducer";

export default combineReducers({
    notes,
    auth
});