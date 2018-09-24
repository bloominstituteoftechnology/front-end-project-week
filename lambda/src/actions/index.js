import { testNotes } from '../data';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const ADDING_NOTES = 'ADDING_NOTES';
export const ADDED_NOTES = 'ADDED_NOTES';
export const DELETING_NOTES = 'DELETING_NOTES';
export const DELETED_NOTES = 'DELETED_NOTES';
export const UPDATING_NOTES = 'UPDATING_NOTES';
export const UPDATED_NOTES = 'UPDATED_NOTES';
export const ERROR = 'ERROR';

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    // Do something
    const notes = testNotes;
    dispatch({ type: FETCHED_NOTES, payload: notes });
  };
};

let idCount = 3;
export const addNewNote = data => {
  return dispatch => {
    dispatch({ type: ADDING_NOTES });
    //Do the api calls here
    testNotes.push(data);
    dispatch({
      type: ADDED_NOTES,
      payload: {
        ...data,
        id: idCount++
      }
    });
  };
};

export const deleteNote = noteId => {
  return dispatch => {
    dispatch({ type: DELETING_NOTES });
    dispatch({ type: DELETING_NOTES });
  };
};

export const updateNotes = data => {
  return dispatch => {
    dispatch({ type: UPDATING_NOTES });
    //Do the updated
    dispatch({ type: UPDATED_NOTES });
  };
};
