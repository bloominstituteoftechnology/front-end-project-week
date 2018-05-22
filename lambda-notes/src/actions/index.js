import axios from 'axios';
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const SINGLE_NOTE = 'SINGLE_NOTE';

const pending = () => {
    return {
        type: PENDING
    }
}

const success = (data) => {
    return {
        type: SUCCESS,
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

// Can this be used to simplify actions?
// const dispatchAction = (dispatch, req) => {
//     dispatch(pending())
//     req
//         .then( res => {
//             dispatch(success(res.data));
//         })
//         .catch( err => {
//             dispatch(error(err));
//         })
// }

export const fetchNotes = () => {
    const getNotes = axios.get('http://localhost:5000/notes')
    return function(dispatch) {
        dispatch(pending())
        getNotes
            .then( res => {
                dispatch(success(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }     
}

export const fetchNote = (id) => {
    const getNote = axios.get(`http://localhost:5000/note/${id}`)
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
    const postNote = axios.post('http://localhost:5000/notes', note)
    return function(dispatch) {
        dispatch(pending())
        postNote
            .then( res => {
               dispatch(success(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const updateNote = (note) => {
    const putNote = axios.put(`http://localhost:5000/note/${note.id}`, note)
    return function(dispatch) {
        dispatch(pending())
        putNote
            .then( res => {
                dispatch(success(res.data))
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const removeNote = (note) => {
    const deleteNote = axios.delete(`http://localhost:5000/note/${note.id}`)
    return function(dispatch) {
        dispatch(pending())
        deleteNote
            .then( res => {
                dispatch(success(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }     
}

