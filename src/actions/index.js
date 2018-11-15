import axios from 'axios';

export const LOADING = "LOADING";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const GET_NOTES = "GET_NOTES";
export const GET_NOTE = "GET_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const getNotes = () => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then( response => {
                dispatch({type: GET_NOTES, notes: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR_MESSAGE, errorMessage: "Your notes could not be found. Try again?"})
            })
    }
}


export const getOneNote = (id) => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then( response => {
                dispatch({type: GET_NOTE, currentNote: response.data})
            })
            .catch( err => {
                dispatch({type: ERROR_MESSAGE, errorMessage: "This note is playing Hide and Seek. Look harder."})
            })
    }
}


export const addNote = (newNote) => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
            .then( response => {
                axios.get('https://fe-notes.herokuapp.com/note/get/all')
                    .then(response => {
                        dispatch({type: GET_NOTES, notes: response.data})
                    })
                    .catch(err => {
                        dispatch({type: ERROR_MESSAGE, errorMessage: "The new note was added but the other notes are now hiding from it. You may have accidentally added a monster note..."})
                    })
            })
            .catch( err => {
                dispatch({type: ERROR_MESSAGE, errorMessage: "This note could not be added. Try again."})
            })
    }
}


export const updateNote = (id, updatedNote) => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updatedNote)
            .then( response => {
                dispatch({type: UPDATE_NOTE, currentNote: response.data})
            })
            .catch( err => {
                dispatch({type: ERROR_MESSAGE, errorMessage: "This note prefers not to be changed and declined your requested edits."})
            })
    }
}


export const deleteNote = (id) => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then( response => {
                dispatch({type: GET_NOTES, notes: response.data})
            })
            .catch( err => {
                dispatch({type: ERROR_MESSAGE, errorMessage: "This all-powerful note cannot simply cease to exist per your command."})
            })
    }
}