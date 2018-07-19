import { notes } from '../data';
import { GET_NOTES, ADDING_NOTE, EDIT_NOTE, SAVING_NOTE, SAVED, THEME_SWITCH, DONE_SAVING } from '../Actions';

const initialState = {
    notes: [],
    nightVision: false,
    editingContent: false,
    editingHeader: false,
    isUserLoggedIn: true,
    saveInProgress: false,
    saved: false,
    gettingNotes: false,
    displayingAllNotes: false,
    searchText: '',
    theme: {primary: 'white', secondary: '#2BC1C4'}
}
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_NOTES:
    return Object.assign({}, state, {notes: action.payload})
    case THEME_SWITCH:
    return Object.assign({}, state, {nightVision: !state.nightVision}, {theme: action.payload})
    case SAVED:
      return Object.assign({}, state, {saveInProgress: false, saved: true})
    case DONE_SAVING:
     return Object.assign({}, state, {saveInProgress: false, saved: false})
    case SAVING_NOTE:
      return Object.assign({}, state, {saveInProgress: true, saved: false})
    case EDIT_NOTE:
       let updatedNotes = [...state.notes].map(note => (note.id == action.payload.id) ? {id: action.payload.id, title: action.payload.title, content: action.payload.content} : note)
       console.log(Object.assign({}, state, {notes:updatedNotes}));
       return Object.assign({}, state, {saveInProgress: false, saved:false});
    case ADDING_NOTE:
  
       return (Object.assign({}, state, {saveInProgress: false, saved:false}))
    default:
        return state;
  }
    
}
export default rootReducer;