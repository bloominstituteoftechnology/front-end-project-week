import axios from 'axios';

export const FETCHED_NOTES = "FETCHED_NOTES";
export const FETCHING_NOTES = "FETCHING_NOTES";
export const ERROR_FETCHING_NOTES = "ERROR_FETCHING_NOTES";
export const ADDED_NOTE = "ADDED_NOTE";
export const ADDING_NOTE = "ADDING_NOTE";
export const ERROR_ADDING_NOTE = "ERROR_ADDING_NOTE";
export const FETCHING_SINGLE_NOTECARD = "FETCHING_SINGLE_NOTECARD";
export const FETCHED_SINGLE_NOTECARD = "FETCHED_SINGLE_NOTECARD";
export const ERROR_FETCHING_SINGLE_NOTECARD = "ERROR_FETCHING_SINGLE_NOTECARD";
export const UPDATED_NOTE = "UPDATED_NOTE";
export const UPDATING_NOTE = "UPDATING_NOTE";
export const ERROR_UPDATING_NOTE = "ERROR_UPDATING_NOTE";
export const DELETED_NOTE = "DELETED_NOTE";
export const DELETING_NOTE = "DELETING_NOTE";
export const ERROR_DELETING_NOTE = "ERROR_DELETING_NOTE";

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });

    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        dispatch({
          type: FETCHED_NOTES,
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

export const addNote = (newNote) => {
  return dispatch => {
    dispatch({ type: ADDING_NOTE });

    axios
      .post('https://killer-notes.herokuapp.com/note/create', newNote)
      .then(() => {
        console.log("Hit *then* of addNote");
        dispatch({
          type: ADDED_NOTE
        });
      })
      .then(
        () =>
          axios
            .get('https://killer-notes.herokuapp.com/note/get/all')
            .then(response => {
              dispatch({
                type: FETCHED_NOTES,
                payload: response.data
              });
            })
            .catch(error => {
              dispatch({
                type: ERROR_FETCHING_NOTES,
                payload: "ERROR: unable to fetch notes"
              });
            })
      )
      .catch(error => {
        dispatch({
          type: ERROR_ADDING_NOTE,
          payload: "ERROR: unable to add note"
        });
      })
  }
}

export const fetchSingleNoteCard = _id => {
  return dispatch => {
    dispatch({ type: FETCHING_SINGLE_NOTECARD });
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${_id}`)
      .then(({data}) => {
        dispatch({ 
          type: FETCHED_SINGLE_NOTECARD, 
          payload: data
        })
      })
      .catch(() => {
        dispatch({ 
          type: ERROR_FETCHING_SINGLE_NOTECARD, 
          payload: "ERROR: unable to fetch single notecard"
        })
      })
  }
}

export const updateNote = note => {
  return dispatch => {
    dispatch({ type: UPDATING_NOTE });

    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
      .then(response => {
        dispatch({
          type: UPDATED_NOTE,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR_UPDATING_NOTE,
          payload: "ERROR: unable to update note"
        });
      });
  }
};

export const deleteNote = (_id) => {
  return dispatch => {
    dispatch({ type: DELETING_NOTE });

    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${_id}`)
      .then(() => {
        dispatch({ type: DELETED_NOTE, _id })
      })
      .then(
        () =>
          axios
            .get('https://killer-notes.herokuapp.com/note/get/all')
            .then(response => {
              dispatch({
                type: FETCHED_NOTES,
                payload: response.data
              });
            })
            .catch(error => {
              dispatch({
                type: ERROR_FETCHING_NOTES,
                payload: "ERROR: unable to fetch notes"
              });
            })
      )
      .catch(error => {
        dispatch({
          type: ERROR_DELETING_NOTE,
          payload: "ERROR: unable to delete note"
        });
      })
  }
}