import axios from 'axios';
export const FETCHNOTES = 'FETCHNOTES';
export const ERR = "ERR";

export const editNotes = note => {
    return dispatch => {
        axios.put(`http://localhost:5000/notes/${note.id}`, note)
        .then(response => {
            dispatch({ type: FETCHNOTES, payload: response.data})
        })
        .catch(error => {
            dispatch({ type: ERR })
        })
    }
}
