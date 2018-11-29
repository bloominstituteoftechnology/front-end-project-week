import axios from 'axios'

export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const ADDING = 'ADDING'
export const ADDED = 'ADDED'


export const fetchNotes = () => dispatch => {
 axios
  .get('https://fe-notes.herokuapp.com/note/get/all')
  .then(response => {
   dispatch({type: SUCCESS, payload: response.data})
  })
  .catch(err => {
   console.log(err)
  })
}

export const addNote = () => dispatch => {
 dispatch({type: ADDING })
 axios
 .post('https://fe-notes.herokuapp.com/note/create')
 .then(response => {
  dispatch({type: ADDED, payload: response.data})
 })
 .catch(() => {
  dispatch({type: FAILURE, payload: 'Note not added.'})
 })
}

export const editNote = () => dispatch => {

}

export const deleteNote = () => dispatch => {

}
