import axios from "axios";
export const SUBMIT_NEW_NOTE = "SUBMIT_NEW_NOTE";
export const FETCH_SINGLE_NOTE = "FETCH_SINGLE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const FETCH_NOTES = "FETCH_NOTES";
export const ERROR = "ERROR";

let home_path = "http://localhost:3000/";

export const submitNewNote = newNote => {
  return function(dispatch) {
    axios
      .post(
        `https://killer-notes.herokuapp.com/note/create`,
        newNote
      )
      .then(({ data }) => {
        window.location.href = home_path;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchSingleNote = id => {
  return {
    type: FETCH_SINGLE_NOTE,
    payload: id
  };
};

export const editNote = (edited, id) => {
  return function(dispatch) {
    axios
      .put(
        `https://killer-notes.herokuapp.com/note/edit/${id}`,
        edited
      )
      .then(({ data }) => {
        window.location.href = home_path;
      });
  };
};

export const deleteNote = id => {
  console.log("id is: ", id);
  return function(dispatch) {
    axios
      .delete(
        `https://killer-notes.herokuapp.com/note/delete/${id}`
      )
      .then(({ data }) => {
        window.location.href = "http://localhost:3000/";
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchNotes = URL => {
  return function(dispatch) {
    axios
      .get(URL)
      .then(({ data }) => {
        dispatch({ type: FETCH_NOTES, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
