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

export const ERROR = "ERROR";
export const UPDATING = "UPDATING";



const url = "https://killer-notes.herokuapp.com/note/get/all";
const singleURL = "https://killer-notes.herokuapp.com/note/get/";
const postURL = "https://killer-notes.herokuapp.com/note/create";
const deleteURL = "https://killer-notes.herokuapp.com/note/delete/";

export const getNotes = () => {
    const request = axios.get(url);
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
    const request = axios.get(`${singleURL}${id}`);
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
    const request = axios.post(postURL, newNote);
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
    console.log("id in deleteNote is!!!!!", id);
    const request = axios.delete(`${deleteURL}${id}`)

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

    // let newNotes = this.state.notes.slice().filter(note => note.id !== Number(id));
    // this.setState({notes: newNotes});
  }

