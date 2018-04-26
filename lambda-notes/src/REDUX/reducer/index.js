import {
  FETCH_NOTES, FETCHING_ERROR, DELETED_NOTE, TOGGLE_NIGHT, REORDER, OLDEST_NEWEST, NEWEST_OLDEST, LIST
} from '../actions';

const initialState = {
  notes: [],
  error: "",
  listView: false,
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

      case REORDER:
      debugger;
        return {
          ...state,
          // notes: [...state.notes.splice(action.payload.id)]
        }

    default:
      return state;
  }
}