import axios from 'axios'
const url = `http://localhost:8000`
export const GET_NOTES = 'GET_NOTES'
export const FETCHING = 'FETCHING'
export const ERROR = 'ERROR'
export const GET_NOTE = 'GET_NOTE'
export const GET_NEW_NOTES = 'GET_NEW_NOTES'
export const POSTING = 'POSTING'
export const DELETING = 'DELETING'
export const UPDATING = 'UPDATING'
export const GETTING_NOTE = 'GETTING_NOTE'
export const GET_TAGS = 'GET_TAGS'
export const UPDATED_TAGS = 'UPDATED_TAGS'

const flatten = function (arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i]
    if (Array.isArray(value)) {
      flatten(value, result)
    } else {
      result.push(value)
    }
  }
  return result
}

export const fetchNotes = (token) => {
  const request = axios.get(`${url}/auth/notes`, {
    headers: {
      authorization: token
    }
  })
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        console.log('IN HERERE', res.data)
        dispatch({ type: GET_NOTES, payload: res.data })
        const tags = res.data.map((tags) => tags.tags)
        dispatch({ type: GET_TAGS, payload: tags })
        dispatch({ type: FETCHING, payload: false })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const getNote = (id, cb) => {
  const request = axios.get(`${url}/auth/note/${id}`)
  return (dispatch) => {
    dispatch({ type: GETTING_NOTE, payload: true })
    request
      .then((res) => {
        console.log(res.data)
        dispatch({ type: GETTING_NOTE, payload: false })
        dispatch({ type: GET_NOTE, payload: res.data })
        cb()
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const deleteNote = (id) => {
  const request = axios.delete(`${url}/auth/delete/${id}`)
  return (dispatch) => {
    dispatch({ type: DELETING, payload: true })
    request
      .then((res) => {
        dispatch({ type: DELETING, payload: false })
        dispatch({
          type: GET_NOTES,
          payload: res.data
        })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const postNote = (note, token) => {
  const request = axios.post(`${url}/auth/create`, note, {
    headers: {
      authorization: token
    }
  })
  return (dispatch) => {
    dispatch({ type: POSTING, payload: true })
    request
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: GET_NOTES,
          payload: res.data
        })
        // dispatch({ type: GET_TAGS, payload: res.data.tags })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const editNote = (id, note) => {
  // console.log('IN EDITNOTE', note)
  const request = axios.put(`${url}/auth/edit/${id}`, note)
  return (dispatch) => {
    dispatch({ type: UPDATING, payload: true })
    request
      .then((res) => {
        dispatch({ type: UPDATING, payload: false })
        dispatch({
          type: GET_NOTE,
          payload: axios.get(`${url}/get/${id}`).then((res) => {
            const arr = res.data.tags
            dispatch({ type: UPDATED_TAGS, payload: arr })
            dispatch({ type: GET_NOTE, payload: res.data })
          })
        })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}
