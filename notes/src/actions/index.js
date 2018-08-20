import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHING_NOTE = 'FETCHING_NOTE';
export const FETCHED_NOTE = 'FETCHED_NOTE';
export const SAVING_NOTES = 'SAVING_NOTES';
export const SAVED_NOTES = 'SAVED_NOTES';
export const UPDATING_NOTES = 'UPDATING_NOTES';
export const UPDATED_NOTES = 'UPDATED_NOTES';
export const DELETING_NOTES = 'DELETING_NOTES';
export const DELETED_NOTES = 'DELETED_NOTES';
export const ERROR = 'ERROR';

export const fetchNotes = () => {
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });

        axios.get('https://killer-notes.herokuapp.com/note/get/all')
            .then(res => {
                dispatch({ type: FETCHED_NOTES, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            })
    }
}

export const fetchNote = noteId => {
    return dispatch => {
        dispatch({ type: FETCHING_NOTE });

        axios.get(`https://killer-notes.herokuapp.com/note/get/${noteId}`)
            .then(res => {
                dispatch({ type: FETCHED_NOTE, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            })
    }
}

export const addNote = note => {
    return dispatch => {
        dispatch({ type: SAVING_NOTES });
        axios.post('https://killer-notes.herokuapp.com/note/create', {
            name: note.name,
            content: note.content,
        })
            .then(res => {
                dispatch({ type: SAVED_NOTES, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}

export const deleteNote = NoteId => {
    return dispatch => {
        dispatch({ type: DELETING_NOTES });
        axios.delete(`https://killer-notes.herokuapp.com/note/delete/${NoteId}`)
            .then(res => {
                dispatch({ type: DELETED_NOTES, payload: res.data })
            })
            .catch(err => {
                dispatch({ TYPE: ERROR, payload: err });
            })
    }
}

export const updateNote = note => {
    return dispatch => {
        dispatch({ type: UPDATING_NOTES });
        axios.put(`https://killer-notes.herokuapp.com/note/edit/${note.id}`, {
            name: note.name,
            content: note.content
        })
            .then(res => {
                dispatch({ type: UPDATED_NOTES, payload: res.data })
            })
            .catch(err => {
                dispatch({ TYPE: ERROR, payload: err });
            })
    }
}