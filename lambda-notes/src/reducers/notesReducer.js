import { FETCHING, SUCCESS, FAILURE, POSTING, CREATED, UPDATING, UPDATED } from "../actions";
const initialState = {
  notes: [],
  fetching: false,
  error: "",
  relID: "",
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
     case FETCHING:
        return { ...state, fetching: true, relID: "" };
    case SUCCESS:
        return { ...state, notes: action.payload, fetching: false };
    case FAILURE:
        return { ...state, fetching: false, error: action.payload, relID: "" };
    case POSTING:
        return { ...state, fetching: true, relID: "" };
    case CREATED:
        return { ...state, fetching: false, relID: action.payload };
    case UPDATING:
        return { ...state, fetching: true, relID: "" };
    case UPDATED:
        return { ...state, fetching: false, relID: action.payload["_id"] };
    default:
      return state;
  }
};
