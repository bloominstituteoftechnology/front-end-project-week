import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTE_SUCCESS = 'NOTE_SUCCESS';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const FIND_NOTE = 'FIND_NOTE';


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

export const viewNote = event => dispatch => {
    // dispatch({ type: FIND_NOTE, payload: event.currentTarget.id})
    // dispatch({ type: NOTE_SELECTOR })
    // dispatch({ type: SINGLE_NOTE })
    console.log(event.currentTarget.id)
}