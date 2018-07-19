import axios from 'axios';


export const GETTING_NOTES = 'GETTING_NOTES';
export const RECEIVED_NOTES = 'RECEIVED_NOTES';
export const GET_FAILED = 'GET_FAILED';

export const GETTING_SINGLE_NOTE = 'GETTING_SINGLE_NOTE';
export const RECEIVED_SINGLE_NOTE ='RECEIVED_SINGLE_NOTE';
export const GET_SINGLE_FAILED = 'GET_SINGLE_FAILED';

export const CREATING_NOTE = 'CREATING_NOTE';
export const NOTE_CREATED = 'NOTE_CREATED';
export const CREATE_FAILED = 'CREATE_FAILED';

export const UPDATING_NOTE = 'UPDATING_NOTE';
export const NOTE_UPDATED = 'NOTE_UPDATED';
export const UPDATE_FAILED = 'UPDATE_FAILED';

export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';
export const DELETE_FAILED = 'DELETE_FAILED';

export const SEARCHING_NOTES = 'SEARCHING_NOTES';
export const SEARCH_RETURNED = 'SEARCH_RETURNED';
export const SEARCH_FAILED = 'SEARCH_FAILED';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_DELETE = 'TOGGLE_DELETE';
export const TOGGLE_UPDATE = 'TOGGLE_UPDATE';

export function getNotes () {
    return(dispatch) =>{
    dispatch({type: GETTING_NOTES});
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then(({data}) => {
          dispatch({type: RECEIVED_NOTES, payload: data});
      })
      .catch(err => {
          console.log(err);
          dispatch({type: GET_FAILED, error: err})
      })
    }
}

export function getSingleNote (id) {
    return(dispatch) =>{
    dispatch({type: GETTING_SINGLE_NOTE});
    axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(({data}) => {
          console.log(data)
          dispatch({type: RECEIVED_SINGLE_NOTE, payload: data});
      })
      .catch(err => {
          console.log(err);
          dispatch({type: GET_SINGLE_FAILED, error: err})
      })
    }
}


export function createNote (newNote) {
    return(dispatch) =>{
    dispatch({type: CREATING_NOTE});
    axios.post('https://killer-notes.herokuapp.com/note/create', newNote)
      .then(({data}) => {
          console.log(data)
          dispatch({type: NOTE_CREATED, payload: data});
      })
      .catch(err => {
          console.log(err);
          dispatch({type: CREATE_FAILED, error: err})
      })
    }
}

export function updateNote (id, note) {
    return(dispatch) =>{
    dispatch({type: UPDATING_NOTE});
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, note)
      .then(({data}) => {
          console.log(data)
          dispatch({type: NOTE_UPDATED, payload: data});
      })
      .catch(err => {
          console.log(err);
          dispatch({type: UPDATE_FAILED, error: err})
      })
    }
}

export function deleteNote (id) {
    return(dispatch) =>{
    dispatch({type: DELETING_NOTE});
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(({data}) => {
          console.log(data)
          dispatch({type: NOTE_DELETED, payload: data});
      })
      .catch(err => {
          console.log(err);
          dispatch({type: DELETE_FAILED, error: err})
      })
    }
}

export function searchNotes (searchTerm) {
    return (dispatch) => {
        dispatch({type: SEARCHING_NOTES});
        axios.get(`https://killer-notes.herokuapp.com/note/get/all`)
        .then(({data}) => {
            console.log(data);
            let filtered = data.filter(note => {
                return note.textBody.includes(searchTerm.toLowerCase())
            })
            console.log(filtered);
            dispatch({type: SEARCH_RETURNED, payload: filtered})
        })
        .catch(err => {
            console.log(err);
            dispatch({type: SEARCH_FAILED})
        })
    }
}


export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
}

export const toggleDelete = () => {
    return {
        type: TOGGLE_DELETE
    }
}

export const toggleUpdate = () => {
    return {
        type: TOGGLE_UPDATE
    }
}

