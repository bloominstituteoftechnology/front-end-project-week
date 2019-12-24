import {
   ADD_NOTE, 
   EDIT_NOTE, 
   DELETE_NOTE,
   UPDATE_NOTES
} from '../actions';


export const initialState = {
  notes: []
}


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_NOTES:
    return Object.assign({}, state, { notes: action.payload });

    case DELETE_NOTE:
      let newState = state.notes.filter(item => item.id !== action.payload)
    return Object.assign({}, state, { notes: newState });

    case EDIT_NOTE:
      let newNotesEdit = state.notes.slice();
      newNotesEdit.forEach(item => {
        if (item.id === action.payload.id) {
          item.id = action.payload.id
          item.title = action.payload.title
          item.description = action.payload.description
        }
      })
    return Object.assign({}, state, { notes: newNotesEdit });

    case ADD_NOTE:
      let newNotesAdd = state.notes.slice();

      let newNote = { ...action.payload };
      newNotesAdd.push(newNote);
    return Object.assign({}, state, { notes: newNotesAdd });

    default:
      return state;
  }
}
