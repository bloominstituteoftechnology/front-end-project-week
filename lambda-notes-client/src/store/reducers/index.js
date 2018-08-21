import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions';


export const initialState = {
  notes: [
    {
      id: 1,
      title: 'Hello Note',
      description: 'This is the description of the note that I am going to make'
    },
    {
      id: 2,
      title: 'Hello Noteeee',
      description: 'This is the description of the note that I am going to make'
    },
  ]
}


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NOTE:
      let newState = state.notes.filter(item => item.id !== action.payload)
    return Object.assign({}, state, { notes: newState });

    case EDIT_NOTE:
      let newwNotes = state.notes.slice();
      newwNotes.forEach(item => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title
          item.description = action.payload.description
        }
      })
    return Object.assign({}, state, { notes: newwNotes });

    case ADD_NOTE:
      let newNotes = state.notes.slice();
      let id = state.notes.length + 1;
      let newNote = { ...action.payload, id: id };
      newNotes.push(newNote);
    return Object.assign({}, state, { notes: newNotes });
    default:
      return state;
  }
}
