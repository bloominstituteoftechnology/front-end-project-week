import { ADD_NOTE } from '../actions';

// const initialState = [
//   {
//     id: 0,
//     title: 'Note Title',
//     text: 'Lorem ipsum eh idk anymore',
//   }
// ]

export const notesReducer = (state=[], action) => {
  switch(action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          title: action.payload.title,
          text: action.payload.text,
        }
      ]
    default:
      return state;
  }
}

export default notesReducer;