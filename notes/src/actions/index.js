

//== Actions ===================================================================

//-- Dependencies --------------------------------
import axios from 'axios';

//-- Configuration -------------------------------
const REMOTE_SERVER = 'http://localhost:5000';

//-- Action Types --------------------------------
let actionIndex = 0;
export const FETCHING       = ++actionIndex;
export const FETCH_ERROR    = ++actionIndex;
export const NOT_READY      = ++actionIndex;
export const NOTES_RESPONSE = ++actionIndex;
export const GET_NOTES      = ++actionIndex;
export const UPDATE_NOTE    = ++actionIndex;


//== Action Generators =========================================================

//-- NOTES_RESPONSE - Server replied with list of all notes
export function notesResponse(notesData) {
    return {
        type: NOTES_RESPONSE,
        notes: notesData,
    };
};

//-- GET_NOTES - Agent requests list of all notes
export function getNotes() {
    return function (dispatch) {
        dispatch({type: FETCHING});
        axios.get(REMOTE_SERVER)
        .then(response => {
            const serverResponse = response.data;
            dispatch(notesResponse(serverResponse.data));
        })
        .catch(error => {
            let errorMessage = `Error ${error.response.status}: ${error.response.data.Error}`;
            dispatch(fetchError(errorMessage));
        });
    };
};

//-- FETCH_ERROR - Server returned with error state
export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        error: error
    };
}

//-- NOT_READY - User attempted an action while agent wasn't ready
export function notReady(error) {
    return {
        type: NOT_READY,
        error: error,
    };
}

//-- (null) - Agent submits a new note
export function addNote(noteData, callback) {
    return function (dispatch) {
        dispatch({type: FETCHING});
        axios.post(REMOTE_SERVER, noteData)
        .then(response => {
            dispatch(getNotes());
            const serverResponse = response.data;
            let newNoteId = serverResponse.id;
            callback(newNoteId);
        })
        .catch(error => {
            console.log(error);
            console.log(Object.keys(error));
            //let errorMessage = `Error ${error.response.status}: ${error.response.data.Error}`;
            //dispatch(fetchError(errorMessage));
        });
    }
}

//-- (null) - Agent submits changes to a note
export function updateNote(noteData) {
    return function (dispatch) {
        dispatch({type: FETCHING});
        let noteUrl = `${REMOTE_SERVER}/${noteData.id}`;
        axios.put(noteUrl, noteData)
        .then(response => {
            console.log(response)
            dispatch(getNotes());
        })
        .catch(error => {
            console.log(error);
        });
    }
}

//-- (null) - Agent requests to delete note
export function deleteNote(noteId) {
    return function (dispatch) {
        dispatch({type: FETCHING});
        let noteUrl = `${REMOTE_SERVER}/${noteId}`;
        axios.delete(noteUrl)
        .then(response => {
            console.log(response);
            dispatch(getNotes());
        })
        .catch(error => {
            console.log(error);
        })
    }
}
