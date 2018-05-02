import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GETTING,
  GOT,
  ADD_TAG,
  SIGN_IN,
  SIGN_OUT,
  CREATE_USER,
  ERROR
} from "../actions";

const initialState = {
  user: {},
  authed: localStorage.getItem("notesAuthToken") ? true : false,
  notes: []
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.note }]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.slice().filter(note => note._id !== action.id)
      };
    case EDIT_NOTE:
      let copy = state.notes.slice();
      console.log("Note in reducer: ", action.note);
      copy.filter(note => {
        return note._id.toString() !== action.id.toString();
      });
      console.log("Copied Array from Reducer: ", copy, action.id);
      return {
        ...state,
        notes: copy
      };
    case GETTING:
      return { ...state, getting: true };
    case GOT:
      return {
        ...state,
        getting: false,
        notes: action.notes,
        error: null
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
      console.log("Sign In Reducer Fired");
      return { ...state, authed: true, user: action.user.username };
    case SIGN_OUT:
      return { ...state, authed: false };
    case CREATE_USER:
      return { ...state, authed: true, user: action.user.username };
    case ERROR:
      console.log("Error reducer fired: ", action.error);
      return { ...state, authed: false, error: action.error };
    default:
      return state;
  }
}
