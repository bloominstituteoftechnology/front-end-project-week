import history from '../components/Routes/history';
import axios from 'axios';
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
} from './ActionTypes';

export const getNotes = () => {
  const getAllNotes = axios.get('http://localhost:5000/notes');
  return (dispatch) => {
    dispatch({ type: FETCHING_NOTES });
    
    getAllNotes
      .then(response => {
        dispatch({
          type: NOTES_FETCHED,
          payload: response.data
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

export const getNote = noteId => {
  const getSingleNote = axios.get(`http://localhost:5000/notes/${noteId}`);
  return (dispatch) => {
    dispatch({ type: FETCHING_NOTE });

    getSingleNote
      .then(response => {
        dispatch({
          type: NOTE_FETCHED,
          payload: response.data
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
  const addNewNote = axios.post('http://localhost:5000/notes', noteObj);
  return (dispatch) => {
    dispatch({ type: ADDING_NOTE });

    addNewNote
      .then(response => {
        dispatch({
          type: NOTE_ADDED,
          payload: response.data
        });

        history.push('/');
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const updateNote = (id, noteObj) => {
  const editNote = axios.put(`http://localhost:5000/notes/${id}`, noteObj);
  return (dispatch) => {
    dispatch({ type: UPDATING_NOTE });

    editNote
      .then(response => {
        dispatch({
          type: NOTE_UPDATED,
          payload: response.data
        });

        history.push(`/note/${id}`);
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const deleteNote = noteId => {
  const removeNote = axios.delete (`http://localhost:5000/notes/${noteId}`);
  return (dispatch) => {
    dispatch({ type: DELETING_NOTE });

    removeNote
      .then(response => {
        dispatch({
          type: NOTE_DELETED,
          payload: response.data
        });

        history.push('/');
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};