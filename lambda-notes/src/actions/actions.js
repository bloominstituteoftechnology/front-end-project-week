import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const HANDLE_ID = 'HANDLE_ID';
export const MOVE_CARD = 'MOVE_CARD';

export const fetchNotes = () => {
    return dispatch => {
        dispatch({type: LOADING})
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: 'Something went wrong retrieving your notes! Please try again.'
                })
            })
    }
}

export const createNote = note => {
    return dispatch => {
        dispatch({type: LOADING})
        axios
            .post('https://fe-notes.herokuapp.com/note/create', note)
            .then(response => {
                dispatch(fetchNotes())
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: 'Ups! Something went wrong creating your note, you should try again!'
                })
            })
    }
}

export const updateNote = (note, id) => {
    return dispatch => {
        dispatch({type: LOADING})
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
            .then(response => {
                dispatch(fetchNotes())
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: 'Ups! Something went wrong updating your note, you should try again!'
                })
            })
    }
}

export const deleteNote = id => {
    return dispatch => {
        dispatch({type: LOADING})
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => {
                dispatch(fetchNotes())
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: 'Ups! Something went wrong deleting your note, you should try again!'
                })
            })
    }
}

export const handleId = id => {
    return {
        type: HANDLE_ID,
        payload: id,
    }
}

export const moveCard = (dragIndex, hoverIndex) => {
    return {
        type: MOVE_CARD,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex
    }
}