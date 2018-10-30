import axios from 'axios'

export const GET_ALL_NOTES = 'GET_ALL_NOTES'
export const GET_NOTE_BY_ID = 'GET_NOTE_BY_ID'
export const POST_NOTE = 'POST_NOTE'
export const PUT_NOTE = 'PUT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const ADD_CHECKED = 'ADD_CHECKED'
export const REMOVE_CHECKED = 'REMOVE_CHECKED'

export const getAllNotes = () => dispatch => {
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: GET_ALL_NOTES, payload: res.data }))
    .catch(err => console.log(err))
}

export const getNoteById = id => dispatch => {
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    // not sure what res is gonna looke like here
    // or how I'll fold it in with the rest of state
    .then(res => dispatch({ type: GET_NOTE_BY_ID, payload: res.data }))
    .catch(err => console.log(err))
}

export const postNote = ({ title, text }) => dispatch => {
  console.log('posting')

  axios
    .post('https://fe-notes.herokuapp.com/note/create', {
      title,
      textBody: text
    })
    // again not sure what server will return yet
    .then(res => {
      console.log(res)
      // dispatch({ type: POST_NOTE, payload: res.data })
      dispatch(getAllNotes())
    })
    .catch(err => console.log(err))
}

export const putNote = ({ title, text, id }) => dispatch => {
  axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
      title,
      textBody: text
    })
    .then(res => {
      console.log(res)
      // dispatch({ type: PUT_NOTE, payload: res.data })
      dispatch(getAllNotes())
    })
    .catch(err => console.log(err))
}

export const deleteNote = id => dispatch => {
  console.log(`deleting ${id}`)

  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(res => {
      console.log('got res')
      console.log(res)

      dispatch(getAllNotes())
      // dispatch({ type: GET_ALL_NOTES, payload: res.data })
    })
    .catch(err => console.log(err))
}


// for selecting notes en mass to do things with ie delete

export const addChecked = id => ({
  type: ADD_CHECKED,
  id
})

export const removeChecked = id => ({
  type: REMOVE_CHECKED,
  id
})