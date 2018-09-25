import { ADD_NOTES, TOGGLE_NOTES, REMOVE_NOTES, GET_NOTES } from '../actions';


const initialState = {
  notes: [{
    text:'hello',
    title:'!',
  }]
};
  

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NOTES:
      return {...state, notes: action.payload};
      default:
      return state;
    }
  };
  