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

    const fetchAllRequest = axios.get(`http://localhost:9000/api/notes`);

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
    const addNoteRequest = axios.post(`http://localhost:9000/api/notes`, note);

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

    const deleteNoteRequest = axios.delete(`http://localhost:9000/api/notes/${id}`);

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

    const editNoteRequest = axios.put(`http://localhost:9000/api/notes/${id}`, newNote);

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
    const fetchSingleRequest = axios.get(`http://localhost:9000/api/notes/${id}`);

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