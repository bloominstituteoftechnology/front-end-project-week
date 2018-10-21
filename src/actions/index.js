import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REARRANGE_NOTES = 'REARRANGE_NOTES';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';

const url = process.env.REACT_APP_SERVER || 'http://localhost:8000';

export const fetchNotes = cb => dispatch => {
  return axios
    .get(`${url}/notes/get/all`)
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
    .get(`${url}/notes/get/${target}`)
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
    .put(`${url}/notes/edit/${target}`, note)
    .then(res => {
      //optional cb to call on success
      if (cb !== undefined) cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export const postNewNote = (note, cb) => dispatch => {
  return (
    axios
      .post(`${url}/notes/create`, note)
      //optional cb to call on success
      .then(({ data: { id } }) => cb && cb(id))
      .catch(err => {
        console.log(err);
      })
  );
};

export const deleteNote = (id, cb) => dispatch => {
  return axios
    .delete(`${url}/notes/delete/${id}`)
    .then(() => {
      if (cb !== undefined) cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchTags = cb => dispatch => {
  return axios
    .get(`${url}/notes/tags`)
    .then(res => {
      const { data } = res;
      dispatch({ type: RECEIVE_TAGS, payload: data });
    })
    .then(() => {
      if (cb) cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export const reArrange = (sourceId, dropId) => dispatch => {
  return axios
    .put(`${url}/notes/move`, { sourceId, dropId })
    .then(() =>
      dispatch({
        type: REARRANGE_NOTES,
        payload: { sourceId, dropId }
      })
    )
    .catch(err => console.log(err));
};
