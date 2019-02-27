import axios from 'axios'

export const FETCHING_NOTES = 'FETCHING_NOTES'
export const NOTES_FETCHED = 'NOTES_FETCHED'
export const FETCHING_NOTE = 'FETCHING_NOTE'
export const NOTE_FETCHED = 'NOTE_FETCHED'
export const ADDING = 'ADDING'
export const ADDED = 'ADDED'
export const EDITING = 'EDITING'
export const EDITED = 'EDITED'
export const DELETING = 'DELETING'
export const DELETED = 'DELETED'
export const ERROR = 'ERROR'


export const fetchNotes = () => {
 return dispatch => {
  dispatch({type: FETCHING_NOTES})
 axios
  .get('https://morning-ridge-90937.herokuapp.com/api/notes')
  .then(response => {
   dispatch({type: NOTES_FETCHED, payload: response.data})
  })
  .catch(() => {
   dispatch({type: ERROR, payload: 'Error Fetching Notes'})
  })}
}

export const addNote = note => {
 return dispatch => {
  dispatch({type: ADDING })
  axios
   .post('http://localhost:3945/api/notes', note)
   .then(() => {
   dispatch({type: ADDED})
   })
 .catch(() => {
  dispatch({type: ERROR, payload: 'Error Adding Note.'})
 })}
}

export const deleteNote = id => {
 return dispatch => {
  dispatch({type: DELETING})
  axios
  .delete(`http://localhost:3945/api/notes/${id}`)
  .then(() => {
   dispatch({type: DELETED})
  })
  .catch(() => {
   dispatch({type: ERROR, payload: 'Error Deleting Note'})
  })
 }

}

export const editNote = (id, note) => {
 return dispatch => {
  dispatch({type: EDITING})
  axios
  .put(`http://localhost:3945/api/notes/edit/${id}`, note)
  .then((response) => {
   dispatch({type: EDITED, payload: response.data})
  })
  .catch(() => {
   dispatch({type: ERROR, payload: 'Error Editing Note'})
  })
 }
}

export const fetchNote = (id) => {
 return dispatch => {
  dispatch({type: FETCHING_NOTE})
  axios
  .get(`http://localhost:3945/api/notes/${id}`)
  .then(response => {
    dispatch({type: NOTE_FETCHED, payload: response.data})
  })
  .catch(() => {
   dispatch({type: ERROR, payload: 'Error Getting Note'})
  })
 }
}