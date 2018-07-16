import axios from 'axios'

const url = `https://killer-notes.herokuapp.com/note`
export const GET_NOTES = 'GET_NOTES'
export const FETCHING = 'FETCHING'
export const ERROR = 'ERROR'

export const fetchNotes = () => {
  const request = axios.get(`${url}/get/all`)
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        dispatch({ type: GET_NOTES, payload: res.data })
        dispatch({ type: FETCHING, payload: false })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
}
