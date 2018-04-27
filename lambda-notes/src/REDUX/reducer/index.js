import {
  FETCH_NOTES, FETCHING_ERROR, DELETED_NOTE, 
  TOGGLE_NIGHT, REORDER, OLDEST_NEWEST, 
  NEWEST_OLDEST, LIST, SORT_TITLE, NEW_USER,
  SET_HOME, HANDLE_TAGS
} from '../actions';

const initialState = {
  notes: [],
  error: "",
  listView: false,
  username: "",
  isHome: false,
  night: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        notes: [...action.payload]
      }

    case FETCHING_ERROR:
      return {
        ...state,
        error: "We couldn't retrieve your notes!"
      }

    case DELETED_NOTE:
      return {
        ...state,
        notes: [...action.payload]
      }

    case TOGGLE_NIGHT:
      return {
        ...state,
        night: !state.night
      }

    case OLDEST_NEWEST: 
      return {
        ...state,
        notes: [...state.notes].sort((a, b) => { return b.id - a.id })
      }

    case NEWEST_OLDEST:
      return {
        ...state,
        notes: [...state.notes].sort((a, b) => { return a.id - b.id })
      }

    case LIST:
      return {
        ...state,
        listView: !state.listView
      }

    case SORT_TITLE:
      return {
        ...state,
        notes: [...state.notes].sort((a, b) => { 
          const nameA = a.title.toUpperCase(), nameB = b.title.toUpperCase(); // ignore upper and lowercase
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        })
      }

    case NEW_USER:
      return {
        ...state,
        username: action.payload
      }

    case SET_HOME:
      return {
        ...state,
        isHome: action.payload
      }

    case HANDLE_TAGS:
      return {
        ...state,
        notes: [...state.notes].map(note => {
          if (note.id == action.payload.id) {
            note.tags = [...note.tags, ...action.payload.tags].reduce((acc, el, index) => {
              if (!acc.includes(el)) acc.push(el);
              return acc;
            }, []);
            return note;
          } else {
            return note;
          }
        })
      }

    default:
      return state;
  }
}