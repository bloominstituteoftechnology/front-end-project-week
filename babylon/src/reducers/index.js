import { ADD_NOTE, } from '../actions';
import dummyData from '../dummydata';

const initialState = {
  notes: [...dummyData],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, {
          id: action.id,
          title: action.title,
          body: action.body,
        }
        ],
      };
    default:
      return state;
  }
};
