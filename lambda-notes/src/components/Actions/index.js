import { notesRef, provider, auth } from '../../config/firebase';

export const ERROR = "ERROR";
export const FETCH = "FETCH";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const THEME = "THEME";

// To notesReducer
export const addNote = (uid, note) => async dispatch => {
  note = { ...note, date: Date.now() }
  notesRef(uid).push().set(note);
};

export const editNote = (uid, id, note) => async dispatch => {
  notesRef(uid).child(id).set(note);
};

export const fetchNotes = (uid) => dispatch => {
  // notesRef(uid).on("value", snapshot => {
  //   dispatch({
  //     type: FETCH,
  //     payload: snapshot.val(),
  //   });
  // });
  notesRef(uid).once("value")
    .then(res => dispatch({
      type: FETCH,
      payload: res.val(),
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: `FETCH: ${err}`,
    }))
};

export const deleteNote = (uid, id) => async dispatch => {
  notesRef(uid).child(id).remove();
};

// To userReducer

export const loginUser = () => {
  return (dispatch) => {
    auth.signInWithPopup(provider)
      .then(res => {
        dispatch({
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

export const persistUser = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      console.log("persistUser:",user);
      if (user) {
        dispatch({
          type: LOGIN,
          payload: user,
        });
      } else {
        dispatch({
          type: LOGOUT,
        });
      }
    });
  };
}

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