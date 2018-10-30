import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchAll = () => {
    return function(dispatch) {
        dispatch({ type: FETCHING });
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                dispatch({ type: SUCCESS, payload: response.data })
                
            })
            .catch(error => {
                dispatch({ type: FAILURE, payload: error })
            })
    }
}

export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ADD_FAILURE = 'ADD_FAILURE';

export const addNote = () => {
    return function(dispatch) {
        dispatch({ type: ADDING });
        axios
            .post('https://fe-notes.herokuapp.com/note/create')
            .then(response => {
                dispatch({ 
                    type: SUCCESS,
                    payload: response.data 
                })
            })
            .catch(error => {
                dispatch({ 
                    type: ADD_FAILURE,
                    payload: error 
                })
            })
    }
}

export const EDITING = 'EDITING';
export const EDITED = 'EDITED';
export const EDIT_FAILURE = 'EDIT_FAILURE';

export const editNote = id => {
    return function(dispatch) {
        dispatch({ type: EDITING });
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`)
            .then(response => {
                dispatch({
                    type: EDITED,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: EDIT_FAILURE,
                    payload: error
                })
            })
            
    }
}

export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteNote = id => {
    return function(dispatch) {
        dispatch({ type: DELETING });
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => {
                dispatch({ 
                    type: DELETED,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({ 
                    type: DELETE_FAILURE,
                    payload: error
                })
            })
    }
}