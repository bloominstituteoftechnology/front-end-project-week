import axios from 'axios';

// const deployed-db = 'https://immense-plateau-90586.herokuapp.com';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';
export const FETCHED_NOTES = 'FETCHED_NOTES';

export const FETCHING_NOTE_BY_ID = 'FETCHING_NOTE_BY_ID';
export const FETCHED_NOTE_BY_ID_ERROR = 'GET_NOTE_BY_ID_ERROR';
export const FETCHED_NOTE_BY_ID = 'FETCHED_NOTE_BY_ID';

export const PUTTING_NOTE = 'PUTTING_NOTE';
export const PUT_NOTE_ERROR = 'PUT_NOTE_ERROR';
export const PUT_NOTE = 'PUT_NOTE';

export const POSTING_NOTE = 'POSTING_NOTE';
export const POST_NOTE_ERROR = 'POST_NOTE_ERROR';
export const POSTED_NOTE = 'POSTED_NOTE';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR';
export const DELETED_NOTE = 'DELETED_NOTE';

// Get request
export const get_notes = () => dispatch => {
  dispatch({ type: FETCHING_NOTES });

  axios
    .get('https://immense-plateau-90586.herokuapp.com/api/notes')
    .then(response => {
      dispatch({ type: FETCHED_NOTES, notes: response.data });
    })
    .catch(err => {
      dispatch({ type: GET_NOTES_ERROR, errorMessage: 'Error fetching notes' });
    });
};

// Get by ID request
export const get_note = id => dispatch => {
  dispatch({ type: FETCHING_NOTE_BY_ID });

  axios
    .get(`https://immense-plateau-90586.herokuapp.com/api/notes/${id}`)
    .then(response => {
      dispatch({ type: FETCHED_NOTE_BY_ID, note: response.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHED_NOTE_BY_ID_ERROR,
        errorMessage: 'Error fetching note by ID',
      });
    });
};

// Put request
export const edit_note = (id, note) => dispatch => {
  dispatch({ type: PUTTING_NOTE });
  console.log(id, note);

  axios
    .put(`https://immense-plateau-90586.herokuapp.com/api/notes/${id}`, note)
    .then(response => {
      console.log('put response', response);
      dispatch({ type: PUT_NOTE, note: response.data });
    })
    .catch(err => {
      dispatch({ type: PUT_NOTE_ERROR, errorMessage: 'Error putting note' });
    });
};

// Post request
export const post_note = note => dispatch => {
  dispatch({ type: POSTING_NOTE });

  axios
    .post('https://immense-plateau-90586.herokuapp.com/api/notes', note)
    .then(response => {
      dispatch({ type: POSTED_NOTE, note });
    })
    .catch(err => {
      dispatch({ type: POST_NOTE_ERROR, errorMessage: 'Error posting note' });
    });
};

// Delete request
export const delete_note = id => dispatch => {
  dispatch({ type: DELETING_NOTE });

  axios
    .delete(`https://immense-plateau-90586.herokuapp.com/api/notes/${id}`)
    .then(response => {
      dispatch({ type: DELETED_NOTE, notes: response.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_NOTE_ERROR,
        errorMessage: 'Error deleting note',
      });
    });
};
