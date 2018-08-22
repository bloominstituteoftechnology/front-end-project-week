import axios from 'axios';
import Creators from './actions';
import HomeOperations from '../../home/duck/operations';

const requestNote = Creators.requestNote;
const receiveNote = Creators.receiveNote;
const deletingNote = Creators.deleteNote;
const deleteNote = Creators.deleteNote;
const fetchAllNotes = HomeOperations.fetchNotes;
const fetchNote = (id) => {
    const promise = axios.get(`https://lambda-note-taker.herokuapp.com/api/notes/${id}`);
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
    const promise = axios.delete(`https://lambda-note-taker.herokuapp.com/api/notes/${id}`);
    return dispatch => {
        dispatch(deletingNote());
        promise
        .then(response => {
            console.log(response.data);
            dispatch(deleteNote())
        })
        .then(() => {
            dispatch(fetchAllNotes());
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