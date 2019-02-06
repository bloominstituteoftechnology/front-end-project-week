import {
  GET_NOTES,
  FOUND_NOTES,
  ERROR,
  DELETE,
  CREATE_NOTE,
  FOUND_NOTE,
  SELECT_NOTE,
  GET_ALL
} from "../actions/actions";

const initialState = {
  notes: [],
  id: "all",
  title: "",
  textBody: "",
  message: "",
  error: ""
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return { ...state, message: action.payload };
    case FOUND_NOTES:
      return { ...state, notes: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case DELETE:
      return { ...state, message: action.payload };
    case SELECT_NOTE:
      return { ...state, id: action.payload };
    case FOUND_NOTE:
      return { ...state, notes: action.payload };
    case CREATE_NOTE:
      return { ...state, id: action.payload };
    case GET_ALL:
      return { ...state, id: "all", notes: action.payload };
    default:
      return state;
  }
};
export default noteReducer;
