

//== Actions ===================================================================

//-- Dependencies --------------------------------
import axios from 'axios';

//-- Configuration -------------------------------
const REMOTE_SERVER = 'https://fe-notes.herokuapp.com';

//-- Action Types --------------------------------
let actionIndex = 0;
export const FETCHING       = ++actionIndex;
export const FETCH_ERROR    = ++actionIndex;
export const NOT_READY      = ++actionIndex;
export const NOTES_RESPONSE = ++actionIndex;
export const GET_NOTES      = ++actionIndex;
export const FOCUS_NOTE     = ++actionIndex;


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
        server.get('note/get/all', null, dispatch)
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
export function addNote(noteData) {
    return function (dispatch) {
        dispatch({type: FETCHING});
        axios.post(server.formatUrl('note/create'), noteData)
        .then(response => {
            //dispatch(notesResponse(response.data));
            console.log('got note: ', response)
        })
        .catch(error => {
            console.log(error);
            console.log(Object.keys(error));
            //let errorMessage = `Error ${error.response.status}: ${error.response.data.Error}`;
            //dispatch(fetchError(errorMessage));
        });
    }
}

//-- FOCUS_NOTE - Agent request to view a specific note
export function focusNote(id) {
    return {
        type: FOCUS_NOTE,
        id: id,
    };
}

//== Utilities =================================================================

//-- Server (should probably be middleware) ------

const server = {
    // Configuration
    address: REMOTE_SERVER,
    // Http Methods
    get(url, data, dispatch){
        dispatch({type: FETCHING});
        this.standardHandling(
            axios.get(this.formatUrl(url), data),
            dispatch,
        );
    },
    post(url, data, dispatch){
        dispatch({type: FETCHING});
        this.standardHandling(
            axios.post(this.formatUrl(url), data),
            dispatch,
        );
    },
    put(url, data, dispatch){
        dispatch({type: FETCHING});
        this.standardHandling(
            axios.put(this.formatUrl(url), data),
            dispatch,
        );
    },
    delete(url, data, dispatch){
        dispatch({type: FETCHING});
        this.standardHandling(
            axios.delete(this.formatUrl(url), data),
            dispatch,
        );
    },
    // Utilities
    standardHandling(axiosPromise, dispatch) {
        axiosPromise
        .then(response => {
            dispatch(notesResponse(response.data));
        })
        .catch(error => {
            let errorMessage = `Error ${error.response.status}: ${error.response.data.Error}`;
            dispatch(fetchError(errorMessage));
        });
    },
    formatUrl(path) {
        return `${this.address}/${path}`;
    }
}
