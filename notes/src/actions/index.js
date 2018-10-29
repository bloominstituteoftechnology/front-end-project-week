import axios from 'axios';

export const ACTIVE_NOTE_HANDLER = 'active_note_handler';

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

const url = 'http://localhost:3333';

export const activeNoteHandler = (ev) => {
  return {
    type: ACTIVE_NOTE_HANDLER,
    payload: {name: ev.target.name, value: ev.target.value}
  }
}

export const getNote = (id) => async dispatch => {
  try {
    dispatch({type: GET_NOTE});
    const res = await axios.get(`${url}/notes/${id}`)
    dispatch({type: GET_NOTE_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: GET_NOTE_FAILURE, payload: err})
  }
}

export const getNotes = () => async dispatch => {
  try {
    dispatch({type: GET_NOTES});
    const res = await axios.get(`${url}/notes`)
    dispatch({type: GET_NOTES_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: GET_NOTES_FAILURE, payload: err})
  }
}

export const addNote = (note) => async dispatch => {
  try {
    dispatch({type: ADD_NOTE});
    const res = await axios.post(`${url}/notes`, note)
    dispatch({type: ADD_NOTE_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: ADD_NOTE_FAILURE, payload: err})
  }
}

export const updateNote = (note) => async dispatch => {
  try {
    dispatch({type: UPDATE_NOTE});
    const res = await axios.put(`${url}/notes/${note.id}`, note)
    dispatch({type: UPDATE_NOTE_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: UPDATE_NOTE_FAILURE, payload: err})
  }
}

export const deleteNote = (id) => async dispatch => {
  try {
    dispatch({type: DELETE_NOTE});
    const res = await axios.delete(`${url}/notes/${id}`)
    dispatch({type: DELETE_NOTE_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: DELETE_NOTE_FAILURE, payload: err})
  }
}