import axios from "axios";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const FETCH_DATA = "FETCH_DATA";
export const DATA_FETCHED = "DATA_FETCHED";
export const ERROR = "ERROR";

//
export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => dispatch({ type: DATA_FETCHED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const addNote = note => {

  let timeStamp = new Date();

  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .post("https://killer-notes.herokuapp.com/note/create", note)
      .then(response =>
        dispatch({
          type: ADD_NOTE,
          payload: {
            title: note.title,
            textBody: note.textBody,
            id: timeStamp //this part acts weird, go back and fix this
          }, 
        })
      )
      .then(
        axios.get("https://killer-notes.herokuapp.com/note/get/all")
        .then(response => dispatch({ type: DATA_FETCHED, payload: response.data }))
      )
      .catch(err => dispatch({ type: ERROR, err }));
  };

};

export const deleteNote = id => {

  console.log('the id:' + id);
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => dispatch({ type: DELETE_NOTE, id }))
      .catch(err => dispatch({ type: ERROR, err }));
  };

};

export const editNote = note => {

  console.log('the note is:' + note);
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
      .then(response => dispatch({ type: EDIT_NOTE, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };

};