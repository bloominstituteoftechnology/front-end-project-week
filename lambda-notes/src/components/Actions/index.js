import { notesRef, provider, auth } from '../../config/firebase';

export const ERROR = "ERROR";
export const FETCH = "FETCH";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const THEME = "THEME";

// To notesReducer
export const addNote = note => async dispatch => {
  note = { ...note, date: Date.now() }
  notesRef.push().set(note);
};

export const editNote = (id, note) => async dispatch => {
  notesRef.child(id).set(note);
};

export const fetchNotes = (bool) => async dispatch => {
  bool ? console.log("fetching notes within loginUser") : console.log("");
  notesRef.on("value", snapshot => {
    dispatch({
      type: FETCH,
      payload: snapshot.val(),
    });
  });
};

export const deleteNote = id => async dispatch => {
  notesRef.child(id).remove();
};

// To userReducer

export const loginUser = () => {
  return (dispatch) => {
    auth.signInWithPopup(provider)
      .then(res => {
        return dispatch({
          type: LOGIN,
          payload: res.user,
        })
    })
      .catch(err => dispatch({
        type: ERROR,
        payload: `LOGIN: ${err}`,
      }));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    auth.signOut()
      .then(() => dispatch({
        type: LOGOUT,
      }))
      .catch(err => dispatch({
        type: ERROR,
        payload: `LOGOUT: ${err}`,
      }));
  };
};

export const changeTheme = (theme) => {
  return {
    type: THEME,
    payload: theme,
  }
}