import { firebaseAuth, login, logout } from "../utilities/auth";

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const ADD_TAG = "ADD_TAG";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const ERROR = "ERROR";

let noteId = 10;

export function addNote(note) {
  return {
    type: ADD_NOTE,
    id: noteId++,
    note
  };
}
export function addTag(tag, id) {
  return {
    type: ADD_TAG,
    tag,
    id
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  };
}

export function editNote(note, id) {
  return {
    type: EDIT_NOTE,
    note,
    id
  };
}

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
  firebaseAuth
    .createUserWithEmailAndPassword(email, pw)
    .then(response => {
      return dispatch(createUserSuccess(response));
    })
    .catch(error => {
      return dispatch(errorHandler(error));
    });
};

export const signIn = (email, pw) => dispatch => {
  login(email, pw)
    .then(response => {
      console.log("Sign in function response: ", response);
      return dispatch(signInSuccess(response));
    })
    .catch(e => console.log(e.message));
};

export const signOut = () => dispatch => {
  logout().then(() => {
    dispatch({
      type: SIGN_OUT
    });
  });
};
