import axios from "axios";

// some variables
const url = "http://localhost:8800/api/notes/";
const userUrl = null;

// getNotes action creator
export const getNotes = () => {
  return dispatch => {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "NOTES_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// addNotes action creator
export const addNote = newNote => {
  return dispatch => {
    axios
      .post(url, newNote)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// getNote action creator
export const getNote = id => {
  return dispatch => {
    axios
      .get(`${url}${id}`)
      .then(response => {
        dispatch({ type: "NOTE_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// editNote action creator
export const editNote = editedNote => {
  return dispatch => {
    axios
      .put(`${url}${editedNote.id}`, editedNote)
      .then(response => {
        dispatch({ type: "NOTE_EDITED", payload: response.data });
      })
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// deleteNote action creator
export const deleteNote = id => {
  return dispatch => {
    axios
      .delete(`${url}${id}`)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// users

export const getUsers = () => {
  return dispatch => {
    axios
      .get(userUrl)
      .then(response => {
        dispatch({ type: "USERS_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// getNote action creator
export const getUser = id => {
  return dispatch => {
    axios
      .get(`${userUrl}${id}`)
      .then(response => {
        dispatch({ type: "USER_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// TODO: signUp action creator
export const signUp = credentials => {
  return dispatch => {
    axios
      .push(`${url}`)
      .then(() => getUsers()(dispatch))
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// TODO: signIn action creator
