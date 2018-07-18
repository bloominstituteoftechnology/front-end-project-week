import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const EDITING = 'EDITING';
export const NOTEDITING = 'NOTEDITING';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ERROR = 'ERROR';

const getAllURL = 'https://killer-notes.herokuapp.com/note/get/all';
const deleteURL = 'https://killer-notes.herokuapp.com/note/delete/';
const addURL = 'https://killer-notes.herokuapp.com/note/create';

export const fetchData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get(getAllURL)
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
      .delete(`${deleteURL}${id}`)
      .then(response => {
        dispatch({ type: DELETED, payload: id });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const addNote = note => {
  return function(dispatch) {
    dispatch({ type: ADDING });
    console.log('adding ', note);
    axios
      .post(addURL, note)
      .then(response => {
        console.log('ADD reponse', response);
        dispatch({ type: ADDED, payload: response });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const editing = () => ({ type: EDITING });
export const notEditing = () => ({ type: NOTEDITING });
