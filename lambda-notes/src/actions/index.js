import axios from 'axios';
import { create } from 'domain';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const ERROR_FETCHING = 'ERROR_FETCHING';
// export const ADD_SMURF = 'ADD_SMURF';
// export const ERROR_ADDING = 'ERROR_ADDING';
// export const DELETE_SMURF = 'DELETE_SMURF';
// export const ERROR_DELETING = 'ERROR_DELETING';\\

export const getNotes = () => {
    const notes = axios.get(`http://localhost:3333/notes`);
    return dispatch => {
      dispatch({ type: FETCH_NOTES });
      notes
        .then(response => {
            console.log( response.data );
          dispatch({
            type: FETCHED_NOTES,
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: ERROR_FETCHING,
            payload: 'ERROR Fetching Notes'
          });
        });
    };
  };