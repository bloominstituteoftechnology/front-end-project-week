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

export const OVERLAY_TOGGLE = 'OVERLAY_TOGGLE';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETING_NOTE_SUCCESS = 'DELETING_NOTE_SUCCESS';
export const DELETING_NOTE_FAILURE = 'DELETING_NOTE_FAILURE';

export const SETTING_NOTE = 'SETTING_NOTE';
export const SETTING_NOTE_SUCCESS = 'SETTING_NOTE_SUCCESS';
export const SETTING_NOTE_FAILURE = 'SETTING_NOTE_FAILURE';

export const ATTEMPTING_LOGIN = 'ATTEMPTING_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const ATTEMPTING_REGISTER = 'ATTEMPTING_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_STATUS_TOGGLE = 'LOGIN_STATUS_TOGGLE';

export const fetchNotes = () => dispatch => {
    dispatch({type: FETCHING_NOTES});
    return axios
    .get('https://notes-bryangf.herokuapp.com/api/notes')
    .then(response => {
        dispatch({type: FETCHING_NOTES_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: FETCHING_NOTES_FAILURE, payload: error})
    })
}

export const postNote = (note) => dispatch => {
    dispatch({type: POSTING_NOTE});
    return axios
    .post('https://notes-bryangf.herokuapp.com/api/notes', note)
    .then(response => {
        dispatch({type: POSTING_NOTE_SUCCESS})
    }) 
    .catch(error => {
        dispatch({type: POSTING_NOTE_FAILURE, payload: error})
    })
}

export const editNote = (id, note) => dispatch => {
    dispatch({type: EDITING_NOTE});
    return axios
    .put(`https://notes-bryangf.herokuapp.com/api/notes/${id}`, note)
    .then(response => {
        dispatch({type: EDITING_NOTE_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: EDITING_NOTE_FAILURE, payload: error})
    })
}

export const overlayToggle = () => dispatch => {
    dispatch({type: OVERLAY_TOGGLE});
}

export const deleteNote = (id) => dispatch => {
    dispatch({type: DELETING_NOTE});
    return axios
    .delete(`https://notes-bryangf.herokuapp.com/api/notes/${id}`)
    .then(response => {
        dispatch({type: DELETING_NOTE_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: DELETING_NOTE_FAILURE, payload: error})
    
    })
}

export const setNote = (id) => dispatch => {
    dispatch({type: SETTING_NOTE});
    axios
    .get(`https://notes-bryangf.herokuapp.com/api/notes/${id}`)
    .then(response => {
        dispatch({type: SETTING_NOTE_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: SETTING_NOTE_FAILURE, payload: error})
        
    })
}

export const loginStatusToggle = () => dispatch => {
    dispatch({type: LOGIN_STATUS_TOGGLE});
}

export const loginAttempt = (user) => dispatch => {
    dispatch({type: ATTEMPTING_LOGIN});
    return axios
    .post(`https://notes-bryangf.herokuapp.com/api/users/login`, user)
    .then(response => {
        dispatch({type: LOGIN_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: LOGIN_FAILURE, payload: error})
        
    })
}

export const registerAttempt = (user) => dispatch => {
    dispatch({type: ATTEMPTING_REGISTER});
    return axios
    .post(`https://notes-bryangf.herokuapp.com/api/users/register`, user)
    .then(response => {
        dispatch({type: REGISTER_SUCCESS, payload: response.data})
    }) 
    .catch(error => {
        dispatch({type: REGISTER_FAILURE, payload: error})
        
    })
}
