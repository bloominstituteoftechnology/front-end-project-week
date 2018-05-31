import axios from 'axios'
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_SET_TOKEN,
  USER_NOTES_FETCH_SUCCESS,
  NOTE_CREATE_SUCCESS,
  NOTE_UPDATE_SUCCESS,
  NOTE_FETCH_SUCCESS,
  NOTE_DELETE_SUCCESS,
  FETCH_REQUEST,
  FETCH_FAILURE,
  CLEAR_FLASH_MESSAGE
} from './actionTypes'

const api = axios.create({
  baseURL: 'https://lambda-backend-project.herokuapp.com/api',
})

export const registerUser = (username, password) => {
  return async dispatch => {
    dispatch(userRegisterRequest({ username, password }))
    try {
      const { data } = await api.post('/user/register', { username, password })
      dispatch(userRegisterSuccess(data.user))
      dispatch(userSetToken(data.token))
    } catch (err) {
      dispatch(userRegisterFailure(err.response.data))
    }
  }
}

export const loginUser = (username, password) => async dispatch => {
  dispatch(userLoginRequest({ username, password }))
  try {
    const { data } = await api.post('/user/login', { username, password })
    dispatch(userLoginSuccess(data.user))
    dispatch(userSetToken(data.token))
  } catch (err) {
    dispatch(userLoginFailure(err.response.data))
  }
}

const options = (getState) => ({ headers: { token: getState().sessionToken } })

export const fetchUserNotes = (userId) => async (dispatch, getState) => {
  dispatch(fetchRequest())
  try {
    const { data } = await api.get('/note', options(getState))
    dispatch(userNotesFetchSuccess(data.notes))
  } catch (err) {
    console.log(err)
    // dispatch(fetchFailure(err.response.data))
  }
}

export const createNote = (note) => async (dispatch, getState) => {
  dispatch(fetchRequest())
  try {
    const { data } = await api.post('/note', note, options(getState))
    dispatch(noteCreateSuccess(data.note))
  } catch (err) {
    console.log(err)
    // dispatch(fetchFailure(err.response.data))
  }
}

export const updateNote = (note) => async (dispatch, getState) => {
  dispatch(fetchRequest())
  try {
    const { data } = await api.put(`/note/${note._id}`, note, options(getState))
    dispatch(noteUpdateSuccess(data.note))
  } catch (err) {
    console.log(err)
    // dispatch(fetchFailure(err.response.data))
  }
}

export const fetchNote = (id) => async (dispatch, getState) => {
  dispatch(fetchRequest())
  try {
    const { data } = await api.get(`/note/${id}`, options(getState))
    dispatch(noteFetchSuccess(data.note))
  } catch (err) {
    console.log(err)
    // dispatch(fetchFailure(err.response.data))
  }
}

export const deleteNote = (id) => async (dispatch, getState) => {
  dispatch(fetchRequest())
  try {
    const { data } = await api.delete(`/note/${id}`, options(getState))
    dispatch(noteDeleteSuccess(data.note))
  } catch (err) {
    console.log(err)
  }
}

export const userRegisterRequest = (user) => ({ type: USER_REGISTER_REQUEST, payload: user })
export const userRegisterSuccess = (user) => ({ type: USER_REGISTER_SUCCESS, payload: user })
export const userRegisterFailure = (err) => ({ type: USER_REGISTER_FAILURE, payload: err })

export const userLoginRequest = (user) => ({ type: USER_LOGIN_REQUEST, payload: user })
export const userLoginSuccess = (user) => ({ type: USER_LOGIN_SUCCESS, payload: user })
export const userLoginFailure = (err) => ({ type: USER_LOGIN_FAILURE, payload: err })
export const userSetToken = (token) => ({ type: USER_SET_TOKEN, payload: token })

export const fetchRequest = () => ({ type: FETCH_REQUEST })
export const fetchFailure = (err) => ({ type: FETCH_FAILURE, payload: err })

export const userNotesFetchSuccess = (notes) => ({ type: USER_NOTES_FETCH_SUCCESS, payload: notes })
export const noteCreateSuccess = (note) => ({ type: NOTE_CREATE_SUCCESS, payload: note })
export const noteUpdateSuccess = (note) => ({ type: NOTE_UPDATE_SUCCESS, payload: note })
export const noteFetchSuccess = (note) => ({ type: NOTE_FETCH_SUCCESS, payload: note })
export const noteDeleteSuccess = () => ({ type: NOTE_DELETE_SUCCESS })

export const clearFlashMessage = () => ({ type: CLEAR_FLASH_MESSAGE })