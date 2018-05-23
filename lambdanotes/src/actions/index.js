import axios from 'axios';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHED_NOTES = "FETCHED_NOTES";
export const START_CREATE = "START_CREATE";
export const ERROR = "ERROR";
export const GO_TO_LIST = "GO_TO_LIST";
export const VIEW_NOTE = "VIEW_NOTE";



export const fetcher = (url) => {
  const request = axios.get(url);
  return (dispatch) => {
    dispatch({type: FETCHING_NOTES});
    request.then((data) => {
      dispatch({type: FETCHED_NOTES, payload: data.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};


export const startCreate = () => {
  return (dispatch) => {
    dispatch({type: START_CREATE});
  }
}

export const goToList = () => {
  return (dispatch) => {
    dispatch({type: GO_TO_LIST});
  }
}

export const viewNote = () => {
  return (dispatch) => {
    dispatch({type: VIEW_NOTE});
  }
}
