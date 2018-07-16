import axios from 'axios';


export const GET_NOTES = 'GET_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';

export const getNotes = () => {
 return dispatch => {
     dispatch({type: GET_NOTES})
 }
}

export const addNotes = (e, newNote) => {
    e.preventDefault();
    return ({type: ADDING_NOTE, payload: newNote})
}