import axios from "axios";

export const FETCH_NOTES = "FETCH_NOTES";
export const FETCHED = "FETCHED";
export const ADD_NOTE = "ADD_NOTE";
export const ADDED = "ADDED";
export const UPDATE_NOTES = "UPDATE_NOTES";
export const UPDATED = "UPDATED";
export const DELETE_NOTE = "DELETE_NOTE";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

// backend project URL: const URL = "http://localhost:8888/api/notes"

export const fetchingNotes = () => {
  return dispatch => {
    dispatch({
      type: FETCH_NOTES
    });
    axios
      // .get(`${URL}`)
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCHED,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "error"
        });
      });
  };
};

export const createNote = note => {
  return dispatch => {
    dispatch({
      type: ADD_NOTE
    });
    axios
      // .post(`${URL}`, note)
      .post("https://killer-notes.herokuapp.com/note/create", note)
      .then(response => {
        console.log(response);
        dispatch({
          type: ADDED,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "error"
        });
      });
  };
};

export const editNote = (note, id) => {
  return dispatch => {
    dispatch({
      type: UPDATE_NOTES
    });
    axios
      // .put(`${URL}/${id}`, note)
      .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, note)
      .then(response => {
        console.log(response);
        dispatch({
          type: UPDATED,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "error"
        });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({
      type: DELETE_NOTE
    });
    axios
      // .delete(`${URL}/${id}`)
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response);
        dispatch({
          type: DELETED,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: "error"
        });
      });
  };
};
