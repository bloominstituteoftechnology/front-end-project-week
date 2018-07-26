import axios from 'axios';

const URL = 'https://killer-notes.herokuapp.com/note';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: 'GETTING_NOTES'});
    axios.get(`${URL}/get/all`)
      .then(response => {
        console.log('get', response)
        dispatch({ type: 'GET_NOTES', notes: response.data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR', error: err });
      });   
  };
};

export const saveNote = (title, textBody) => ({
  type: 'SAVE_NOTE',
  title,
  textBody
});

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  id,
});

export const editNote = (changedNote, id) => ({
  type: 'EDIT_NOTE',
  changedNote,
  id
});

