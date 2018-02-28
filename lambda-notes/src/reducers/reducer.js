import * as actionTypes from '../actions/actions';

const initialState = {
  notes: [{
      title: 'No Notes Yet',
      body: 'Click create new note to start.',
      id: 0,
  }],
  addingNote: false,
  currentNote: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDNOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        addingNote: true,
      };
      case actionTypes.GETNOTE:
      return {
        ...state,
        currentNote: action.payload,
      };
    default:
      return state;
  }
};
