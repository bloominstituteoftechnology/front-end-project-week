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
export const FETCHING_SINGLE = 'FETCHING_SINGLE';
export const FETCHED_SINGLE = 'FETCHED_SINGLE';


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
    const addNoteRequest = axios.post(`https://killer-notes.herokuapp.com/note/create`, note);

    return dispatch => {

        dispatch({type: POSTING});

        addNoteRequest.then(res => {
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
            dispatch({type: EDITED, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        })
    }
}

export const fetchSingleNote = (id) => {

    const fetchSingleRequest = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);

    return dispatch => {
        dispatch({type: FETCHING_SINGLE});

        fetchSingleRequest.then(res => {
            dispatch({type: FETCHED_SINGLE, payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        })
    }
}