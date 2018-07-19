import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';

const url = 'https://killer-notes.herokuapp.com/note';

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
