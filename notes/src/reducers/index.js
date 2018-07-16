import { FETCHING_NOTES, FETCHED_NOTES, ERROR, ADDING_NOTES,  ADD_NOTES, DELETING, DELETED, UPDATING, UPDATED } from '../actions';

 const initialState =
 {
   notes: [],
   fetchingNotes: false,
   fetchedNotes: false,
   addingNotes: false,
   addedNotes: false,
   updatingNotes: false,
   updatedNotes: false,
   deletingNotes: false,
   deletedNotes: false,
   error: null,
 }

export const NotesReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, { fetchingNotes: true })
    case FETCHED_NOTES:
      return Object.assign({}, state, { fetchingNotes: false, fetchedNotes: true, notes: action.payload})
    case ERROR:
      return Object.assign({}, state, { error: action.payload, fetchedNotes: false, fetchingNotes: false })
    case ADDING_NOTES:
      return Object.assign({}, state, { addingNotes: true, addedNotes: false});
    case ADD_NOTES:
      return Object.assign({}, state, { addingNotes: false, addedNotes: true, notes: action.payload });
    case DELETING:
      return Object.assign({}, state, { deletingNotes: true, deletedNotes: false })
    case DELETED:
      return Object.assign({}, state, { deletingNotes: false, deletedNotes: true, notes: action.payload })
      case UPDATING:
      return Object.assign({}, state, { updatingNotes: true, updatedNotes: false })
    case UPDATED:
      return Object.assign({}, state, { updatingNotes: false, updatedNotes: true, notes: action.payload })
      default: 
      return state;
    }
  }

  export default NotesReducer;