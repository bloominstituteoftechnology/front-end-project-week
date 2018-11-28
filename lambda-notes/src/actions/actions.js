import axios from 'axios'

export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'


export const fetchNotes = () => dispatch => {
 axios
  .get('https://fe-notes.herokuapp.com/note/get/all')
  .then(response => {
   dispatch({type: SUCCESS, payload: response.data})
  })
  .catch(err => {
   console.log(err)
   dispatch({type: FAILURE, payload: 'No notes fetched.'})
  })
}

export const addNote = () => dispatch => {

}