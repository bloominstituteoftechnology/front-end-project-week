import axios from 'axios';
import Creators from './actions';
import NoteViewOperations from '../../note-view/duck/operations';
const updatingNote = Creators.updatingNote;
const updatedNote = Creators.updatedNote;
const updateNote = (id, noteObj) => {
    const promise = axios.put(`http://localhost:8001/api/notes/${id}`, noteObj);
    return dispatch => {
        dispatch(updatingNote());
        promise
        .then(response => {
            console.log("updated response:",response);
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