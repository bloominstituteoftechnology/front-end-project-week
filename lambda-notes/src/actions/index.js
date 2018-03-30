import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';
export const FETCHED_NOTES = 'FETCHED_NOTES';

export const PUTTING_NOTE = 'PUTTING_NOTE';
export const PUT_NOTE_ERROR = 'PUT_NOTE_ERROR';
export const PUT_NOTE = 'PUT_NOTE';

// Get request
export const get_notes = () => dispatch => {
    dispatch({ type: FETCHING_NOTES });

    axios
        .get('http://localhost:5000/api/notes')
        .then(response => {
            dispatch({ type: FETCHED_NOTES, notes: response.data });
        })
        .catch(err => {
            dispatch({ type: GET_NOTES_ERROR, errorMessage: 'Error fetching notes'});
        });
};

// Put request
export const edit_note = (id, note) => dispatch => {
    dispatch({ type: PUTTING_NOTE });
    console.log(id, note);

    axios
        .put(`http://localhost:5000/api/notes/${id}`, note)
        .then(response => {
            console.log('put response', response);
            dispatch({ type: PUT_NOTE, note: response.data[id] });
        })
        .catch(err => {
            dispatch({ type: PUT_NOTE_ERROR, errorMessage: 'Error putting note'});
        });
};