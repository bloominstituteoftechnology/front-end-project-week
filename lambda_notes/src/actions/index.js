import axios from 'axios';
// Our actions are FETCHING FETCHED ERROR UPDATING DELETING ADDING
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FETCHINGNOTE = "FETCHINGNOTE";
export const FETCHEDNOTE = "FETCHEDNOTE";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const ERROR = "ERROR";



// const url = "https://killer-notes.herokuapp.com/note/get/all";
// const singleURL = "https://killer-notes.herokuapp.com/note/get/";
// const postURL = "https://killer-notes.herokuapp.com/note/create";
// const deleteURL = "https://killer-notes.herokuapp.com/note/delete/";
// const editURL = "https://killer-notes.herokuapp.com/note/edit/";

const localURL = "http://localhost:3300/note/get/all"
const localSingleURL = "http://localhost:3300/note/get/"
const localPostURL = "http://localhost:3300/note/post/"
const localDeleteURL = "http://localhost:3300/note/delete"
const localEditURL = "http://localhost:3300/note/edit/"

export const getNotes = () => {
    const request = axios.get(localURL);
    return(dispatch) => {
        dispatch({
            type: FETCHING,
        })
        request.then(response => {
            dispatch({type: FETCHED, payload: response.data})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err.message})
        })
    }
}

export const getNote = (id) => {
    const request = axios.get(`${localSingleURL}${id}`);
    return(dispatch) => {
        dispatch({
            type: FETCHINGNOTE,
        })
        request.then(response => {
            dispatch({type: FETCHEDNOTE, payload: response.data})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err.message})
        })
    }
}

export const addNote = (newNote) => {
    const request = axios.post(localPostURL, newNote);
    return(dispatch) => {
        dispatch({
            type: ADDING,
        })
        request.then(response => {
            console.log(" Adding RESPONSE", response);
            dispatch({type: ADDED})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err.message})
        })
    }
  }

export const deleteNote = (id) => {
    console.log("Delete Note called!!!!!");
    const request = axios.delete(`${localDeleteURL}${id}`)
    return(dispatch) => {
        dispatch({
            type: DELETING
        })
        request.then(response => {
            console.log("Deleted response", response)
            dispatch({type: DELETED})   
        })
        .catch(err => {
            console.log(err);
            dispatch({type: ERROR, error: err.message})
        })
    }
}

export const editNote = (id, newNote) => {
    const request = axios.put(`${localEditURL}${id}`, newNote);
    return(dispatch) => {
        dispatch({
            type: UPDATING,
        })
        request.then(response => {
            dispatch({type: DELETED})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err.message})
        })
    }
}

export const searchNotes = (search) => {
    const request = axios.get(localURL);
    return(dispatch => {
        dispatch({
            type: FETCHING,
        })
        request.then(response => {
            let regex = new RegExp(search,['i']);
            let results = response.data.filter(note => 
                regex.test(note.textBody)
            )
            console.log("RESUKTS!!", results);
            dispatch({type: FETCHED, payload: results})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err.message})
        })
    })
}
