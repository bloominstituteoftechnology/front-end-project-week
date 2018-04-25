import * as actions from '../Actions/NoteActions';

export const notesReducer = (state=[], action) => {
  switch(action.type){
    case actions.GETNOTES:
      return [...action.payload];
    case actions.ADDNOTE:
      return [...state, action.payload];
    case actions.UPDATENOTE:
      return state.map( obj => obj.id === action.id ? Object.assign({}, obj,action.payload) : obj);
    case actions.DELETENOTE:
      const newState = state.filter((obj) => obj.id !== action.payload);
      return [...newState];
    default:
      return state;
  }
}
