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

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCHING_DATA });
  const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all');

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
  const promise = axios.post(
    'https://killer-notes.herokuapp.com/note/create',
    newData
  );

  promise
    .then((response) => {
      dispatch({ type: ADDED_DATA });
      return axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
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
  const promise = axios.delete(
    `https://killer-notes.herokuapp.com/note/delete/${id}`
  );
  promise
    .then((response) => {
      dispatch({ type: DELETED_DATA });
      return axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
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
  const promise = axios.put(
    `https://killer-notes.herokuapp.com/note/edit/${id}`,
    note
  );
  promise
    .then((response) => {
      dispatch({ type: EDITED_DATA });
      return axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
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
