import axios from 'axios';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const UPDATING = "UPDATING";

export const getNotes = () => {
    return (dispatch) => {
        dispatch({ type: PENDING });
        axios
            .get('http://localhost:5000/notes')
            .then(response => {
                dispatch({ type: SUCCESS, notes: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, error: 'ERROR FETCHING NOTES' })
            })
    }
}
export const createNote = (note) => {
    return dispatch => {
        dispatch({ type: PENDING });
        console.log(note);
        axios
            .post('http://localhost:5000/notes', note)
            .then(response => {
                dispatch({ type: SUCCESS, notes: response.data })
            })
            .catch(() => {
                dispatch({ type: ERROR, error: 'ERROR CREATING NOTE' })
            })
    }
}

export const deleteNote = id => {
    return dispatch => {
        dispatch({ type: PENDING });
        axios
            .delete(`http://localhost:5000/notes/${id}`)
            .then(response => {
                dispatch({ type: SUCCESS, notes: response.data })
            })
            .catch(err =>
                dispatch({ type: ERROR, error: 'ERROR DELETING NOTE' })
            );
    }
}
