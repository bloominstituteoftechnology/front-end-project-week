import axios from 'axios';

export const LOADING_NOTES = 'LOADING_NOTES';
export const NOTES_LOADED = 'NOTES_LOADED';
export const ADDING_NOTES = 'ADDING_NOTES';
export const UPDATING_NOTES = 'UPDATING_NOTES';
export const DELETING_NOTES = 'DELETING_NOTES';
export const ERROR = 'ERROR';
export const SAVE_NOTE_ID = 'SAVE_NOTE_ID';

export const loadNotesAction = () => {
    return dispatch => {
        dispatch({ type: LOADING_NOTES });
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                console.log(response);
                dispatch({
                    type: NOTES_LOADED,
                    payload: response.data,
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: ERROR,
                    payload: 'Unable to load notes-list. Please refresh the page to try again.',
                })
            })
    }
}
export const addNoteAction = (titleValue, textValue) => {
    return dispatch => {
        dispatch({ type: ADDING_NOTES });
        axios
            .post('https://fe-notes.herokuapp.com/note/create', {
                tags: [],
                textBody: textValue,
                title: titleValue,
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: NOTES_LOADED,
                    payload: response.data,
                })
            })
            .catch(error => {
                // console.log(error);
                dispatch({
                    type: ERROR,
                    payload: 'Unable to add new note. Please refresh the page to re-try adding new note. Sorry for the inconvenience',
                })
            })
    }
}
export const updateNoteAction = (titleValue, textValue, idValue) => {
    return dispatch => {
        dispatch({ type: UPDATING_NOTES });
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${idValue}`, {
                tags: [],
                textBody: textValue,
                title: titleValue,
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: NOTES_LOADED,
                    payload: response.data,
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: ERROR,
                    payload: 'Unable to update current note. Please refresh the page to re-try updating current note. Sorry for the inconvenience',
                })
            })
    }
}
export const deleteNoteAction = (idValue) => {
    return dispatch => {
        dispatch({ type: DELETING_NOTES });
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${idValue}`)
            .then(response => {
                console.log(response);
                dispatch({
                    type: NOTES_LOADED,
                    payload: response.data,
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: ERROR,
                    payload: 'Unable to delete current note. Please refresh the page to re-try delteing current note. Sorry for the inconvenience',
                })
            })
    }
}
export const saveNoteId = (idValue) => {
    return {
        type: SAVE_NOTE_ID,
        payload: idValue,
    }
} 