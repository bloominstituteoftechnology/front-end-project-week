import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  ADD_TAG,
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER_SUCCESS,
  ERROR,
  GET_NOTES
} from "../actions";

const initialState = {
  user: {},
  authed: false,
  notes: []
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...notes, action.note]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.slice().filter(note => note.id !== action.id)
      };
    case EDIT_NOTE:
      let copy = state.notes.slice();
      copy.filter(note => note.id !== action.id).push(action.note);
      return {
        ...state,
        notes: copy
      };
    case ADD_TAG:
      let tagCopy = state.notes.slice();
      let newNote = tagCopy.filter(note => note.id === action.id)[0];
      newNote.tags = [...newNote.tags, action.tag];
      tagCopy.filter(note => note.id !== action.id).push(newNote);
      return {
        ...state,
        notes: tagCopy
      };
    case SIGN_IN:
      return {
        ...state,
        authed: true,
        user: action.user.email,
        uid: action.user.uid
      };
    case SIGN_OUT:
      return { ...state, authed: false };
    case CREATE_USER_SUCCESS:
      return { ...state, authed: true, user: action.user };
    case ERROR:
      return { ...state, authed: false, error: action.error };
    case GET_NOTES:
      console.log("Get notes: ", action.notes);
      return { ...state, notes: action.notes };
    default:
      return state;
  }
}
