import {
  FETCHING_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADDING_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  SELECTING_NOTE,
  SELECT_NOTE_SUCCESS,
  SELECT_NOTE_FAILURE,
  EDITING_NOTE,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE,
  DELETING_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
} from '../actions';
const initialState = {
  notes: [
    //{
    //tags: ['tag', 'otherTag'],
    //title: 'Test Note One',
    //textBody: 'This is a test note!',
    //id: 0,
    //},
    //{
    //tags: ['tag', 'otherTag'],
    //title: 'Test Note Two',
    //textBody: 'This is another test note!',
    //id: 1,
    //},
  ],
  selectedNote: null,
  error: null,
  isEditing: false,
  fetching: false,
};

let id = 2;

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
        notes: state.notes.concat({...action.payload, id: id++}),
      };
    case SELECTING_NOTE:
      return {
        ...state,
        selectedNote: state.notes.find(n => `${n.id}` === action.payload),
      };
    case EDITING_NOTE:
      return {
        ...state,
        isEditing: true,
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(n => {
          if (n.id === state.selectedNote.id) {
            return {
              ...action.payload,
              id: n.id,
            };
          } else {
            return n;
          }
        }),
      };
    case DELETING_NOTE:
      return {
        ...state,
        notes: state.notes.filter(n => n.id !== action.payload),
      };
    default:
      return state;
  }
};
