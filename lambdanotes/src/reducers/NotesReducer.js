import { ADD_NOTES, TOGGLE_NOTES, REMOVE_NOTES, GET_NOTES } from '../actions';


const initialState = {
  notes: []
};
  

export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_NOTES:
      return Object.assign({}, state, action.payload);
      case TOGGLE_NOTES:
        return state.map(note => {
          if (note.id === action.payload) {
            return Object.assign({}, note, { completed: !note.completed });
          }
          return note;
        });
      case REMOVE_NOTES:
        return state.filter(note => !note.completed);
      case GET_NOTES:
        return action.payload;
      default:
        return state;
    }
  };
  