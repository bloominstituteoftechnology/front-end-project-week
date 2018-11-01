import axios from 'axios';

const url = process.env.APIURL || `http://localhost:4242`;

export const getNotes = () => dispatch => {
  dispatch({ type: 'GET_NOTES' });

  axios.get(`${url}/api/notes/`)
    .then(({ data }) => {
      dispatch({ type: 'GET_NOTES_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'GET_NOTES_ERROR', payload: err })
    });
};

export const addNote = newNote => dispatch => {
  dispatch({ type: 'ADD_NOTE' })
  
  axios.post(`${url}/api/notes/`, newNote)
    .then(({ data }) => {
      dispatch({ type: 'ADD_NOTE_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'ADD_NOTE_ERROR', payload: err })
    })
};

export const editNote = editedNote => dispatch => {
  dispatch({ type: 'EDIT_NOTE' })

  axios.put(`${url}/api/notes/${editedNote.id}`, editedNote)
    .then(({ data }) => {
      dispatch({ type: 'EDIT_NOTE_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'EDIT_NOTE_ERROR', payload: err })
    })
}

export const deleteNote = id => dispatch => {
  dispatch({ type: 'DELETE_NOTE' })

  axios.delete(`${url}/api/notes/${id}`)
    .then(({ data }) => {
      dispatch({ type: 'DELETE_NOTE_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'DELETE_NOTE_ERROR', payload: err })
    })
}