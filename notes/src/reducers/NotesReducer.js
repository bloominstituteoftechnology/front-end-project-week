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
  ADD_TAGS_TO_NOTE,
  CHANGE_TAG_IDS
} from "../actions/actions";

const initialState = {
  fetching: false,
  notes: [],
  note: {},
  newNote: "",
  error: null,
  tags: [],
  tag: {},
  newTags: [],
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
        note: action.payload,
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
        tag: {tagText: action.payload, id: action.id, date: action.date}
      }
    case ADD_TAG_TO_TAGS:
      return {
          ...state,
          newTags: [...state.newTags, state.tag]
      }

    case CHANGE_TAG_IDS:
      return {
        ...state,
        newTags: state.newTags.map(tag => {
            return {...tag, id: action.payload}
          })
      }

    case ADD_TAGS_TO_NOTE:
      return {
          ...state,
          // notes: state.notes.map(note => {
          //     return note._id === action.payload ? {...note, tags: state.tags} : note;
          // }),
          tags: [...state.tags, ...state.newTags],
          newTags: [],
          tag: ""
      }
    default:
      return state;
  }
};
