import { notes } from '../data';
import { GET_NOTES, ADDING_NOTE } from '../Actions';

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
      case ADDING_NOTE:
      return Object.assign({}, state, {notes: action.payload})
      default:
      return state;
  }

}
export default rootReducer;