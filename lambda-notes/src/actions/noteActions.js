import { GET_NOTES, DELETE_NOTE, ADD_NOTE, GET_NOTE, UPDATE_NOTE } from './types';
import axios from 'axios'

export const getNotes = () => async dispatch => {
    const res= await axios.get('https://fe-notes.herokuapp.com/note/get/all');
    dispatch ({
        type: GET_NOTES,
        payload: res.data
    });
};

export const getNote = (id) => async dispatch => {
    const res= await axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`);
    dispatch ({
        type: GET_NOTE,
        payload: res.data
    });
};

export const deleteNote = (id) => async dispatch => {
    await axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`);
    dispatch ({
        type: DELETE_NOTE,
        payload: id
    });
};

export const addNote = (note) => async dispatch => {
    const res = await axios.post('https://fe-notes.herokuapp.com/note/create', note);
    dispatch ({
        type: ADD_NOTE,
        payload: res.data
    });
};

export const updateNote = note => async dispatch => {
    const res= await axios.put(`https://fe-notes.herokuapp.com/note/edit/${note.id}`, note);
    dispatch ({
        type: UPDATE_NOTE,
        payload: res.data
    });
};