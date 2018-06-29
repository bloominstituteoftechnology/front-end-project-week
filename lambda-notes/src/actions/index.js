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

export const deleteNote = id => {
    const noteDeletion = axios.delete(`https://lambda-note.herokuapp.com/api/notes/${id}`)
    return function(dispatch) {
        noteDeletion
            .then((response) => {
                dispatch({type: DELETE_NOTE, payload: response.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: ERROR, payload: err.error})
            })
    }
}

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

export const registerUser = newUser => {
    const addNewUser = axios.post('https://lambda-note.herokuapp.com/api/users/register', newUser);
    return function(dispatch) {
        addNewUser  
            .then((response) => {
                dispatch({type: ADD_USER, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR, payload: err})
            })
    }
}


