import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions';


export const initialState = {
  notes: []
}


export const rootReducer = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state;
  }
}
