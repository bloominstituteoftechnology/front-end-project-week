import {initialState} from "../initialState";

export default function notesReducer(state = initialState, action) {

  switch (action.type) {

    case "SAVE_NOTE":
      return Object.assign({}, state, {
        notes: state.notes.concat({
          title: action.payload.title,
          message: action.payload.message,
          id: state.id + 1
        }),
        id: state.id + 1
      });
    case "UPDATE_NOTE": {
      const updatedNotes = state.notes;
      const note = updatedNotes.filter(note => note.id === action.payload.id)[0];
      note.title = action.payload.title;
      note.message = action.payload.message;
      return Object.assign({}, state, {notes: updatedNotes});
    }
    case "DELETE_NOTE": {
      const updatedNotes = state.notes.filter(note => note.id !== action.payload);
      return Object.assign({}, state, {notes: updatedNotes});
    }
    default:
      return state;
  }
}
