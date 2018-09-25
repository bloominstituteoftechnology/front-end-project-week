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
// export const REGISTERING_USER = 'REGISTERING_USER';
// export const REGISTERED_USER = 'REGISTERED_USER';
// export const LOGGING_USER = 'LOGGING_USER';
// export const LOGGED_USER = 'LOGGED_USER';
// export const FILTERING_NOTES = 'FILTERING_NOTES';
// export const FILTERED_NOTES = 'FILTERED_NOTES';

const url = "http://localhost:8000";

export const fetchNotes = () => {
    return dispatch => {
        dispatch({type: FETCHING_NOTES});
        axios
            .get(`${url}/note/all`)
            .then( response => {
                dispatch({type: FETCHED_NOTES, payload: response.data});
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    }
};

export const fetchOneNote = id => {
    return dispatch => {
        dispatch({type: FETCHING_ONE_NOTE});
        axios
            .get(`${url}/note/${id}`)
            .then( response => {
                dispatch({type: FETCHED_ONE_NOTE, payload: response.data})
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    };
};

export const addNote = (title, textBody) => {
    return dispatch => {
        dispatch({type: ADDING_NOTE});
        axios
        .post(`${url}/create`, {
            title: title,
            textBody: textBody,
        })
        .then(response => {
            dispatch({type: ADDED_NOTE, payload: response.config.data});
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
        };
};
    
export const updateNote = (title, textBody, id) => {
    return dispatch => {
        dispatch({type: UPDATING_NOTE});
        axios  
        .put(`${url}/edit/${id}`, {
            title: title,
            textBody: textBody,
        })
        .then(() => {
            dispatch({type:UPDATED_NOTE});
            window.location.href="/note/all";
        })
        
        .catch (err => {dispatch({type: ERRORS, payload: err})});
    }
};
    
export const deleteNote = id => {
    return dispatch => {
        dispatch({type: DELETING_NOTE});
        axios
        .delete(`${url}/delete/${id}`)
        .then(() => {
            dispatch({type: DELETED_NOTE});
            window.location.href="/note/all";
        })
        .catch (err => {dispatch({type: ERRORS, payload: err})});
    }
};
    
// export const registerUser = (email, password) => {
//     return dispatch => {
//         dispatch ({ type: REGISTERING_USER });
//         axios
//             .post(`${url}/register`, {
//                 email: email,
//                 password: password
//             })
//             .then( res => {
//                 dispatch({ type: REGISTERED_USER, payload: response.config.data })
//             })
//             .catch( err => {dispatch({ type: ERRORS, payload: err })});
//     };
// };

// export const filterNotes = notes => {
//     return dispatch => {
//         dispatch({type:FILTERING_NOTES});
//         axios
//             .post("http://localhost:3000/filteredNotes", {notes})
//             .then( response => {
//                 dispatch({type: FILTERED_NOTES, payload: response.data })
//             })
//             .catch (err => {dispatch({type: ERRORS, payload: err})});
//     }
// }