
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_NOTES_START = "FETCH_NOTES_START";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";

export const ADD_NOTE_START = "ADD_NOTE_START";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

export const DELETE_NOTE_START = "DELETE_NOTE_START";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

export const EDIT_NOTE_START = "EDIT_NOTE_START";
export const EDIT_NOTE_SUCCESS = "EDIT_NOTE_SUCCESS";
export const EDIT_NOTE_FAILURE = "EDIT_NOTE_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const addNote = item => dispatch => {
    dispatch({ type: ADD_NOTE_START });
    axios
      .post('https://fe-notes.herokuapp.com/note/create', item)
      .then(response => {
        console.log(response);
        dispatch({
          type: ADD_NOTE_SUCCESS,
          payload: response.data
        });
      })
      .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
  };

export const getNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES_START });
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      console.log('fetch finished');
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FETCH_NOTES_FAILURE, payload: err }));
};




export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE_START });
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};

export const editNote = (id, item) => dispatch => {
  dispatch({ type: EDIT_NOTE_START });
  axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, item)
    .then(response => {
      console.log(response);
      dispatch({
        type: EDIT_NOTE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: EDIT_NOTE_FAILURE, payload: err }));
};