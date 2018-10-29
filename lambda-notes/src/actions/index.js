import axios from 'axios';

export const ERROR = 'ERROR';
export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTE_SUCCESS = 'NOTE_SUCCESS';
export const CREATING_NOTE = 'CREATING_NOTE';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';

export const getNotes = () => dispatch => {
    dispatch( {type: GETTING_NOTES } );
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then( response => {
        console.log('response', response);
        dispatch({ type: NOTE_SUCCESS, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: ERROR, payload: error });
    })
}

export const createNote = note => dispatch => {
    dispatch( {type: CREATING_NOTE} );
    axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(({data}) => {
        console.log('data', data)
        dispatch({ type: CREATE_SUCCESS, payload: data });
    })
    .catch(error => {
        dispatch({ type: ERROR, payload: error})
    })
}