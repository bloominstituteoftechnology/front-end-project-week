import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHED_DATA = 'FETCHED_DATA';
export const FETCH_ERROR = 'FETCH_ERROR';

export const ADDING_DATA = 'ADDING_DATA';
export const ADDED_DATA = 'ADDED_DATA';
export const ADD_ERROR = 'ADD_ERROR';

export const DELETING_DATA = 'DELETING_DATA';
export const DELETED_DATA = 'DELETED_DATA';
export const DELETE_ERROR = 'DELETE_ERROR';

export const EDITING_DATA = 'EDITING_DATA';
export const EDITED_DATA = 'EDITED_DATA';
export const EDIT_ERROR = 'EDIT_ERROR';

export const SEARCH_DATA = 'SEARCH_DATA';

export const LOG_IN = 'LOG_IN';

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCHING_DATA });
  const promise = axios.get('http://localhost:8000/api/notes');

  promise
    .then((response) => {
      dispatch({ type: FETCHED_DATA, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_ERROR, payload: error });
    });
};

export const addData = (newData) => (dispatch) => {
  dispatch({ type: ADDING_DATA });
  const promise = axios.post('http://localhost:8000/api/notes', newData);

  promise
    .then((response) => {
      dispatch({ type: ADDED_DATA });
      return axios
        .get('http://localhost:8000/api/notes')
        .then((response) => {
          dispatch({ type: FETCHED_DATA, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: FETCH_ERROR, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: FETCH_ERROR, payload: error });
    });
};

export const deleteData = (id) => (dispatch) => {
  dispatch({ type: DELETING_DATA });
  const promise = axios.delete(`http://localhost:8000/api/notes/${id}`);
  promise
    .then((response) => {
      dispatch({ type: DELETED_DATA });
      return axios
        .get('http://localhost:8000/api/notes')
        .then((response) => {
          dispatch({ type: FETCHED_DATA, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: FETCH_ERROR, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: DELETE_ERROR, payload: error });
    });
};

export const editData = (note, id) => (dispatch) => {
  dispatch({ type: EDITING_DATA });
  const promise = axios.put(`http://localhost:8000/api/notes/${id}`, note);
  promise
    .then((response) => {
      dispatch({ type: EDITED_DATA });
      return axios
        .get('http://localhost:8000/api/notes')
        .then((response) => {
          dispatch({ type: FETCHED_DATA, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: FETCH_ERROR, payload: error });
        });
    })
    .catch((error) => {
      dispatch({ type: DELETE_ERROR, payload: error });
    });
};

export const searchData = (searchInput) => {
  return { type: SEARCH_DATA, payload: searchInput };
};

export const logIn = (username, password) => {
  return { type: LOG_IN, username: username, password: password };
};
