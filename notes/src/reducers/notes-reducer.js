
import { ADD_NOTE } from '../actions';

const initialState = {
  notes: [{title: 'test note title', content: 'test for initial note content'}]
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};