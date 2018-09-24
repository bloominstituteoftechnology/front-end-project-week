import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
// export const DELETE_NOTE = 'DELETE_NOTE';
// export const ADD_NOTE = 'ADD_NOTE';
export const FETCH_NOTES_ERROR = 'ERRORS';

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')

      .then(response => {
        console.log(response.data);
        dispatch({ type: FETCHED_NOTES, payload: response.data });
      })

      .catch(error => dispatch({ type: FETCH_NOTES_ERROR, error: error }));
  };
};

// export const addNote = note => {
//   return dispatch => {
//     dispatch({ type: ADD_NOTE });
//     axios
//     .post('https://killer-notes.herokuapp.com/note/create', note)

//     .then(response => {
//       dispatch({ type: FETCHED_NOTES, payload: response.data});
//       // console.log(response.data);
//     })

//     .catch(error => dispatch({ type: ERRORS, error: error}));
//   };
// };
