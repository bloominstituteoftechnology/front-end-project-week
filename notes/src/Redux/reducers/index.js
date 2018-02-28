import { ADD_NOTE } from '../actions';
import initialState  from './NoteData';

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NOTE:
      console.log('action.payload.title: ', action.payload.title);
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            body: action.payload.body,
            id: (action.payload.id = state.countID),
          },
        ],
        countID: ++state.countID,
      };
    default:
      return state;
  }
};

export default reducer;
