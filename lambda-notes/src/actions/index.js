import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDNOTE = 'ADDNOTE';
export const EDITNOTE = 'EDITNOTE';
export const DELETENOTE = 'DELETENOTE';
export const NOTE_SAVED = 'NOTE_SAVED';
export const SAVING_NOTE = 'SAVING_NOTE';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios.get('http://localhost:5000/api/notes/')
      .then( (response) => {
        console.log('RESP',response.data);
        dispatch({type: FETCHED, notes: response.data})
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'ERROR GETTING NOTES'})
      });
  }
}

export const createNote = (note) => {
  return dispatch => {
      dispatch({ type: SAVING_NOTE });
      axios
        .post('http://localhost:5000/api/notes/', note)
        .then( response => {
          dispatch({ type: NOTE_SAVED, notes: response.data})
        })
        .catch( () => {
          dispatch({ type: ERROR, error: 'ERROR ADDING NOTE'})
        })
  }
}

export const editNoteOnState = noteData => {
  return {
    type: EDITNOTE,
    payload: noteData,
  }
}

export const deleteNoteOnState = noteData => {
  return {
    type: DELETENOTE,
    payload: noteData
  }
}