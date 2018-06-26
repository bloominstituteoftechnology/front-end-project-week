import axios from 'axios'

export const FETCHING_NOTE = "FETCHING_NOTE"
export const FETCH_NOTE = "FETCH_NOTE"
export const FETCHING_NOTES = "FETCHING_NOTES"
export const FETCH_NOTES = "FETCH_NOTES"
export const ADDING_NOTE = "ADDING_NOTE"
export const ADD_NOTE = "ADD_NOTE"
export const EDITING_NOTE = "EDITING_NOTE"
export const EDIT_NOTE = "EDIT_NOTE"
export const DELETING_NOTE = "DELETING_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"
export const NOT_DELETING_NOTE = "NOT_DELETING_NOTE"

export const ERROR = "ERROR"

export const fetchNote = (id) => {
    const fetchANote = axios.get(`http://localhost:5000/${id}`)
    return function(dispatch) {
        dispatch({
            type: FETCHING_NOTE,
        });
        fetchANote
            .then(response => {
                dispatch({
                    type: FETCH_NOTE,
                    payload: response.data.notes
                })
            })
    }
}

export const fetchNotes = () => {
    const fetchAllNotes = axios.get(`http://localhost:5000/notes`)
    return function(dispatch) {
        dispatch({
            type: FETCHING_NOTES
        });
        fetchAllNotes
            .then(response => {
                dispatch({
                    type: FETCH_NOTES,
                    payload: response.data.notes
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
    }
}
export const addNote = (note) => {
    const addANote = axios.post(`http://localhost:5000/notes`)
    return function(dispatch) {
        dispatch({
            type: ADDING_NOTE,
        });
        addANote
            .then(response => {
                dispatch({
                    type: ADD_NOTE,
                    payload: response.data.notes
                })
            })            
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
        }
    }

export const editNote = (note, id) => {
    const editANote = axios.put(`http://localhost:5000/notes/${id}`, { note })
    return function(dispatch) {
        dispatch({
            type: EDITING_NOTE
        });
        editANote
            .then(response => {
                dispatch({
                    type: EDIT_NOTE,
                    payload: response.data.notes
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
        }
    }

export const cancelDelete = () => {
    return {
        type: NOT_DELETING_NOTE
    }
}
export const deleteNote = id => {
    const deleteANote = axios.delete(`http://localhost:5000/notes/${id}`)
    return function(dispatch) {
        dispatch({
            type: DELETING_NOTE
        });
        deleteANote 
            .then(response => {
                dispatch({
                    type: DELETE_NOTE,
                    payload: response.notes
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
    }
}