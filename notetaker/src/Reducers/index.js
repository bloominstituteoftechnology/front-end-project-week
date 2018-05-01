import { FETCH, ADD } from '../Actions';

const initialState = {
    friendsFetched: false,
    notes: [],
}


export const notesReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH:
      return {...state, friendsFetched: true, notes: state.notes.concat(action.notes)}
    case ADD:
      return {...state, notes: [...action.notes]}
    default: 
      return state;
    }
}
