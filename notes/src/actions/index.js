import {
  firebaseAuth,
  login,
  logout,
  auth,
  retrieveNotes,
  ref,
  writeNote
} from "../utilities/auth";

import firebase from "firebase";

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const ADD_TAG = "ADD_TAG";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const ERROR = "ERROR";
export const GET_NOTES = "GET_NOTES";

let noteId = 10;

export const addNote = note => dispatch => {
  console.log("Note from Action: ", note);
  writeNote({ ...note, tags: [""] }).then(response => {
    getNotes();
    return {
      type: ADD_NOTE
    };
  });
};
export function addTag(tag, id) {
  return {
    type: ADD_TAG,
    tag,
    id
  };
}

export const deleteNote = (id, uid) => dispatch => {
  ref
    .child(`users/${uid}/notes/${id}`)
    .set(null)
    .then(() => {
      getNotes();
      return {
        type: DELETE_NOTE
      };
    });
};

export const editNote = (note, id, uid) => dispatch => {
  ref.child(`users/${uid}/notes/${id}`).set(note);
  getNotes();
  return {
    type: EDIT_NOTE
  };
};

export const createUserSuccess = response => {
  return {
    type: CREATE_USER_SUCCESS,
    user: response
  };
};

export const signInSuccess = response => {
  return {
    type: SIGN_IN,
    user: response
  };
};

export const errorHandler = response => {
  return {
    type: ERROR,
    error: response
  };
};

export const createUser = (email, pw) => dispatch => {
  auth(email, pw)
    .then(response => {
      return dispatch(createUserSuccess(response));
    })
    .catch();
};

export const signIn = (email, pw) => dispatch => {
  login(email, pw).then(response => {
    return dispatch(signInSuccess(response));
  });
};

export const signOut = () => dispatch => {
  logout().then(() => {
    dispatch({
      type: SIGN_OUT
    });
  });
};

export const getNotes = () => dispatch => {
  let userId = firebase.auth().currentUser.uid;
  let notesRef = ref.child(`users/${userId}/notes/`);
  let notes = [];
  notesRef
    .once("value", function(snapshot) {
      snapshot.forEach(snap => {
        console.log(snap.val());
        notes.push(snap.val());
      });
    })
    .then(response =>
      dispatch({
        type: GET_NOTES,
        notes: notes
      })
    );
};
