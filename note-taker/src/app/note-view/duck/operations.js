import axios from 'axios';
import Creators from './actions';

const requestNote = Creators.requestNote;
const receiveNote = Creators.receiveNote;
const deletingNote = Creators.deleteNote;
const deleteNote = Creators.deleteNote;

const fetchNote = (id) => {
    const promise = axios.get(`http://localhost:8001/api/notes/${id}`);
    return dispatch => {
        dispatch(requestNote());
        promise
        .then(response => {
            dispatch(receiveNote(response.data));
            return response.data;
        })
        .catch(err => {
            console.log(err);
        })
    }
}

const noteDeletion = (id) => {
    console.log(id);
    const promise = axios.delete(`http://localhost:8001/api/notes/${id}`);
    return dispatch => {
        dispatch(deletingNote());
        promise
        .then(response => {
            console.log(response.data);
            dispatch(deleteNote())
        })
        .catch(err => {
            console.log(err);
        })
    }
}


export default {
    fetchNote,
    noteDeletion
}