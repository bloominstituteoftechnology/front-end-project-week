import axios from 'axios';

export const GET_NOTES = 'GET_NOTES';
export const GET_NOTE = 'GET_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR = 'ERROR';

export const getNotes = () => {
    return (dispatch) => {
        axios.get('http://localhost:2005/notes')
        .then((response) => {
            dispatch({
                type: GET_NOTES,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const getNote = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:2005/notes/${id}`)
        .then((response) => {
            dispatch({
                type: GET_NOTE,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const createNote = (note) => {
    return (dispatch) => {
        axios.post('http://localhost:2005/notes', note)
        .then((response) => {
            dispatch({
                type : CREATE_NOTE,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const updateNote = (note, id) => {
    return (dispatch) => {
        axios.put(`http://localhost:2005/notes/${id}`, note)
        .then((response) => {
            dispatch({
                type : UPDATE_NOTE,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const deleteNote = () => {
    return (dispatch) => {
        
    }
}
export const error = () => {
    return (dispatch) => {
        
    }
}