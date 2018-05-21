import database from '../firebase.js'

export const getNotes = () => dispatch => {
  dispatch({ type: 'LOADING' })
  database
    .ref('notes')
    .on('value', snapshot => {
      const notes = Object
        .entries(snapshot.val())
        .map(([key, val]) => ({ ...val, id: key }))
      dispatch({ type: 'GET_NOTES', notes })
    })
}

export const addNote = note => async dispatch => {
  dispatch({ type: 'LOADING '})
  await database.ref('notes').push(note)
  dispatch({ type: 'ADD_NOTE' })
}

export const editNote = (note, id) => async dispatch => {
  dispatch({ type: 'LOADING '})
  await database.ref(`/notes/${id}`).set(note)
  dispatch({ type: 'EDIT_NOTE' })
}

export const deleteNote = id => async dispatch => {
  dispatch({ type: 'LOADING '})
  await database.ref(`/notes/${id}`).remove()
  dispatch({ type: 'DELETE_NOTE', id })
}

export const speechToggle = () => ({ type: 'SPEECH' })

export const addTranscript = transcript => ({ type: 'ADD_TRANSCRIPT', transcript })