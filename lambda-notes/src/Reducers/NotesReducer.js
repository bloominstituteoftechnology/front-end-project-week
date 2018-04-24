import * as actions from '../Actions/NoteActions';

export const notesReducer = (state=[], action) => {
  switch(action.type){
    case actions.GETNOTES:
      return [...action.payload];
    case actions.ADDNOTE:
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}
