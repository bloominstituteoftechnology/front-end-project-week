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
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        console.log(res.data, "DELETE RESPONSE");
        dispatch({ type: DELETE_NOTE, payload: res.data });
      })
      .catch(err => {
        console.log(err, "ERROR");
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const editNote = ({ title, textBody, _id }) => {
  return dispatch => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${_id}`, {
        title,
        textBody
      })
      .then(res => {
        console.log(res.data, "RESPONSE FROM SERVER");
        dispatch({ type: EDIT_NOTE, payload: res.data });
      })
      .catch(err => {
        console.log(err, "ERRROR EDITING");
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const getNotes = () => {
  const promise = axios.get("https://fe-notes.herokuapp.com/note/get/all");
  return dispatch => {
    dispatch({ type: GET_NOTES });
    promise
      .then(res => {
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
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(res => {
        dispatch({ type: CREATE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
