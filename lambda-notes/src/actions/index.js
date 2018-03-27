
import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING';
export const FETCHED_NOTES = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD_NOTES = 'ADD_NOTES';


export const getNotes = () => dispatch => {
   dispatch({ type: FETCHING_NOTES });
    axios
      .get('http://localhost:3333/smurfs')
      .then(result => dispatch({ type: FETCHED_NOTES, notes: result.data }))
      .catch(err =>
        dispatch({ type: ERROR, errorMessage: 'Error occured while fetching' }))
  }

  export const addNote = note => dispatch => {
    dispatch({type: ADD_NOTES });
    axios
      .post('http://localhost:3333/note', { ...note })
      .then(response => { dispatch({ type: ADD_NOTE }) })
      .catch(err => { dispatch({ type: ERROR, errorMessage: 'Error occured while adding note' }) })
  };