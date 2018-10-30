import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
// export const UPDATING = 'UPDATING';
// export const UPDATED = 'UPDATED';
// export const DELETING = 'DELETING';
// export const DELETED = 'DELETED';
export const ERROR = 'ERROR';
export const FETCHING_NOTE = 'FETCHING_NOTE';
export const FETCHED_NOTE = 'FETCHED_NOTE';

export const fetchNotes = () => {
    return dispatch => {
         dispatch({ type: FETCHING });
         axios
         .get('https://fe-notes.herokuapp.com/note/get/all')
         .then(response => {
             dispatch({ type: FETCHED, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: ERROR, payload: error });
            })
        }
    }

export const addNote = note => {
    return dispatch => {
        dispatch({ type: SAVING });
        axios.post('https://fe-notes.herokuapp.com/note/create', {
            title: note.title,
            textBody: note.content,
        })
        .then(response => {
            dispatch({ type: SAVED, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error })
        })
 }
}

export const fetchNote = noteId => {
    return dispatch => {
        dispatch({ type: FETCHING_NOTE });
         axios.get(`https://fe-notes.herokuapp.com/note/get/${noteId}`)
            .then(response => {
                dispatch({ type: FETCHED_NOTE, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: ERROR, payload: error });
            })
    }
}

// to do delete and update