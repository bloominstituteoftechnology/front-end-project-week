import { ADD_NOTE, DELETE_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      id: 0,
      title: 'I Am The Title',
      body: "I Am The Body",
    },  
  ],
  counter: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            body: action.payload.body,
            id: state.counter,
          },
        ],
        counter: ++state.counter,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => {
          return note.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;