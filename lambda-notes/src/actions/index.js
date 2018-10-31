import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHING_NOTES_SUCCESS = 'FETCHING_NOTES_SUCCESS';
export const FETCHING_NOTES_FAILURE = 'FETCHING_NOTES_FAILURE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const ADDING_NOTE_SUCCESS = 'ADDING_NOTE_SUCCESS';
export const ADDING_NOTE_FAILURE = 'ADDING_NOTE_FAILURE';
export const SHOW_NOTE = 'SHOW_NOTE';
export const GO_HOME = 'GO_HOME';

// export const DELETING_SMURF_SUCCESS = 'DELETING_SMURF_SUCCESS';
// export const DELETING_SMURF_FAILURE = 'DELETING_SMURF_FAILURE';

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

const getUrl = 'https://fe-notes.herokuapp.com/note/get/all';
const postUrl = 'https://fe-notes.herokuapp.com/note/create';

export const getNotes = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_NOTES });
  axios
    .get(getUrl)
    .then(response => {
      console.log('Response from getNotes is: ', response);
      dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
    });
};

export const addNote = note => dispatch => {
  dispatch({ type: CREATE_NOTE });
  axios
    .post(postUrl, note)
    .then(response => {
      dispatch({ type: ADDING_NOTE_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: ADDING_NOTE_FAILURE, payload: error });
    })
    .then(dispatch({ type: FETCHING_NOTES }));
  axios
    .get(getUrl)
    .then(response => {
      console.log('Response from getNotes is: ', response);
      dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
    });
};

export const showNote = note => dispatch => {
  dispatch({ type: SHOW_NOTE, payload: note });
};

export const goHome = () => dispatch => {
  dispatch({ type: GO_HOME, payload: '' });
};

// axios.get(...)
//   .then((response) => {
//     return axios.get(...); // using response.data
//   })
//   .then((response) => {
//     console.log('Response', response);
//   });

// export const deleteSmurf = id => dispatch => {
//   axios
//     .delete(`${url}/${id}`)
//     .then(res => {
//       dispatch({ type: DELETING_SMURF_SUCCESS, payload: id });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({ type: DELETING_SMURF_FAILURE });
//     });
// };
