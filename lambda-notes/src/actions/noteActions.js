import { GET_NOTES, DELETE_NOTE, ADD_NOTE } from './types';
import axios from 'axios'

const url = 'https://fe-notes.herokuapp.com/note';

export const getNotes = () => async dispatch => {
    const res= await axios.get(`${url}/get/all`);
    dispatch ({
        type: GET_NOTES,
        payload: res.data
    });
};

export const deletNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    };
};

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    };
};