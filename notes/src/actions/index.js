import axios from 'axios';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHING_NOTES_SUCCESS = "FETCHING_NOTES_SUCCESS"
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE"

export const POSTING_NOTE = "POSTING_NOTE";
export const POSTING_NOTE_SUCCESS = "POSTING_NOTE_SUCCESS"
export const POSTING_NOTE_FAILURE = "POSTING_NOTE_FAILURE"

export const EDITING_NOTE = "EDITING_NOTE";
export const EDITING_NOTE_SUCCESS = "EDITING_NOTE_SUCCESS"
export const EDITING_NOTE_FAILURE = "EDITING_NOTE_FAILURE"

export const fetchNotes = () => dispatch => {
    dispatch({type: FETCHING_NOTES});
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
        dispatch({type: FETCHING_NOTES_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: FETCHING_NOTES_FAILURE, payload: error})
    })
}

export const postNote = (note) => dispatch => {
    dispatch({type: POSTING_NOTE});
    axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response => {
        console.log(response)
        dispatch({type: POSTING_NOTE_SUCCESS})
    }) 
    .catch(error => {
        dispatch({type: POSTING_NOTE_FAILURE, payload: error})
    })
}

export const editNote = (id, note) => dispatch => {
    dispatch({type: EDITING_NOTE});
    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response => {
        dispatch({type: EDITING_NOTE_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: EDITING_NOTE_FAILURE, payload: error})
    })
}