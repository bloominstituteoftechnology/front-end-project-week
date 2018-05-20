// import PropTypes from "prop-types";
import axios from 'axios';

export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const host = 'https://ajlnbe.herokuapp.com/api';

export const newNote = data => dispatch => {
  if (data.title) {
    axios
      .post(`${host}/newnote`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Dragons!')}`,
        },
      })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: ADD_NEW_NOTE,
          payload: response.data.notes,
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'ERROR', payload: err });
      });
  } else {
    alert('Title required to add a new note!');
  }
};
