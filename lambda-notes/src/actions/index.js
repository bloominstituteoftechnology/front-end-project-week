import axios from "axios";
import Cookies from "js-cookie";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHING_NOTES_SUCCESSFUL = "FETCHING_NOTES_SUCCESSFUL";
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE";
export const CREATING_NOTE = "CREATING_NOTE";
export const CREATING_NOTE_SUCESSFULL = "CREATING_NOTE_SUCESSFULL";
export const CREATING_NOTE_FAILURE = "CREATING_NOTE_FAILURE";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";
export const UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL";
export const UPDATE_FAILURE = "UPDATE_FAILURE";
export const DELETE_ALL_SUCCESS = "DELETE_ALL_SUCCESS";
export const DELETE_ALL_FAILURE = "DELETE_ALL_FAILURE";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const IS_REGISTERING = "IS_REGISTERING";

export const getNotes = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: FETCHING_NOTES });
      setTimeout(() => {
        axios
          .get("http://localhost:9000/api/notes", {
            headers: {
              authorization: Cookies.get("token")
            }
          })
          .then(resp =>
            dispatch({ type: FETCHING_NOTES_SUCCESSFUL, payload: resp.data })
          )
          .catch(err =>
            dispatch({ type: FETCHING_NOTES_FAILURE, payload: new Error(err) })
          );
      }, 500);
    });
  };
};

export const createNote = note => {
  return dispatch => {
    dispatch({ type: CREATING_NOTE });
    axios
      .post("http://localhost:9000/api/notes", note)
      .then(resp =>
        dispatch({ type: CREATING_NOTE_SUCESSFULL, payload: resp.data })
      )
      .then(() => getNotes()(dispatch))
      .catch(err =>
        dispatch({ type: CREATING_NOTE_FAILURE, payload: new Error(err) })
      );
  };
};

export const deleteNote = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:9000/api/notes/${id}`)
      .then(() => dispatch({ type: DELETE_NOTE_SUCCESS }))
      .then(() => getNotes()(dispatch))
      .catch(err =>
        dispatch({ type: DELETE_NOTE_FAILURE, payload: new Error(err) })
      );
  };
};

export const updateNote = note => {
  return dispatch => {
    axios
      .put(`http://localhost:9000/api/notes/${note.id}`, note)
      .then(() => dispatch({ type: UPDATE_SUCCESSFUL }))
      .then(() => getNotes()(dispatch))
      .catch(err =>
        dispatch({ type: UPDATE_FAILURE, payload: new Error(err) })
      );
  };
};

export const registerUser = user => {
  return dispatch => {
    dispatch({ type: IS_REGISTERING });
    axios
      .post("http://localhost:9000/api/users/register", user)
      .then(resp => {
        localStorage.setItem('isLoggedIn', true);
        Cookies.set("token", resp.data.token);
        dispatch({ type: REGISTER_SUCCESSFUL, payload: resp.data });
      })
      .catch(error => {
        console.log(`ERR: ${error}`);
        dispatch({ type: REGISTER_FAILURE, payload: error });
      });
  };
};
