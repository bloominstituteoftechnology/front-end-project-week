/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
import axios from 'axios';

export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

// export const ADD_SMURF = 'ADD_SMURF';
// export const ADD_SUCCESS = 'ADD_SUCCESS';
// export const ADD_ERROR = 'ADD_ERROR';

export const fetchNotes = () => (dispatch) => {
  dispatch({ type: FETCH });
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err});
    });
};

// export const addSmurf = smurf => {
//   const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
//   return dispatch => {
//     dispatch({ type: ADD_SMURF });
//     newSmurf
//       .then(({ data }) => {
//         dispatch({ type: ADD_SUCCESS, payload: data });
//       })
//       .catch(err => {
//         dispatch({ type: ADD_ERROR, payload: err });
//       });
//   };
// };
