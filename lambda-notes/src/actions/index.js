import axios from 'axios';

export const FETCHED_NOTES = "FETCHED_NOTES";
export const FETCHING_NOTES = "FETCHING_NOTES";
export const ERROR_FETCHING_NOTES = "ERROR_FETCHING_NOTES";
export const ADDED_NOTE = "ADDED_NOTE";
export const ADDING_NOTE = "ADDING_NOTE";
export const ERROR_ADDING_NOTE = "ERROR_ADDING_NOTE";
export const UPDATED_NOTE = "UPDATED_NOTE";
export const UPDATING_NOTE = "UPDATING_NOTE";
export const ERROR_UPDATING_NOTE = "ERROR_UPDATING_NOTE";
export const DELETED_NOTE = "DELETED_NOTE";
export const DELETING_NOTE = "DELETING_NOTE";
export const ERROR_DELETING_NOTE = "ERROR_DELETING_NOTE";

export const fetchNotes = () => {
    return dispatch => {
        dispatch({ type: FETCHED_NOTES });

    axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => {
            dispatch({
              type: FETCHING_NOTES,
              payload: response.data
            });
          })
        .catch(error => {
            dispatch({
              type: ERROR_FETCHING_NOTES,
              payload: "ERROR: unable to fetch notes"
            });
          })
    }
}

export const addNote = (note) => {
    return dispatch => {
        dispatch({ type: ADDING_NOTE });

    axios
        .post('https://killer-notes.herokuapp.com/note/create', note)
        .then(({ data }) => {
            dispatch({
              type: ADDED_NOTE,
              payload: data
            });
          })
        .catch(error => {
            dispatch({
              type: ERROR_ADDING_NOTE,
              payload: "ERROR: unable to add note"
            });
          })
    }
}

export const updateNote = () => {
  
}

export const deleteNote = (id) => dispatch => {
    return dispatch => {
      dispatch({ type: DELETING_NOTE });
  
      axios
        .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
        .then(() => {
          dispatch({type: DELETE_NOTE, id})
        })
        .catch(error => {
          dispatch({
            type: ERROR_DELETING_NOTE,
            payload: "ERROR: unable to delete note" 
          });
        })
    } 
}