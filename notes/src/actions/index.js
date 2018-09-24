import axios from 'axios';

export const ERROR = 'ERROR';
export const GETTING_NOTES = 'GETTING_NOTES';
export const GET_NOTES= 'GET_NOTES';
export const POSTING_NOTE = 'POSTING_NOTE'
export const POST_NOTE = 'POST_NOTE'
export const UPDATING_NOTE = 'UPDATING_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETING_NOTE = 'DELETING_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const SINGLE_NOTE = 'SINGLE_NOTE'
export const TOGGLE_UPDATE_NOTE = 'TOGGLE_UPDATE_NOTE'

const URL = 'https://killer-notes.herokuapp.com/note/get/all'

export const getNotes = () => {
    return dispatch => {
        dispatch ({ type:GETTING_NOTES });
        axios
        .get(`${URL}`)
        .then(response => {
            dispatch({ type:GET_NOTES, payload: response.data });
        })
        .catch(err => {
            dispatch ({ type:ERROR, payload: err });
        });
        };
    };

export const createNote = note => {
    return dispatch => {
        dispatch ({ type: POSTING_NOTE });
        axios
        .post(`${URL}`, note)
        .then(response => {
            dispatch ({ type:POST_NOTE, payload: response.data });
        })
        .catch(err => {
            dispatch ({ type:ERROR, payload:err });
        });
    };
};

export const deleteNote = id => {
    return dispatch => {
        dispatch ({ type:DELETING_NOTE });
        axios
        .delete(`${URL}/${id}`)
        .then(response => {
            dispatch ({ type:DELETE_NOTE, payload:response.data });
            dispatch({ type:SINGLE_NOTE, payload: {} });
        })
        .catch (err =>{
            dispatch({ type: ERROR, payload: err });
        });
    };
};

export const toggleShowUpdate = () => {
    return {
        type: TOGGLE_UPDATE_NOTE,
    };
};

export const updateSingleNote = note => {
    return{
        type: SINGLE_NOTE,
        payload: note,
    }
}