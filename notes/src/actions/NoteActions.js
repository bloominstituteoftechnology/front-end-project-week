import axios from 'axios';

export const NOTE_CHECKED = 'note_checked';
export const NOTE_UNCHECKED = 'note_unchecked';
export const NOTE_CHECKED_CLEAR = 'note_checked_clear';

export const SET_SORT_MODE = 'set_srot_mode';
export const TOGGLE_MENU = 'toggle_menu';
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

export const SELECT_MODE_TOGGLE = 'select_mode_toggle'

// const url = 'http://localhost:3333';
// const url = 'https://fe-notes.herokuapp.com';
// const url = 'http://localhost:9001';
const url = process.env.REACT_APP_API_URL;

const getToken = () => {
  const keyName = process.env.REACT_APP_TOKEN_ITEM;
  const key = localStorage.getItem(keyName);

  axios.defaults.headers.common['authentication'] = key;
}

export const deleteChecked = noteIds => async dispatch => {
  await noteIds.forEach(async id => {
    try {
      dispatch({type: DELETE_NOTE});
      await axios.delete(`${url}/note/delete/${id}`);
      dispatch({type: DELETE_NOTE_SUCCESS, payload: id});
    } catch(err) {
        dispatch({type: DELETE_NOTE_FAILURE, payload: err});
    }
  })
  dispatch({type: NOTE_CHECKED_CLEAR});
};

export const noteChecked = (id) => {
  return {
    type: NOTE_CHECKED,
    payload: id,
  }
};

export const noteUnChecked = (id) => {
  return {
    type: NOTE_UNCHECKED,
    payload: id,
  }
};

export const noteCheckedClear = () => {
  return {
    type: NOTE_CHECKED_CLEAR
  }
};

export const menuToggle = () => {
  return {
    type: TOGGLE_MENU,
  }
};

export const setSortMode = () => {
  return {
    type: SET_SORT_MODE,
  }
};

export const searchHandler = (value) => {
  return {
    type: SEARCH_NOTE_HANDLER,
    payload: value,
  }
};

export const activeNoteHandler = (ev) => {
  return {
    type: ACTIVE_NOTE_HANDLER,
    payload: {name: ev.target.name, value: ev.target.value}
  }
};

export const getNote = (id) => async dispatch => {
  try {
    getToken();
    dispatch({type: GET_NOTE});
    const res = await axios.get(`${url}/note/get/${id}`)
    console.log(res);
    dispatch({type: GET_NOTE_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: GET_NOTE_FAILURE, payload: err})
  }
};

export const getNotes = () => async dispatch => {
  try {
    getToken();
    dispatch({type: GET_NOTES});
    const res = await axios.get(`${url}/note/get/all`)
    dispatch({type: GET_NOTES_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: GET_NOTES_FAILURE, payload: err})
  }
};

export const addNote = (note) => async dispatch => {
  try {
    getToken();
    dispatch({type: ADD_NOTE});
    const res = await axios.post(`${url}/note/create`, note)
    // console.log('res', res);
    const newNoteRes = await axios.get(`${url}/note/get/${res.data.success}`)
    // console.log('newNoteRes', newNoteRes);
    dispatch({type: ADD_NOTE_SUCCESS, payload: newNoteRes.data})
  } catch(err) {
    dispatch({type: ADD_NOTE_FAILURE, payload: err})
  }
};

export const updateNote = (note) => async dispatch => {
  try {
    getToken();
    dispatch({type: UPDATE_NOTE});
    const res = await axios.put(`${url}/note/edit/${note.id}`, note)
    dispatch({type: UPDATE_NOTE_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: UPDATE_NOTE_FAILURE, payload: err})
  }
};

export const deleteNote = (id) => async dispatch => {
  try {
    getToken();
    dispatch({type: DELETE_NOTE});
    await axios.delete(`${url}/note/delete/${id}`)
    dispatch({type: DELETE_NOTE_SUCCESS, payload: id})
  } catch(err) {
    dispatch({type: DELETE_NOTE_FAILURE, payload: err})
  }
}

export const selectModeToggle = (value) => {
  return { type: SELECT_MODE_TOGGLE, payload: value };
}
