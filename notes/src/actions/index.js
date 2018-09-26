import axios from 'axios';

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const POSTED = 'POSTED';
export const POSTING = 'POSTING';
export const ERROR = 'ERROR';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const EDITING = 'EDITING';
export const EDITED = 'EDITED';


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

    const addNoteRequest = axios.post(`https://killer-notes.herokuapp.com/note/create`, note);

    return dispatch => {

        dispatch({type: POSTING});

        addNoteRequest.then(res => {
            console.log(res, 'posted response');
            dispatch({type: POSTED, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        });

    }
   
}

export const deleteNote = id => {

    const deleteNoteRequest = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`);

    return dispatch => {

        dispatch({type: DELETING});

        deleteNoteRequest.then(res => {
            dispatch({type: DELETED, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        })
    }
}

export const editNote = (id, newNote) => {

    const editNoteRequest = axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, newNote);

    return dispatch => {

        dispatch({type: EDITING});

        editNoteRequest.then(res => {
            console.log(res.data);
            dispatch({type: EDITED, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        })
    }
}