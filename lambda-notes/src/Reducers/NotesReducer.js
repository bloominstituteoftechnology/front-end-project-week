import * as actions from '../Actions/NoteActions';

export const notesReducer = (state={loggedIn:false, notes:[], username:''}, action) => {
  switch(action.type){
    case actions.LOGIN:
      return {...state, ...action.payload};
    case actions.GETNOTES:
      return {...action.payload};
    default:
      return state;
  }
}
