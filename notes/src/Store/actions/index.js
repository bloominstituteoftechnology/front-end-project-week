import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHED_DATA = 'FETCHED_DATA';
export const ERROR = 'ERROR';

export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE = 'COMPLETE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios.get();
  };
};
