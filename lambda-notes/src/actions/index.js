import history from '../constants/history';
import database from '../constants/dbConfig';
import {
  FETCHING_NOTES,
  NOTES_FETCHED,
  FETCHING_NOTE,
  NOTE_FETCHED,
  ADDING_NOTE,
  NOTE_ADDED,
  UPDATING_NOTE,
  NOTE_UPDATED,
  DELETING_NOTE,
  NOTE_DELETED,
  ERROR
} from '../constants/actionTypes';

export const getNotes = () => {
  const getAllNotes = database.ref('notes/');
  return (dispatch) => {
    dispatch({ type: FETCHING_NOTES });

    getAllNotes
      .once('value', response => {
        dispatch({
          type: NOTES_FETCHED,
          payload: response.val()
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const getNote = id => {
  const getSingleNote = database.ref(`notes/${id}`);
  return (dispatch) => {
    dispatch({ type: FETCHING_NOTE });

    getSingleNote
      .once('value', response => {
        dispatch({
          type: NOTE_FETCHED,
          payload: response.val()
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const addNote = noteObj => {
  const getUpdatedNotes = database.ref('notes/');
  
  database.ref(`notes/${noteObj.id}`).set(noteObj);

  return (dispatch) => {
    dispatch({ type: ADDING_NOTE });

    getUpdatedNotes.once('value', response => {
      dispatch({
        type: NOTE_ADDED,
        payload: response.val()
      });

      history.push('/');
    }).catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
  };
};

export const updateNote = noteObj => {
  const getUpdatedNotes = database.ref('notes/');
  
  database.ref(`notes/${noteObj.id}`).set(noteObj);

  return (dispatch) => {
    dispatch({ type: UPDATING_NOTE });

    getUpdatedNotes.once('value', response => {
      dispatch({
        type: NOTE_UPDATED,
        payload: response.val()
      });

      history.push(`/note/${noteObj.id}`);
    }).catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
  };
};

export const deleteNote = id => {
  const getUpdatedNotes = database.ref('notes/');
  
  database.ref(`notes/${id}`).remove();

  return (dispatch) => {
    dispatch({ type: DELETING_NOTE });

    getUpdatedNotes.once('value', response => {
      dispatch({
        type: NOTE_DELETED,
        payload: response.val()
      });

      history.push('/');
    }).catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
  };
};