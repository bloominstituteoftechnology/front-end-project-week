import axios from 'axios';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const CREATE_NOTE = 'CREATE_NOTE';
export const ERROR_CREATING = 'ERROR_CREATING';
export const FETCH_NOTE = 'FETCH_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR_DELETING = 'ERROR_DELETING';

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

  export const createNote = data => {
    const notes = axios.post(`http://localhost:3333/notes`, data);
      return dispatch => {
        notes
        .then(response=> {
          dispatch({ type: CREATE_NOTE })
        })
        .catch(err => {
          dispatch({
            type: ERROR_CREATING,
            payload: 'ERROR creating note'
          });
        });
      };
  };

  export const getNote = id => {
    const note = axios.get(`http://localhost:3333/notes/${id}`)
    return dispatch => {
      note
      .then(response => {
        dispatch({ type: FETCH_NOTE, payload: response.data });
      })
      .catch(error => {
        console.error(error);
      });
    };
  };

  export const deleteNote = id => {
    const note = axios.delete(`http://localhost:3333/notes/${id}`);
      return dispatch => {
        dispatch({ type: DELETE_NOTE });
        note
        .then(response=> {
          dispatch(getNotes());
        })
        .catch(err => {
          dispatch({
            type: ERROR_DELETING,
            payload: 'ERROR deleting Note'
          });
        });
      };
  };
