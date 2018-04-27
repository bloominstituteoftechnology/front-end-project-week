import axios from 'axios';
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const GET_ERROR = 'GET_ERROR';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const PUTTING_NOTE = 'PUTTING_NOTE';
export const PUT_ERROR = 'PUT_ERROR';
export const PUT_NOTE = 'PUT_NOTE';
export const POSTING_NOTE = 'POSTING_NOTE';
export const POST_ERROR = 'POST_ERROR';
export const POSTED_NOTE = 'POSTED_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETE_ERROR = 'DELETE_ERROR';
export const DELETED_NOTE = 'DELETED_NOTE';

export const get_notes = () => dispatch => {
    dispatch({ type: FETCHING_NOTES });
   axios
      .get('http://localhost:5000/api/notes')
        .then(response => {
            dispatch({ type: FETCHED_NOTES, notes: response.data });
        })
        .catch(err => {
            dispatch({ type: GET_ERROR, errorMessage: 'Error fetching notes'});
        });
};

export const edit_note = (id, note) => dispatch => {
    dispatch({ type: PUTTING_NOTE });
    console.log(id, note);
   axios
        .put(`http://localhost:5000/api/notes/${id}`, note)
        .then(response => {
            console.log('put response', response);
            dispatch({ type: PUT_NOTE, note: response.data });
        })
        .catch(err => {
            dispatch({ type: PUT_ERROR, errorMessage: 'Error putting note'});
        });
};

export const post_note = note => dispatch => {
    dispatch({ type: POSTING_NOTE });

    axios
        .post('http://localhost:5000/api/notes', note)
        .then(response => {
            dispatch({ type: POSTED_NOTE, note });
        })
        .catch(err => {
            dispatch({ type: POST_ERROR, errorMessage: 'Error posting note'});
        });
};

export const delete_note = (id) => dispatch => {
    dispatch({ type: DELETING_NOTE });

    axios
        .delete(`http://localhost:5000/api/notes/${id}`)
        .then(response => {
            dispatch({ type: DELETED_NOTE, notes: response.data });
        })
        .catch(err => {
            dispatch({ type: DELETE_ERROR, errorMessage: 'Error deleting note'});
        });
};