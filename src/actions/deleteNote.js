import axios from 'axios';

export const DELETE_NOTE = 'DELETE_NOTE';

const host = 'https://ajlnbe.herokuapp.com/api';

export const deleteNote = id => dispatch => {
  axios
    .delete(`${host}/destroynote/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('Dragons!')}` },
    })
    .then(response => {
      console.log(response.data);
      dispatch({ type: DELETE_NOTE, payload: response.data.notes });
    })
    .catch(err => dispatch({ type: 'ERROR', payload: err }));
};
