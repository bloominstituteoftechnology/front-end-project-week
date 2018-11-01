import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTE_SUCCESS = 'NOTE_SUCCESS';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATIVE = 'CREATIVE';
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
            .catch(error => console.log(error))
    )
}

export const createMode = () => dispatch => {
    dispatch({ type: CREATIVE })
}

export const create = (note) => dispatch => {
    return (
        axios
            .post('https://fe-notes.herokuapp.com/note/create', note)
            .then(({ data }) => {
                console.log(data)
                // dispatch({ type: CREATE_NOTE, payload: data })
            })
            .catch(error => console.log(error))
    )
}

export const edit = () => dispatch => {
    dispatch({ type: EDIT })
}