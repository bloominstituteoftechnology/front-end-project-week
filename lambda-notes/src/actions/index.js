import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const UPDATING_NOTES = 'UPDATING_NOTES';
export const DELETING_NOTE = 'DELETING_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getNotes = () => {
    const promise = axios.get('http://localhost:3000/notes')
    return dispatch => {
        dispatch({ type: FETCHING_NOTES })
        promise.then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const addNote = note => {
    const promise = axios.post('http://localhost:3000/notes', note)
}