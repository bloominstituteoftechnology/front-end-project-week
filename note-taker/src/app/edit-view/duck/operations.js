import axios from 'axios';
import Creators from './actions';
import NoteViewOperations from '../../note-view/duck/operations';
const updatingNote = Creators.updatingNote;
const updatedNote = Creators.updatedNote;
const updateNote = (id, noteObj) => {
    const promise = axios.put(`https://lambda-note-taker.herokuapp.com/api/notes/${id}`, noteObj);
    return dispatch => {
        dispatch(updatingNote());
        promise
        .then(response => {
            dispatch(updatedNote(response.data))
        }).then(() => {
            dispatch(NoteViewOperations.fetchNote(id));
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default {
    updateNote
}