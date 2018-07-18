import axios from 'axios';
import Creators from './actions';

const requestNote = Creators.requestNote;
const receiveNote = Creators.receiveNote;
const deletingNote = Creators.deleteNote;
const deleteNote = Creators.deleteNote;

const fetchNote = (id) => {
    const promise = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);
    return dispatch => {
        dispatch(requestNote());
        promise
        .then(response => {
            dispatch(receiveNote(response.data));
        }).then(() => {
            
        })
        .catch(err => {
            console.log(err);
        })
    }
}

const noteDeletion = (id) => {
    console.log(id);
    const promise = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`);
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