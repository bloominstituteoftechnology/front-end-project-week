import { notes } from '../data';
import { GET_NOTES, ADDING_NOTE, EDIT_NOTE, SAVING_NOTE, SAVED, THEME_SWITCH } from '../Actions';

const initialState = {
    notes: notes,
    nightVision: false,
    editingContent: false,
    editingHeader: false,
    isUserLoggedIn: true,
    loginPending: false,
    logoutPending: false,
    saveInProgress: false,
    saved: false,
    gettingNotes: false,
    displayingAllNotes: false,
    searchText: '',
    theme: {primary: 'white', secondary: '#2BC1C4'}
}
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case THEME_SWITCH:
    return Object.assign({}, state, {nightVision: !state.nightVision}, {theme: action.payload})
    case SAVED:
      return Object.assign({}, state, {saveInProgress: false, saved: true})
    case SAVING_NOTE:
      return Object.assign({}, state, {saveInProgress: true})
    case EDIT_NOTE:
       let updatedNotes = [...state.notes].map(note => (note.id == action.payload.id) ? {id: action.payload.id, title: action.payload.title, content: action.payload.content} : note)
       console.log(Object.assign({}, state, {notes:updatedNotes}));
       return Object.assign({}, state, {notes:updatedNotes},  {saveInProgress: false, saved:false});
    case ADDING_NOTE:
       return (Object.assign({}, state, {notes:[...state.notes, {title: action.payload.title, id: action.payload.id, content:action.payload.content}]}, {saveInProgress: false, saved:false}))
    default:
        return state;
  }
    
}
export default rootReducer;