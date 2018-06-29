import axios from 'axios';
export const FETCH_NOTES = 'FETCH_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SEARCH_NOTE = 'SEARCH_NOTE';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const ADD_USER = 'ADD_USER';
export const CSV = 'CSV';
// export const LOGIN_USER = 'LOGIN_USER';

// export const fetchNotes = () => {
//     return {
//         type: FETCH_NOTES
//     }
// }

export const fetchNotes = (requestOptions) => {
    const getNotes = axios.get('https://lambda-note.herokuapp.com/api/notes', requestOptions)
    return function(dispatch) {
        
        getNotes
            .then(response => {
                console.log(response);
                dispatch({type: FETCH_NOTES, payload: response.data})
            })
            .catch(err => {dispatch({type: ERROR, payload: err})})
    }
}

// export const addNote = newNote => {
//     return {
//         type: ADD_NOTE,
//         payload: newNote
//     }
// }

export const addNote = newNote => {
    const addNewNote = axios.post('https://lambda-note.herokuapp.com/api/notes', newNote);
    return function(dispatch) {
        dispatch({type: PENDING})
        addNewNote  
            .then((response) => {
                dispatch({type: ADD_NOTE, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
}

// export const deleteNote = id => {
//     return {
//         type: DELETE_NOTE,
//         payload: id
//     }
// }

export const deleteNote = id => {
    const noteDeletion = axios.delete(`https://lambda-note.herokuapp.com/api/notes/${id}`)
    return function(dispatch) {
        noteDeletion
            .then((response) => {
                dispatch({type: DELETE_NOTE, payload: response.data})
                // console.log(response.data)
            })
            .catch(err => {
                console.log(err)
                dispatch({type: ERROR, payload: err.error})
            })
    }
}

// export const editNote = editedNote => {
//     return {
//         type: EDIT_NOTE,
//         payload: editedNote
//     }
// }

export const editNote = (id, editedNote) => {
    const modifyNote = axios.put(`https://lambda-note.herokuapp.com/api/notes/${id}`, editedNote)
    return function(dispatch) {
        modifyNote 
            .then(response => {
                dispatch({type: EDIT_NOTE, payload: response.data})
                console.log(response.data)
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
}

export const searchNote =  title => {
    return {
        type: SEARCH_NOTE,
        payload: title
    }
}

export const saveFilteredNotesForCSV = csvArr => {
    return {
        type: CSV,
        payload: csvArr
    }
}

// USER ACTIONS
export const registerUser = newUser => {
    const addNewUser = axios.post('https://lambda-note.herokuapp.com/api/users/register', newUser);
    return function(dispatch) {
        dispatch({type: PENDING})
        addNewUser  
            .then((response) => {
                dispatch({type: ADD_USER, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
}

// export const loginUser = user => {
//     const userAttempt = axios.post('https://lambda-note.herokuapp.com/api/users/login', user);
//     return function(dispatch) {
//         dispatch({type: PENDING}) 
//             userAttempt 
//                 .then(response => {
//                     dispatch({type: LOGIN_USER, payload: response.data})
//                 })
//                 .catch(err => {
//                     dispatch({type: ERROR, payload: err})
//                 })
//         }
// }

