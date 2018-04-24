import * as actions from '../Actions/NoteActions';

export const notesReducer = (state=[], action) => {
  switch(action.type){
    case actions.GETNOTES:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
