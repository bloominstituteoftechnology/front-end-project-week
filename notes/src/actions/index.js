import axios from 'axios';

export const getNotes = () => dispatch => {
  dispatch({ type: 'GET_NOTES' });

  axios.get('http://localhost:5000/api/notes/')
    .then(({ data }) => {
      dispatch({ type: 'GET_NOTES_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'GET_NOTES_ERROR', payload: err })
    });
};

export const addNote = newNote => dispatch => {
  dispatch({ type: 'ADD_NOTE' })
  
  axios.post('http://localhost:5000/api/notes/', newNote)
    .then(({ data }) => {
      dispatch({ type: 'ADD_NOTE_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'ADD_NOTE_ERROR', payload: err })
    })
};

export const editNote = editedNote => dispatch => {
  dispatch({ type: 'EDIT_NOTE' })

  axios.put(`http://localhost:5000/api/notes/${editedNote.id}`, editedNote)
    .then(({ data }) => {
      dispatch({ type: 'EDIT_NOTE_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'EDIT_NOTE_ERROR', payload: err })
    })
}

export const deleteNote = id => dispatch => {
  dispatch({ type: 'DELETE_NOTE' })

  axios.delete(`http://localhost:5000/api/notes/${id}`)
    .then(({ data }) => {
      dispatch({ type: 'DELETE_NOTE_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'DELETE_NOTE_ERROR', payload: err })
    })
}