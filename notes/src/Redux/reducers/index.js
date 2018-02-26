import { ADD_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      title: 'Go to the Store',
      body: 'Get this, this, and that.',
    },
    {
      title: 'Have fun',
      body: 'Meditate and then relax.',
    },
  ],
  somethingElse: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
