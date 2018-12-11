import axios from "axios";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const GET_NOTES = "GET_NOTES";
export const NOTES_SUCCESS = "NOTES_SUCCESS";
export const ERROR = "ERROR";
export const CREATE = "CREATE";

export const deleteNote = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:9000/api/notes/${id}`)
      .then(res => {
        dispatch({ type: DELETE_NOTE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const editNote = ({ title, content, id }) => {
  return dispatch => {
    axios
      .put(`http://localhost:9000/api/notes/${id}`, {
        title,
        content,
      id
      })
      .then(res => {
        dispatch({ type: EDIT_NOTE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const getNotes = () => {
  const promise = axios.get("http://localhost:9000/api/notes/");
  return dispatch => {
    dispatch({ type: GET_NOTES });
    promise
      .then(res => {
        console.log(res);
        dispatch({ type: NOTES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createNote = note => {
  return dispatch => {
    axios
      .post("http://localhost:9000/api/notes/", note)
      .then(res => {
        dispatch({ type: CREATE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
