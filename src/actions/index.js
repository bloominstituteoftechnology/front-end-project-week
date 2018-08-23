
// import axios from 'axios';

export const ERROR = 'ERROR';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';


const URL = 'https://killer-notes.herokuapp.com';

// return dispatch => {
//   dispatch({ type: FOO_ACTION_TYPE });
//   promise.then(({ data }) => {
//     dispatch({ type: ANOTHER_ACTION_TYPE, payload: data });
//   });
// }; disregard this

export const fetchNotes = () => {
//   const notes = axios.get(URL); can use for stretch
    console.log("hi")
  return dispatch => {
    // dispatch({ type:FETCHING_NOTES });
    // notes
    //   .then(response => {
        response => {dispatch({ type: FETCH_NOTES, payload: response.data });
       }
    //   .catch(err => {
    //     dispatch({ type: ERROR, payload: err });
    //   });
  };
};

export const addNote = note => {
//   const newNote = axios.post(URL, note);
  return dispatch => {
    // dispatch({ type: ADDING_NOTE });
    // newNote
    //   .then(({ data }) => {
        response => {dispatch({ type: ADD_NOTE, payload: note });
       }
//)
    //   .catch(err => {
    //     dispatch({ type: ERROR, payload: err });
    //   });
  };
};

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
