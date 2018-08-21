import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const EDITING = 'EDITING';
export const EDITED = 'EDITED';
export const NOTEDITING = 'NOTEDITING';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const EXPORTING = 'EXPORING';
export const CLEARERROR = 'CLEARERROR';
export const ERROR = 'ERROR';

const notesAPI = 'https://floating-sea-10752.herokuapp.com/api/notes/';

export const fetchData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get(notesAPI)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const deleteNote = id => {
  return function(dispatch) {
    dispatch({ type: DELETING });
    axios
      .delete(`${notesAPI}${id}`)
      .then(response => {
        dispatch({ type: DELETED, payload: id });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const addNote = note => {
  return function(dispatch) {
    dispatch({ type: ADDING });
    axios
      .post(notesAPI, note)
      .then(response => {
        dispatch({ type: ADDED, payload: response });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const editNote = (id, note) => {
  return function(dispatch) {
    dispatch({ type: EDITING });
    axios
      .put(`${notesAPI}${id}`, note)
      .then(response => {
        dispatch({ type: EDITED, payload: response });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const editing = () => ({ type: EDITING });
export const notEditing = () => ({ type: NOTEDITING });

export const exportNotes = () => ({ type: EXPORTING });

export const clearError = () => ({ type: CLEARERROR });
