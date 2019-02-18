import {
  SUCCESS,
  FETCHING,
  ERROR,
  SUCCESS_SINGLE,
  UPDATE,
  FILTER,
  SIGNIN,
  AUTH
} from "../actions";

const initialState = {
  notes: [
    {
      tags: [],
      title: "",
      textBody: ""
    }
  ],
  singleNote: {
    tags: [],
    title: "",
    textBody: ""
  },
  filteredNotes: [],
  allTags: [],
  fetching: false,
  updating: false,
  error: "",
  signedOut: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case SUCCESS:
      return Object.assign({}, state, {
        notes: action.payload,
        filteredNotes: action.payload,
        fetching: false,
        error: ""
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    case SUCCESS_SINGLE:
      return Object.assign({}, state, {
        singleNote: action.payload,
        fetching: false,
        updating: false,
        error: ""
      });
    case UPDATE:
      return Object.assign({}, state, { updating: true });
    case FILTER:
      return Object.assign({}, state, { filteredNotes: action.payload });
    case SIGNIN:
      localStorage.setItem("jwt", action.payload.token);
      return Object.assign({}, state, { signedOut: false });
    case AUTH:
      if (action.payload.user) {
        return Object.assign({}, state, { signedOut: false });
      } else {
        return Object.assign({}, state, { signedOut: true });
      }
    default:
      return state;
  }
};
