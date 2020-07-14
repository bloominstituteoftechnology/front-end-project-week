import axios from 'axios';

import { ADD, EDIT, CANCEL, FETCH, FETCHED, FETCHING, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from "./types";

// const host = 'http://localhost:5000';
const host = 'https://young-coast-73926.herokuapp.com';

export const fetch = () => {
  return {
      type: FETCH
  }
}

export const add = () => {
  return {
      type: ADD
  }
}

export const edit = () => {
  return {
      type: EDIT
  }
}

export const cancel = () => {
  return {
      type: CANCEL
  }
}


export const fetching = () => {
  return {
      type: FETCHING
  }
}

export const fetched = (data) => {
  return {
      type: FETCHED,
      payload: data
  }
}

export const saving = () => {
  return {
      type: SAVING
  }
}

export const saved = (data) => {
  return {
      type: SAVED,
      payload: data
  }
}

export const updating = () => {
  return {
      type: UPDATING
  }
}

export const updated = (data) => {
  return {
      type: UPDATED,
      payload: data
  }
}

export const deleting = () => {
  return {
      type: DELETING
  }
}

export const deleted = (data) => {
  return {
      type: DELETED,
      payload: data
  }
}

export const error = (err) => {
  return {
      type: ERROR,
      payload: err
  }
}

export const cancelEdit = () => {
  return function(dispatch) {
      dispatch(cancel());
  }
}

const requestOptions = () => {
    // get the token from somewhere
    const token = localStorage.getItem('jwt');

    // attach the token as the Authorization header
    const requestOptions = {
      headers: {
        Authorization: token,
      },
    };
    return requestOptions;
}


export const fetchNotes = () => {

  const promise = axios.get(`${host}/api/notes/`, requestOptions());
  return function(dispatch) {
      dispatch(cancelEdit());
      dispatch(fetching());
      promise
          .then( res => {
                  dispatch(fetched(res.data));
          })
          .catch( err => {
              dispatch(error(err));
          })
  }
}

export const addNote = (note) => {
  const promise = axios.post(`${host}/api/notes/`, note, requestOptions());
  return function(dispatch) {
    dispatch(cancelEdit());
    dispatch(updating())
    promise
          .then( res => {
            dispatch(updated(res.data));
          })
          .catch( err => {
              dispatch(error(err));
          })
  }
}

export const removeNote = (note) => {
  const promise = axios.delete(`${host}/api/notes/${note}`, requestOptions())
  return function(dispatch) {
      dispatch(cancelEdit());
      dispatch(deleting())
      promise 
          .then( res => {
              dispatch(deleted(res.data));
          })
          .catch( err => {
              dispatch(error(err));
          })
  }
}

export const updateNote = (updateNoteId, note) => {
  console.log("update this note :", note)
  const promise = axios.put(`${host}/api/notes/${updateNoteId}`, note, requestOptions())
  return function(dispatch) {
      dispatch(cancelEdit());
      dispatch(updating())
      promise
          .then( res  => {
              dispatch(updated(res.data));
          })
          .catch( err => {
              dispatch(error(err));
          })
  }
}