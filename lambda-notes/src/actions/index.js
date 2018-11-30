import axios from 'axios'

export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const ADDING = 'ADDING'
export const ADDED = 'ADDED'


export const fetchNotes = () => {
 return dispatch => {
 axios
  .get('https://fe-notes.herokuapp.com/note/get/all')
  .then(response => {
   dispatch({type: SUCCESS, payload: response.data})
  })
  .catch(err => {
   console.log(err)
  })}
}

export const addNote = data => {
 return dispatch => {
  dispatch({type: ADDING })
  axios
   .post('https://fe-notes.herokuapp.com/note/create', data)
   .then(() => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
   dispatch({type: ADDED, payload: response.data})
  })
   .catch(() => {
   dispatch({type: FAILURE, payload: 'Error getting notes.'})
  })
})
 .catch(() => {
  dispatch({type: FAILURE, payload: 'Note not added.'})
 })}
}

// export const editNote = () => dispatch => {

// }

// export const deleteNote = () => dispatch => {

// }
