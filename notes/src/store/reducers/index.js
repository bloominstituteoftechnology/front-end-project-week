import {
  FETCHING_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADDING_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  SELECTING_NOTE,
  //SELECT_NOTE_SUCCESS,
  //SELECT_NOTE_FAILURE,
  EDITING_NOTE,
  EDIT_NOTE_SUCCESS,
  //EDIT_NOTE_FAILURE,
  SHOW_MODAL,
  HIDE_MODAL,
  DELETING_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
} from '../actions';
const initialState = {
  notes: [],
  selectedNote: null,
  error: null,
  isEditing: false,
  fetching: false, // WORKING ON CSV EXPORT
  deleting: false,
  adding: false,
  showingModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        fetching: false,
        notes: action.payload,
      };
    case FETCH_NOTES_FAILURE:
      console.log('reducer failure', action.payload);
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case ADDING_NOTE:
      console.log('adding note reducer');
      return {
        ...state,
        isEditing: false,
        adding: true,
        //notes: state.notes.concat({...action.payload}),
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        adding: false,
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        adding: false,
        error: action.payload,
      };

    case SELECTING_NOTE:
      return {
        ...state,
        selectedNote: state.notes.find(n => `${n._id}` === action.payload),
      };
    case EDITING_NOTE:
      return {
        ...state,
        isEditing: true,
      };
    case EDIT_NOTE_SUCCESS:
      console.log('edit success', action.payload);
      return {
        ...state,
        isEditing: false,
        //notes: state.notes.map(n => {
        //if (n._id === action.payload._id) {
        //return {
        //...action.payload,
        //};
        //} else {
        //return n;
        //}
        //}),
      };
    case SHOW_MODAL:
      return {
        ...state,
        showingModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showingModal: false,
      };
    case DELETING_NOTE:
      return {
        ...state,
        deleting: true,
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        //notes: state.notes.filter(n => n.id !== action.payload),
        deleting: false,
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        deleting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
