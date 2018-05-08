import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const GET_NOTE = 'GET_NOTE';

// axios.get config

export const getNote = (id) => {
    return {
        type: GET_NOTE,
        id: id,
    }
}

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .get('http://localhost:5000/homeNotes')
            .then(response => dispatch({ type: SUCCESS, notes: response.data }))
    }
}

// axios.post config

export const postNote = (newNoteObj) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .post('http://localhost:5000/homeNotes', newNoteObj)
            .then(response => { 
                dispatch({ type: SUCCESS, notes: response.data })
            })
    }
}

//axios.delete config

export const deleteNote = (id) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .delete(`http://localhost:5000/Note/${id}`)
            .then(response => {
                dispatch({ type: SUCCESS, notes: response.data })
            })
    }
}

//axios.put config

export const updateNote = (updatedNoteObj) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .put(`http://localhost:5000/Note/${updatedNoteObj.id}`, updatedNoteObj)
            .then(response => {
                dispatch({ type: SUCCESS, notes: response.data })
            })
    }
}