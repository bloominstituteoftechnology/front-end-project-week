import axios from 'axios';

export const GET_NOTES = 'GET_NOTES';
export const GET_NOTE = 'GET_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR = 'ERROR';

export const getNotes = () => {
    return (dispatch) => {

    }
}
export const getNote = () => {
    return (dispatch) => {
        
    }
}
export const createNote = (note) => {
    return (dispatch) => {
        axios.post('http://localhost:2005/note', note)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
        
    }
}
export const editNote = () => {
    return (dispatch) => {
        
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