import { ADD_NOTE, UPDATE_SELECTED } from '../actions';

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
          selected: false,
        }
      ]
    case UPDATE_SELECTED:
      return state.map(note => {
        if (note.id === action.payload) return { ...note, selected: !note.selected };
        else return note;
      })
    default:
      return state;
  }
}

export default notesReducer;