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

export const saveNote = (title, textBody) => {
  return dispatch => {
    dispatch({ type: 'SAVING_NOTE' });
    axios.post(`${URL}/create`, { title, textBody })
      .then(response => {
        console.log('SAVE', response);
        dispatch({
          type: 'SAVE_NOTE', 
          note: {title: title, textBody: textBody} 
        });
      })
      .catch(err => {
        console.log('saveERR', err)
        dispatch({ type: 'ERROR', error: err });
      });
  };
};

// export const saveNote = (title, textBody) => ({
//   type: 'SAVE_NOTE',
//   title,
//   textBody
// });

export const deleteNote = (id) => {
  return dispatch => {
    dispatch({ type: 'DELETEING_NOTE' });
    axios.delete(`${URL}/delete/${id}`)
      .then(response => {
        dispatch({ type: 'DELETE_NOTE', id });    
      })
      .catch(err => {
        dispatch({ type: 'ERROR', err });
      });
  };
};

// export const deleteNote = (id) => ({
//   type: 'DELETE_NOTE',
//   id,
// });

export const editNote = (changedNote, id) => {
  return dispatch => {
    dispatch({ type: 'EDITING_NOTE',});
    axios.put(`${URL}/edit/${id}`, changedNote)
      .then(response => {
        console.log('editNote', response);
        dispatch({ type: 'EDIT_NOTE', id, changedNote });
      })
      .catch(err => {
        dispatch({ type: 'ERROR', err })
      });
  };
};

// export const editNote = (changedNote, id) => ({
//   type: 'EDIT_NOTE',
//   changedNote,
//   id
// });


