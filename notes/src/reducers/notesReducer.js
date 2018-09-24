import {} from '../actions';

const initialState = {
  notes: [],
  fetchingData: false,
  error: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
