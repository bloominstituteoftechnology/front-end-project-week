import axios from 'axios'

export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const ADDING = 'ADDING'
export const ADDED = 'ADDED'
export const EDITING = 'EDITING'
export const EDITED = 'EDITED'
export const DELETING = 'DELETING'
export const DELETED = 'DELETED'



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

export const deleteNote = id => {
 return dispatch => {
  dispatch({type: DELETING})
  axios
  .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
  .then(response => {
   axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  })
  .then(() => {
   dispatch({type: DELETED})
  })
  .catch(err => {console.log(err)})
 }

}

export const editNote = (id, data) => {
 return dispatch => {
  dispatch({type: EDITING})
  axios
  .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
  .then(() => {
   axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
    .then(response => {
   dispatch({type: EDITED, payload: response.data})
  })})
  .catch(err => {console.log(err)})
 
  
 }

}

export const getNote = (id) => {
 return dispatch => {
  dispatch({type: FETCHING})
  axios
  .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
  .then(response => {
    dispatch({type: SUCCESS, payload: response.data})
  })
  .catch(err => {console.log(err)})
 }
}