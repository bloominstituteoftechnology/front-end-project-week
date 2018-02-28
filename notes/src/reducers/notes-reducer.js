
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, TOGGLE_MODAL, FETCHED_NOTES, LOGGED_IN, LOGGED_OUT } from '../actions';

export const notes = (state = [], action) => {
  switch (action.type) {

    case FETCHED_NOTES:
    console.log(action.payload);
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

let initialUser = { 
  loggedIn: false,
  username: ''
}

export const user = (state = {}, action) => {
  switch(action.type){
    case LOGGED_IN:
      console.log('logged in', action.payload);
      return { ...state, loggedIn: true, username: action.payload.username }

     case LOGGED_OUT:
      return { ...state, loggedIn: false, username: '' }

    default:
      return state;
  } 
}