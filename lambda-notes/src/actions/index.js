import axios from 'axios';

import { ADD, EDIT, CANCEL, FETCH, FETCHED, FETCHING, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from "./types";

// const host = 'http://localhost:5000';
const host = 'https://young-coast-73926.herokuapp.com';
const fetch = () => {
  return {
      type: FETCH
  }
}

const add = () => {
  return {
      type: ADD
  }
}

const edit = () => {
  return {
      type: EDIT
  }
}

const cancel = () => {
  return {
      type: CANCEL
  }
}


const fetching = () => {
  return {
      type: FETCHING
  }
}

const fetched = (data) => {
  return {
      type: FETCHED,
      payload: data
  }
}

const saving = () => {
  return {
      type: SAVING
  }
}

const saved = (data) => {
  return {
      type: SAVED,
      payload: data
  }
}

const updating = () => {
  return {
      type: UPDATING
  }
}

const updated = (data) => {
  return {
      type: UPDATED,
      payload: data
  }
}

const deleting = () => {
  return {
      type: DELETING
  }
}

const deleted = (data) => {
  return {
      type: DELETED,
      payload: data
  }
}

const error = (err) => {
  return {
      type: ERROR,
      payload: err
  }
}

const cancelEdit = () => {
  return function(dispatch) {
      dispatch(cancel());
  }
}

export const fetchNotes = () => {
  const promise = axios.get(`${host}/api/notes/`);
  console.log("fetching notes... ")
  return function(dispatch) {
      dispatch(fetching());
      promise
          .then( res => {
              // //Simulates delay on server response
              // setTimeout(() => {
              //     dispatch(fetched(res.data));
              // }, 0);
              dispatch(fetched(res.data));

          })
          .catch( err => {
              dispatch(error(err));
          })
  }
}

export const addNote = (note) => {
  const promise = axios.post(`${host}/api/notes/`, note);
  return function(dispatch) {
      dispatch(saving());
      promise
          .then( res => {
              dispatch(saved(res.data))
              dispatch(cancelEdit());
          })
          .catch( err => {
              dispatch(error(err));
          })
  }
}

export const removeNote = (note) => {
  const promise = axios.delete(`${host}/api/notes/${note}`)
  return function(dispatch) {
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
  const promise = axios.put(`${host}/api/notes/${updateNoteId}`, note)
  return function(dispatch) {
      dispatch(updating())
      promise
          .then( res  => {
              dispatch(updated(res.data));
              dispatch(cancelEdit());
          })
          .catch( err => {
              dispatch(error(err));
          })
  }
}