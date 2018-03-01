
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, TOGGLE_MODAL, FETCHED_NOTES, LOGGED_IN, LOGGED_OUT, LOGIN_ERROR, FETCHING_NOTES } from '../actions';

export const notes = (state = [], action) => {
  switch (action.type) {

    case FETCHED_NOTES:
      return action.payload;
  
    case ADD_NOTE:
      return [ ...state, action.payload ];

      case DELETE_NOTE:
      return state.filter((note) => {
      	return note.id !== action.payload;
      });

      case EDIT_NOTE:
	      return state.map((note)=>{
        if(note.id === action.payload.id){
          return action.payload;
        }
        return note;
      });

      case LOGGED_OUT:
        return [];

    default:
      return state;
  }
};

const initialModal = {showing: false, deleteId: null}

export const modal = (state = initialModal, action) => {
  switch(action.type){
    case TOGGLE_MODAL:
      return { ...state, showing: !state.showing, deleteId: action.payload }

    case DELETE_NOTE:
      return { ...state, showing: !state.showing, deleteId: null}

    default:
      return state;
  } 
}

let initialMisc = {
  username: sessionStorage.getItem('username'),
  fetching_notes: false,
  loginError: ''
}
console.log('log out outisde of switch');

export const misc = (state = initialMisc, action) => {
  switch(action.type){
    case LOGGED_IN:
      return { ...state, username: action.payload.username, loginError: '' }

    case LOGGED_OUT:
      return { ...state, username: null }

    case FETCHING_NOTES:
      return { ...state, fetching_notes: true }

    case FETCHED_NOTES:
      return { ...state, fetching_notes: false }

    case LOGIN_ERROR:
      return { ...state, loginError: action.payload }


    default:
      return state;
  }

  
}