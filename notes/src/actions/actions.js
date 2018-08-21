import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHING_ONE_NOTE = 'FETCHING_ONE_NOTE';
export const FETCHED_ONE_NOTE = 'FETCHED_ONE_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const ADDED_NOTE = 'ADDED_NOTE';
export const ERRORS = 'ERRORS';

const url = "https://killer-notes.herokuapp.com/note";

export const fetchNotes = () => {
    return dispatch => {
        dispatch({type: FETCHING_NOTES});
        axios
            .get(`${url}/get/all`)
            .then( response => {
                dispatch({type: FETCHED_NOTES, payload: response.data})
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    };
}

export const fetchOneNote = _id => {
    return dispatch => {
        dispatch({type: FETCHING_ONE_NOTE});
        axios
            .get(`${url}/get/${_id}`)
            .then( response => {
                dispatch({type: FETCHED_ONE_NOTE, payload: response.data})
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    };
}

// export const addNote = (title, textBody, tags) => {
//     return dispatch => {
//         dispatch({type: ADDING_NOTE});
//         axios
//             .post(`${url}/create`)
//     };
// }