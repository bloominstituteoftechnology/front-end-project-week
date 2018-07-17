import axios from 'axios';
import Creators from './actions';
import HomeOperations from '../../home/duck/operations';

const requestPost = Creators.requestPost;
const postCompleted = Creators.postCompleted;
const fetchNotes = HomeOperations.fetchNotes;

const postNote = (noteObj) => {
    const promise = axios.post('https://killer-notes.herokuapp.com/note/create', noteObj);
    return dispatch => {
        dispatch(requestPost());
        promise
        .then(response => {
            console.log(response);
            dispatch(postCompleted());
        }).then(() => {
            dispatch(fetchNotes());
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default {
    postNote
}