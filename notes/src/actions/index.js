import axios from 'axios';

export const ACTIVE_NOTE_HANDLER = 'active_note_handler';
export const SEARCH_NOTE_HANDLER = 'search_note_handler';

export const GET_NOTE = 'get_note';
export const GET_NOTE_SUCCESS = 'get_note_success';
export const GET_NOTE_FAILURE = 'get_note_failure';

export const GET_NOTES = 'get_notes';
export const GET_NOTES_SUCCESS = 'get_notes_success';
export const GET_NOTES_FAILURE = 'get_notes_failure';

export const ADD_NOTE = 'add_note';
export const ADD_NOTE_SUCCESS = 'add_note_success';
export const ADD_NOTE_FAILURE = 'add_note_failure';

export const UPDATE_NOTE = 'update_note';
export const UPDATE_NOTE_SUCCESS = 'update_note_success';
export const UPDATE_NOTE_FAILURE = 'update_note_failure';

export const DELETE_NOTE = 'delete_note';
export const DELETE_NOTE_SUCCESS = 'delete_note_success';
export const DELETE_NOTE_FAILURE = 'delete_note_failure';

// const url = 'http://localhost:3333';
const url = 'https://fe-notes.herokuapp.com';

export const searchHandler = (value) => {
  return {
    type: SEARCH_NOTE_HANDLER,
    payload: value,
  }
}
export const activeNoteHandler = (ev) => {
  return {
    type: ACTIVE_NOTE_HANDLER,
    payload: {name: ev.target.name, value: ev.target.value}
  }
}

export const getNote = (id) => async dispatch => {
  try {
    dispatch({type: GET_NOTE});
    const res = await axios.get(`${url}/note/get/${id}`)
    console.log(res);
    dispatch({type: GET_NOTE_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: GET_NOTE_FAILURE, payload: err})
  }
}

export const getNotes = () => async dispatch => {
  try {
    dispatch({type: GET_NOTES});
    const res = await axios.get(`${url}/note/get/all`)
    dispatch({type: GET_NOTES_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: GET_NOTES_FAILURE, payload: err})
  }
}

export const addNote = (note) => async dispatch => {
  try {
    dispatch({type: ADD_NOTE});
    const res = await axios.post(`${url}/note/create`, note)
    // console.log('res', res);
    const newNoteRes = await axios.get(`${url}/note/get/${res.data.success}`)
    // console.log('newNoteRes', newNoteRes);
    dispatch({type: ADD_NOTE_SUCCESS, payload: newNoteRes.data})
  } catch(err) {
    dispatch({type: ADD_NOTE_FAILURE, payload: err})
  }
}

export const updateNote = (note) => async dispatch => {
  try {
    dispatch({type: UPDATE_NOTE});
    const res = await axios.put(`${url}/note/edit/${note._id}`, note)
    dispatch({type: UPDATE_NOTE_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: UPDATE_NOTE_FAILURE, payload: err})
  }
}

export const deleteNote = (id) => async dispatch => {
  try {
    dispatch({type: DELETE_NOTE});
    await axios.delete(`${url}/note/delete/${id}`)
    dispatch({type: DELETE_NOTE_SUCCESS, payload: id})
  } catch(err) {
    dispatch({type: DELETE_NOTE_FAILURE, payload: err})
  }
}