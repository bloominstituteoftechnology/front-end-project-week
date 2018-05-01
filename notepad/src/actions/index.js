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
