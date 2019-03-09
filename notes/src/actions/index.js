import axios from "axios";
export const FETCHINGNOTES = "FETCHINGNOTES";
export const FETCHEDNOTES = "FETCHEDNOTES";
export const FETCHINGNOTE = "FETCHINGNOTE";
export const FETCHEDNOTE = "FETCHEDNOTE";
export const ERROR = "ERROR";
export const ADDINGNOTE = "ADDINGNOTE";
export const ADDEDNOTE = "ADDEDNOTE";
export const DELETINGNOTE = "DELETINGNOTE";
export const DELETEDNOTE = "DELETEDNOTE";
export const UPDATINGNOTE = "UPDATINGNOTE";
export const UPDATEDNOTE = "UPDATEDNOTE";

export const getNotes = (options, id) => {
  const request = axios.get(
    `https://notes-lambda.herokuapp.com/note/get/all/${id}`,
    options
  );
  return function(dispatch) {
    dispatch({ type: "FETCHINGNOTES" });
    request
      .then(data => {
        dispatch({ type: "FETCHEDNOTES", payload: data.data });
      })
      .catch(err => dispatch({ type: "ERROR", payload: err }));
  };
};
export const getSingleNote = (id, options) => {
  const request = axios.get(
    `https://notes-lambda.herokuapp.com/note/get/${id}`,
    options
  );
  return function(dispatch) {
    dispatch({ type: "FETCHINGNOTE" });
    request
      .then(data => {
        dispatch({ type: "FETCHEDNOTE", payload: data.data[0] });
      })
      .catch(err => dispatch({ type: "ERROR", payload: err }));
  };
};
export const addNote = (newNote, history, options) => {
  const request = axios.post(
    "https://notes-lambda.herokuapp.com/note/create",
    newNote,
    options
  );
  return function(dispatch) {
    dispatch({ type: "ADDINGNOTE" });
    request
      .then(data => {
        dispatch({ type: "ADDEDNOTE" });
        history.push("/notes");
      })
      .catch(err => dispatch({ type: "ERROR", payload: err }));
  };
};
export const deleteNote = (id, history, options) => {
  const request = axios.delete(
    `https://notes-lambda.herokuapp.com/note/delete/${id}`,
    options
  );
  return function(dispatch) {
    dispatch({ type: "DELETINGNOTE" });
    request
      .then(data => {
        dispatch({ type: "DELETEDNOTE" });
        history.push("/notes");
      })
      .catch(err => dispatch({ type: "ERROR", payload: err }));
  };
};
export const updateNote = (id, editedNote, history, options) => {
  const request = axios.put(
    `https://notes-lambda.herokuapp.com/note/edit/${id}`,
    editedNote,
    options
  );
  return function(dispatch) {
    dispatch({ type: "UPDATINGNOTE" });
    request
      .then(data => {
        dispatch({ type: "UPDATEDNOTE" });
        history.push(`/notes/${id}`);
      })
      .catch(err => dispatch({ type: "ERROR", payload: err }));
  };
};
