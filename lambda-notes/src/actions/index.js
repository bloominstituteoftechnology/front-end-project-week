import axios from 'axios'

export const GET_ALL_NOTES = 'GET_ALL_NOTES'
export const ADD_CHECKED = 'ADD_CHECKED'
export const REMOVE_CHECKED = 'REMOVE_CHECKED'
export const CLEAR_ALL_CHECKED = 'CLEAR_ALL_CHECKED'
export const CHECK_ALL = 'CHECK_ALL'
export const RECORD_SELF_ADDED = 'RECORD_SELF_ADDED'
export const CLEAR_SELF_ADDED = 'CLEAR_SELF_ADDED'

export const getAllNotes = () => dispatch => {
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: GET_ALL_NOTES, payload: res.data }))
    .catch(err => console.log(err))
}

export const postNote = ({ title, text }) => dispatch => {
  console.log('posting')

  axios
    .post('https://fe-notes.herokuapp.com/note/create', {
      title,
      textBody: text
    })
    .then(res => {
      console.log(res.data.success)
      dispatch({ type: RECORD_SELF_ADDED, payload: res.data.success })
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
      dispatch(getAllNotes())
    })
    .catch(err => console.log(err))
}

export const deleteNote = id => dispatch => {
  console.log(`deleting ${id}`)

  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(res => {
      dispatch(getAllNotes())
    })
    .catch(err => console.log(err))
}

// FOR SELECTING NOTES EN MASS
// IN ORDER TO DELETE OR PERFORM OTHER ACTION

export const addChecked = id => ({
  type: ADD_CHECKED,
  id
})

export const removeChecked = id => ({
  type: REMOVE_CHECKED,
  id
})

export const checkAll = () => (dispatch, getState) => {
  const { notes } = getState()
  const allIds = notes.map(note => note._id)

  console.log('checking all')
  console.log(allIds)

  dispatch({ type: CHECK_ALL, allIds })
}

export const clearAllChecked = () => ({
  type: CLEAR_ALL_CHECKED
})

export const deleteAllChecked = () => async (dispatch, getState) => {
  // get all checked items
  const { checked } = getState()

  // fire off api request for each item to delete
  // await completion of all promises before continuing
  await Promise.all(
    checked.map(async id => {
      await axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(res => console.log(`Successfully deleted ${id}`))
        .catch(err => console.log(err))
    })
  )

  // clear checked values
  dispatch(clearAllChecked())

  // get updated notes
  dispatch(getAllNotes())
}

// BULK ADD NOTES

export const bulkAddNotes = num => async dispatch => {
  // initialize array for all new ids
  let newIds = []

  await Promise.all(
    [...Array(num)].map(async (id, i) => {
      await axios
        .post('https://fe-notes.herokuapp.com/note/create', {
          title: 'Bulk Note',
          textBody: `This is note ${i + 1} of ${num}`
        })
        .then(res => newIds.push(res.data.success))
        .catch(err => console.log(err))
    })
  )

  // add all new items to self added
  dispatch({ type: RECORD_SELF_ADDED, payload: newIds })

  // get updated notes
  dispatch(getAllNotes())
}

// REMOVE ALL SELF ADDED

export const removeSelfAdded = () => async (dispatch, getState) => {
  // get all checked items
  const { self_added } = getState()

  // fire off api request for each item to delete
  // await completion of all promises before continuing
  await Promise.all(
    self_added.map(async id => {
      await axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(res => console.log(`Successfully deleted ${id}`))
        .catch(err => console.log(err))
    })
  )

  // get updated notes
  dispatch(getAllNotes())
}
