import axios from 'axios';

export const EDIT_NOTE = 'EDIT_NOTE';

const host = 'https://ajlnbe.herokuapp.com/api';

export const editNote = data => dispatch => {
  axios
    .post(`${host}/updatenote`, data, {
      headers: { Authorization: localStorage.getItem('Dragons!') },
    })
    .then(response => {
      dispatch({
        type: EDIT_NOTE,
        payload: response.data.notes,
      });
    })
    .catch(err => {
      dispatch({ type: 'ERROR', payload: err });
    });
};
