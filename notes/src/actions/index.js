import axios from 'axios';

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const POSTED = 'POSTED';
export const POSTING = 'POSTING';
export const ERROR = 'ERROR';

export const fetchNotes = () => {

    const fetchAllRequest = axios.get(`https://killer-notes.herokuapp.com/note/get/all`);

    return dispatch => {
        dispatch({type: FETCHING})

        fetchAllRequest.then(res => {
            dispatch({type: FETCHED, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        })
    }
}

export const addNote = note => {
    console.log(note);

    const addFriendRequest = axios.post(`https://killer-notes.herokuapp.com/note/create`, note);

    return dispatch => {

        dispatch({type: POSTING});

        addFriendRequest.then(res => {
            dispatch({type: POSTED, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        });

    }

    
}