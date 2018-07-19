import axios from 'axios'

const url = `https://killer-notes.herokuapp.com/note`
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

export const fetchNotes = () => {
  const request = axios.get(`${url}/get/all`)
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        const arr = res.data.map((note) => note.tags)
        let tags = [ ...new Set(flatten(arr)) ].filter((tag) => tag.length >= 2)
        console.log(tags)
        dispatch({ type: GET_TAGS, payload: tags })
        dispatch({ type: GET_NOTES, payload: res.data })
        dispatch({ type: FETCHING, payload: false })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const getNote = (id) => {
  const request = axios.get(`${url}/get/${id}`)
  return (dispatch) => {
    dispatch({ type: GETTING_NOTE, payload: true })
    request
      .then((res) => {
        console.log(res.data)
        dispatch({ type: GETTING_NOTE, payload: false })
        dispatch({ type: GET_NOTE, payload: res.data })
        dispatch({})
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const deleteNote = (id) => {
  const request = axios.delete(`${url}/delete/${id}`)
  return (dispatch) => {
    dispatch({ type: DELETING, payload: true })
    request
      .then((res) => {
        dispatch({ type: DELETING, payload: false })
        dispatch({
          type: GET_NOTES,
          payload: axios.get(`${url}/get/all`).then((res) => {
            dispatch({ type: GET_NOTES, payload: res.data })
          })
        })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const postNote = (note) => {
  const request = axios.post(`${url}/create`, note)
  return (dispatch) => {
    dispatch({ type: POSTING, payload: true })
    request
      .then((res) => {
        dispatch({
          type: GET_NOTES,
          payload: axios.get(`${url}/get/all`).then((res) => {
            const arr = res.data.map((note) => note.tags)
            console.log(flatten(arr))
            dispatch({ type: GET_TAGS, payload: flatten(arr) })
            dispatch({ type: GET_NOTES, payload: res.data })
            dispatch({ type: POSTING, payload: false })
          })
        })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}

export const editNote = (id, note) => {
  // console.log('IN EDITNOTE', note)
  const request = axios.put(`${url}/edit/${id}`, note)
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
