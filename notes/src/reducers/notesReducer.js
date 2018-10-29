import { } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};