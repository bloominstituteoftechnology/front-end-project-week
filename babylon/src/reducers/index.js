import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, TOGGLE_DELETE, TITLE_SORT, OLDEST_SORT, NEWEST_SORT, UPDATE_SEARCH, SHOW_NOTES } from '../actions';
import dummyData from '../dummydata';

const initialState = {
  notes: [...dummyData],
  deleteActive: false,
  sortStatus: 'Unsorted',
  input: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        sortStatus: 'Unsorted',
        notes: [...state.notes, {
          id: action.id,
          title: action.title,
          body: action.body,
          created: action.created,
          stamp: action.stamp,
        }
        ],
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((val) => {
          if (val.id.toString() === action.id) {
            return {
              id: Number(action.id),
              title: action.title,
              body: action.body,
              created: val.created,
              stamp: val.stamp,
            };
          } return val;
        }),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(val => val.id.toString() !== action.id),
      };
    case TOGGLE_DELETE:
      return {
        ...state,
        deleteActive: !state.deleteActive,
      };
    case TITLE_SORT:
      return {
        ...state,
        sortStatus: 'A - Z',
        notes: [...state.notes].sort((a, b) => {
          return a.title > b.title;
        }),
      };
    case NEWEST_SORT:
      return {
        ...state,
        sortStatus: 'Most Recent',
        notes: [...state.notes].sort((a, b) => {
          return a.created < b.created;
        }),
      };
    case OLDEST_SORT:
      return {
        ...state,
        sortStatus: 'Oldest',
        notes: [...state.notes].sort((a, b) => {
          return a.created > b.created;
        }),
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        input: action.input,
        notes: [...state.notes].map((val) => {
          if (!val.title.includes(state.input) && !val.body.includes(state.input)) {
            return { ...val, filtered: true };
          } return { ...val, filtered: false };
        }),
      };
    case SHOW_NOTES:
      return {
        ...state,
        input: '',
        notes: [...state.notes].map((val) => {
          return { ...val, filtered: false };
        }),
      };
    default:
      return state;
  }
};
