import axios from 'axios';
export const PENDING = 'PENDING';
export const FETCHED = 'FETCHED';
export const CREATED = 'CREATED';
export const UPDATED = 'UPDATED';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';
export const SINGLE_NOTE = 'SINGLE_NOTE';

const pending = () => {
    return {
        type: PENDING
    }
}

const fetchedNote = (data) => {
    return {
        type: FETCHED,
        payload: data
    }
}

const createdNote = (data) => {
    return {
        type: CREATED,
        payload: data
    }
}

const updatedNote = (data) => {
    return {
        type: UPDATED,
        payload: data
    }
}

const deletedNote = (data) => {
    return {
        type: DELETED,
        payload: data
    }
}

const error = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}

const singleNote = (data) => {
    return {
        type: SINGLE_NOTE,
        payload: data
    }
}

export const fetchNotes = () => {
    const getNotes = axios.get('http://localhost:5000/notes')
    return function(dispatch) {
        dispatch(pending())
        console.log("fetching all notes...")
        getNotes
            .then( res => {
                dispatch(fetchedNote(res.data));
                console.log("fetched all notes!")
            })
            .catch( err => {
                dispatch(error(err));
            })
    }    
}

export const fetchNote = (id) => {
    const getNote = axios.get(`http://localhost:5000/note/${id}`)
    return function(dispatch) {
        dispatch(pending())
        console.log("fetching note...")
        getNote
            .then( res => {
                dispatch(singleNote(res.data));
                console.log("fetched!")
            })
            .catch( err => {
                dispatch(error(err));
            })
    }     
}

export const createNote = (note) => {
    const postNote = axios.post('http://localhost:5000/notes', note)
    return function(dispatch) {
        dispatch(pending())
        console.log("creating...")
        postNote
            .then( res => {
               dispatch(createdNote(res.data));
               console.log("created!")
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const updateNote = (note) => {
    const putNote = axios.put(`http://localhost:5000/note/${note.id}`, note)
    return function(dispatch) {
        dispatch(pending())
        console.log("updating...")
        putNote
            .then( res => {
                dispatch(updatedNote(res.data))
                console.log("updated!")
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const removeNote = (id) => {
    const deleteNote = axios.delete(`http://localhost:5000/note/${id}`)
    return function(dispatch) {
        dispatch(pending())
        console.log("deleting...")
        deleteNote
            .then( res => {
                console.log(res.data)
                dispatch(deletedNote(res.data));
                console.log("deleted!")
            })
            .catch( err => {
                dispatch(error(err));
            })
    }     
}

