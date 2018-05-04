import {
  FETCHED,
  FETCHING,
  ERROR,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  REORDER_NOTES,
  LOGGED_IN,
  LOGGING_IN,
  SIGNING_IN,
  USER_REGISTERED
} from '../actions';

const initialState = {
  notes: [],
  modal: false,
  loggingIn: false,
  loggedIn: false,
  error: null,
  signingIn: false,
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            _id: action._id,
            title: action.title,
            text: action.text
          }
        ]
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          console.log('THIS IS note._id', note._id);
          console.log('typeof(note._id)', typeof note._id);
          // iterates over ALL notes and returns untouched note UNLESS the
          // if conditional below is met.  You need to do this otherwise
          // ALL notes will be changed.
          // FIXED this in actions: note._id is a number, while action._id is a string.
          if (note._id === action._id) {
            return {
              _id: action._id,
              title: action.title,
              text: action.text
            };
          }
          return note;
        })
      };
    case DELETE_NOTE:
      return {
        ...state,
        // filter returns an array with only the notes that do not
        // match action._id - the currently viewed note.
        notes: state.notes.filter(note => note._id !== action._id)
      };
    case FETCHING:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED:
      return { ...state, notes: action.notes, fetching: false, error: null };
    case REORDER_NOTES:
      return { ...state, notes: action.payload };
    case LOGGED_IN:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true
      };
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      };
    case SIGNING_IN:
      return {
        ...state,
        signingIn: true
      };
    case USER_REGISTERED:
      return {
        ...state,
        signingIn: false
      };

    default:
      return state;
  }
};

export default noteReducer;
