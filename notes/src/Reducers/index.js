import { notes } from '../data';
import { GET_NOTES, ADDING_NOTE, EDIT_NOTE } from '../Actions';

const initialState = {
    notes: notes,
    editingContent: false,
    editingHeader: false,
    isUserLoggedIn: true,
    loginPending: false,
    logoutPending: false,
    saveInProgress: false,
    gettingNotes: false,
    displayingAllNotes: false,
    searchText: ''
}
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    //   case GET_NOTES:
    //   return console.log('getting notes')
    case EDIT_NOTE:
    let updatedNotes = [...state.notes].map(note => (note.id == action.payload.id) ? {id: action.payload.id, title: action.payload.title, content: action.payload.content} : note)

  console.log(Object.assign({}, {notes:updatedNotes}));
    return Object.assign({}, {notes:updatedNotes});

      case ADDING_NOTE:
      return (
        
        Object.assign({}, {notes:[...state.notes, {title: action.payload.title, id: action.payload.id, content:action.payload.content}]}))
      default:
      return state;
  }
    
}
export default rootReducer;