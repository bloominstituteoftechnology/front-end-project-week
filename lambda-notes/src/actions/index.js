import axios from "axios";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const FETCH_DATA = "FETCH_DATA";
export const DATA_FETCHED = "DATA_FETCHED";
export const ERROR = "ERROR";


export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .get("http://localhost:5000/api/notes/")
      .then(response => dispatch({ type: DATA_FETCHED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const addNote = note => {

  let timeStamp = new Date();

  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .post("http://localhost:5000/api/notes/", note)
      .then(response =>
        dispatch({
          type: ADD_NOTE,
          payload: {
            //the payload you're giving the API to populate the new note
            title: note.title,
            textBody: note.textBody,
            id: timeStamp //using a timestamp as the ID as it's unique enough
          }, 
        })
      )
      .then(
        // Re-GET all the notes, with the newly added one included
        axios.get("http://localhost:5000/api/notes/")
        .then(response => dispatch({ type: DATA_FETCHED, payload: response.data }))
      ).catch(err => dispatch({ type: ERROR, err }));
  };

};

export const deleteNote = id => {
  //feed in the note id from the deleteClick event in NoteView.js
  console.log('the id of the note we shall delete:' + id);
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .delete(`http://localhost:5000/api/notes/${id}`)
      .then(response => dispatch({ type: DELETE_NOTE, id }))
      .catch(err => dispatch({ type: ERROR, err }));
  };

};

export const editNote = note => {

  console.log('the note being edited is:' + note);
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios //Ping the edit fxn of the API with the newly modified note object
      .put(`http://localhost:5000/api/notes/${note.id}`, note)
      .then(response => dispatch({ type: EDIT_NOTE, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };

};