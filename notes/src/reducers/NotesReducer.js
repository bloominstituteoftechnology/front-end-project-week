import {
  FETCHING,
  FETCHALL,
  FETCHONE,
  ADDED,
  UPDATED,
  DELETED,
  ERROR,
  FETCHALLTAGS,
  FETCHONETAG,
  ADDEDTAG,
  UPDATEDTAG,
  DELETEDTAG,
  FETCHNOTETAGS,
  REGISTER,
  LOGIN,
  LOGOUT,
  FETCHUSER
  // REGISTERING,
  // LOGGING_IN,
  // LOGGING_OUT
} from "../actions/actions";

const initialState = {
  fetching: false,
  notes: [],
  note: {},
  newNote: "",
  error: null,
  tags: [],
  tag: {},
  newTag: "",
  noteTags: [],
  registered: false,
  loggedIn: false,
  user: {},
  token: "",
  personal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case FETCHALL:
      return {
        ...state,
        fetching: false,
        notes: [...action.payload],
      };
    case FETCHONE:
      return {
        ...state,
        fetching: false,
        note: action.payload[0],
      };
    case FETCHUSER:
      return {
        ...state,
        fetching: false,
        user: action.payload
      }
    case ADDED:
      return {
        ...state,
        newNote: action.payload.success
      };
    case UPDATED:
      return {
        ...state,
        notes: state.notes.map(note => {
          return note.id === action.payload.id ? action.payload : note;
        }),
      };
    case DELETED:
      return {
        ...state
      };
    case ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
      case FETCHALLTAGS:
      return {
        ...state,
        fetching: false,
        tags: [...action.payload],
      };
    case FETCHNOTETAGS:
    return {
      ...state,
      fetching: false,
      noteTags: [...action.payload],
    };
    case FETCHONETAG:
      return {
        ...state,
        fetching: false,
        tag: action.payload[0],
      };

      case ADDEDTAG:
      return {
        ...state,
        newTag: action.payload.success
      };
    case UPDATEDTAG:
      return {
        ...state,
        tags: state.tags.map(tag => {
          return tag.id === action.payload.id ? action.payload : tag;
        }),
      };
    case DELETEDTAG:
      return {
        ...state
      };
    case REGISTER:
    return {
      ...state,
      registered: true,
      loggedIn: true,
      fetching: false,
      token: action.payload,
      user: action.user
    }
    case LOGIN:
    return {
      ...state,
      loggedIn: true,
      fetching: false,
      user: action.user,
      token: action.payload
    }
    case LOGOUT:
    return {
      ...state,
      fetching: false,
      registered: false,
      loggedIn: false,
      token: "",
      user: {}
    }
    default:
      return state;
  }
};
