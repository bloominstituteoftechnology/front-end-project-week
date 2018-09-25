import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, ADD_TAG, DELETE_TAG, UPDATE_NOTES } from '../actions';


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





    // tags
    case ADD_TAG:
      let newNotesAddTag = state.notes.slice();
      newNotesAddTag.forEach(item => {
        if (item.id === action.payload.id) {
          item.tags.push(action.payload.tag)
        }
      })
    return Object.assign({}, state, { notes: newNotesAddTag });

    case DELETE_TAG:
      let newNotesDeleteTag = state.notes.slice();
      newNotesDeleteTag.forEach(item => {
        if (item.id === action.payload.id) {
          item.tags.splice(item.tags.indexOf(action.payload.tag), 1)
        }
      })
    return Object.assign({}, state, { notes: newNotesDeleteTag });
    
    default:
      return state;
  }
}
