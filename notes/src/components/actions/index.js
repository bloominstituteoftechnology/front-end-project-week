import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTE_SUCCESS = 'NOTE_SUCCESS';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT = 'EDIT';

export const getNotes = () => dispatch => {
    dispatch({ type: GETTING_NOTES})
    return (
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(({ data }) => {
                dispatch({ type: NOTE_SUCCESS, payload: data})
            })
            .catch(error => console.log(error))
    )
}

export const viewNote = (id) => dispatch => {
    return (
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(({ data }) => {
                dispatch({ type: SINGLE_NOTE, payload: data })
            })
    )
}

export const create = () => dispatch => {
    dispatch({ type: CREATE_NOTE })
}

export const edit = () => dispatch => {
    dispatch({ type: EDIT })
}