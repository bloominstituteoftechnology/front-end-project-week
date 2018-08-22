import axios from 'axios';
import dotenv from 'dotenv';

export const START_FETCH = 'START_FETCH';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REARRANGE_NOTES = 'REARRANGE_NOTES';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';

<<<<<<< HEAD
const url = process.env.SERVER || 'http://localhost:8000';
=======
const url = 'http://localhost:8000';
>>>>>>> parent of 5ff900f... add env server address support

export const fetchNotes = (cb) => dispatch => {
  return axios
    .get(`${url}/get/all`)
    .then(res => {
      const { data } = res;
      dispatch({ type: RECEIVE_NOTES, payload: data });
      if (cb !== undefined) cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchNoteById = target => dispatch => {
  return axios
    .get(`${url}/get/${target}`)
    .then(res => {
      const { data } = res;
      dispatch({ type: RECEIVE_NOTE, payload: data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const sendEdit = (target, note, cb) => dispatch => {
  return axios
    .put(`${url}/edit/${target}`, note)
    .then(res => {
      //optional cb to call on success
      if (cb !== undefined) cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export const postNewNote = (note, cb) => dispatch => {
  return axios
    .post(`${url}/create`, note)
    .then(res => {
      //optional cb to call on success
      if (cb !== undefined) {
        const { success: id } = res.data;
        cb(id);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteNote = (id, cb) => dispatch => {
  return axios
    .delete(`${url}/delete/${id}`)
    .then(()=>{
      if (cb !== undefined) cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchTags = (cb) => dispatch => {
  return axios
    .get(`${url}/tags`)
    .then((res) => {
      const { data } = res;
      dispatch({ type: RECEIVE_TAGS, payload: data });
    })
    .then(() => {
      if (cb) cb();
    })
    .catch(err => console.log(err));
}

export const reArrange = (sourceId, dropId) => {
  return {
    type: REARRANGE_NOTES,
    payload: {sourceId, dropId},
  };
};
