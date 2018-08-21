import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHING_ONE_NOTE = 'FETCHING_ONE_NOTE';
export const FETCHED_ONE_NOTE = 'FETCHED_ONE_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const ADDED_NOTE = 'ADDED_NOTE';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATED_NOTE = 'UPDATED NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETED_NOTE = 'DELETED_NOTE';
export const ERRORS = 'ERRORS';

const url = "https://killer-notes.herokuapp.com/note";

export const fetchNotes = () => {
    return dispatch => {
        dispatch({type: FETCHING_NOTES});
        axios
            .get(`${url}/get/all`)
            .then( response => {
                dispatch({type: FETCHED_NOTES, payload: response.data});
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    }
};

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

export const addNote = (title, textBody, tags) => {
    return dispatch => {
        dispatch({type: ADDING_NOTE});
        axios
            .post(`${url}/create`, {
                title: title,
                textBody: textBody,
                tags: tags,
            })
            .then( response => {
                dispatch({type: ADDED_NOTE, payload: response.data});
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    };
}

export const updateNote = (title, textBody, _id) => {
    return dispatch => {
        dispatch({type: UPDATING_NOTE});
        axios  
            .put(`${url}/edit/${_id}`, {
                title: title,
                textBody: textBody,
            })
            .then(response => {
                dispatch({type:UPDATED_NOTE, payload: response.data});
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    }
}

export const deleteNote = _id => {
    return dispatch => {
        dispatch({type: DELETING_NOTE});
        axios
            .delete(`${url}/delete/${_id}`)
            .then(response => {
                dispatch({type: DELETED_NOTE, payload: response.data});
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    }
}