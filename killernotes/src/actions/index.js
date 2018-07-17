import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';

const getAllURL = 'https://killer-notes.herokuapp.com/note/get/all';
const deleteURL = 'https://killer-notes.herokuapp.com/note/delete/';

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
    console.log('deleting ', id);
    axios
      .delete(`${deleteURL}${id}`)
      .then(response => {
        dispatch({ type: DELETED, payload: id });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};
