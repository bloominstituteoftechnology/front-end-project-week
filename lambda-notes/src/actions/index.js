import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const GOT_NOTES = 'GOT_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';
// export const ADDED_NOTE = 'ADDED_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETED_NOTE = 'DELETED_NOTE';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const NOTE_UPDATED = 'NOTE_UPDATED';
export const ERROR = 'ERROR';

// added_note, deleted_note, note_updated get replaced with fetchNotes

//middleware (another thunk) use for all action creators
const fetchNotes = (dispatch) => {
  return axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(({ data }) => dispatch({ type: GOT_NOTES, payload: data }))
    .catch((error) => {
      dispatch({ type: ERROR, message: 'error fetching all notes' });
    });
};

export const gettingAllNotes = () => {
  console.log('function invoked');
  return (dispatch) => {
    dispatch({ type: GETTING_NOTES });
    fetchNotes(dispatch);
  };
};

export const gettingSingleNote = (_id) => {
  return (dispatch) => {
    dispatch({ type: GETTING_NOTES });
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${_id}`)
      .then(({ data }) => dispatch({ type: GOT_NOTES, payload: data }))
      .catch((error) => {
        dispatch({ type: ERROR, message: 'error getting note' });
      });
  };
};

export const addNote = (note) => {
  return (dispatch) => {
    dispatch({ type: ADDING_NOTE });
    axios
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then((response) => {
        console.log(response);
        fetchNotes(dispatch);
      })
      .catch((error) => {
        dispatch({ type: ERROR, message: 'error adding note' });
      });
  };
};
// refetch with fetchNotes because payload: data may or not be what you expect

export const deleteNote = (_id) => {
  return (dispatch) => {
    dispatch({ type: DELETING_NOTE });
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${_id}`)
      .then(({ data }) => dispatch({ type: DELETED_NOTE, payload: data }))
      .catch((error) => {
        dispatch({ type: ERROR, message: 'error deleting note' });
      });
  };
};

export const updateNote = (_id) => {
  return (dispatch) => {
    dispatch({ type: UPDATING_NOTE });
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${_id}`)
      .then(({ data }) => dispatch({ type: NOTE_UPDATED, payload: data }))
      .catch((error) => {
        dispatch({ type: ERROR, message: 'error updating note' });
      });
  };
};
