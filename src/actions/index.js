import axios from 'axios';
export const PENDING = 'PENDING';
export const FETCHED = 'FETCHED';
export const CREATED = 'CREATED';
export const UPDATED = 'UPDATED';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';
export const SINGLE_NOTE = 'SINGLE_NOTE';

const pending = () => {
    return {
        type: PENDING
    }
}

const fetchedNote = (data) => {
    return {
        type: FETCHED,
        payload: data
    }
}

const createdNote = (data) => {
    return {
        type: CREATED,
        payload: data
    }
}

const updatedNote = (data) => {
    return {
        type: UPDATED,
        payload: data
    }
}

const deletedNote = (data) => {
    return {
        type: DELETED,
        payload: data
    }
}

const error = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}

const singleNote = (data) => {
    return {
        type: SINGLE_NOTE,
        payload: data
    }
}

export const fetchNotes = () => {
    const getNotes = axios.get('http://localhost:5000/api/notes')
    return function(dispatch) {
        dispatch(pending())
        getNotes
            .then( res => {
                dispatch(fetchedNote(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }    
}

export const fetchNote = (id) => {
    const getNote = axios.get(`http://localhost:5000/api/notes/${id}`)
    return function(dispatch) {
        dispatch(pending())
        getNote
            .then( res => {
                dispatch(singleNote(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }     
}

export const createNote = (note) => {
    const postNote = axios.post('http://localhost:5000/api/notes', note)
    return function(dispatch) {
        dispatch(pending())
        postNote
            .then( res => {
               dispatch(createdNote(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const updateNote = (note) => {
    const putNote = axios.put(`http://localhost:5000/api/notes/${note._id}`, note)
    return function(dispatch) {
        dispatch(pending())
        putNote
            .then( res => {
                dispatch(updatedNote(res.data))
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const removeNote = (id) => {
    const deleteNote = axios.delete(`http://localhost:5000/api/notes/${id}`)
    return function(dispatch) {
        dispatch(pending())
        deleteNote
            .then( res => {
                dispatch(deletedNote(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }     
}

