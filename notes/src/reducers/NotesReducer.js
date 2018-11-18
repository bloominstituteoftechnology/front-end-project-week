import {
  FETCHING,
  FETCHALL,
  FETCHONE,
  ADDED,
  UPDATED,
  DELETED,
  ERROR,
  ADD_TAG,
  ADD_TAG_TO_TAGS,
  ADD_TAGS_TO_NOTE
} from "../actions/actions";

const initialState = {
  fetching: false,
  notes: [],
  note: {},
  newNote: "",
  error: null,
  tags: [],
  tag: {}
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
        note: action.payload
      };
    case ADDED:
      return {
        ...state,
        newNote: action.payload.success
      };
    case UPDATED:
      return {
        ...state,
        notes: state.notes.map(note => {
          return note._id === action.payload._id ? action.payload : note;
        }),
        tags: []
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
    case ADD_TAG:
      return {
        ...state,
        tag: {tagText: action.payload, id: action.id}
      }
    case ADD_TAG_TO_TAGS:
      return {
          ...state,
          tags: [...state.tags, state.tag]
      }
    case ADD_TAGS_TO_NOTE:
      return {
          ...state,
          notes: state.notes.map(note => {
              return note._id === action.payload ? {...note, tags: state.tags} : note;
          }),
          tag: ""
      }
    default:
      return state;
  }
};
