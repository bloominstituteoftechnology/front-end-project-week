import { ADD_NEW_NOTE, PREVIEW_NEW_NOTE } from '../actions/index';


const defaultState = {
  newNote: {
    title: '',
    text: '',
  }
};

export const addNoteReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_NEW_NOTE:
      return state;
    case PREVIEW_NEW_NOTE:
      return Object.assign({}, state, { newNote: action.newNote });
    default:
      return state;
  }
}
