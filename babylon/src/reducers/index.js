import { ADD_NOTE, } from '../actions';

const intitialState = {
  notes: [],
};

export default (state = [], action) => {
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
