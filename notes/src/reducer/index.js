// Data
import notes from '../data/notes';

// Action types

const initialState = {
  notes: notes,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;