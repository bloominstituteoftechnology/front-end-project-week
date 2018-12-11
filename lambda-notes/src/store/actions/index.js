import axios from 'axios';

//exports action variables
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const NOTE_FETCH_SUCCESS = "NOTE_FETCH_SUCCESS";

//exports action creators
export const fetchNotes = () => dispatch => {
    dispatch({
        type: FETCH_START
    });
    axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(({data}) => 
            dispatch({
                type: FETCH_SUCCESS,
                payload: data
            })
        )
        .catch(err => 
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        )
}

export const addNote = note => dispatch => {
    dispatch({
        type: FETCH_START
    });
    axios
        .post('https://fe-notes.herokuapp.com/note/create', {
            tags: [...note.tags],
            title: note.title,
            textBody: note.textBody,
        })
        .then( res => {
            console.log(res);
            axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then(({data}) => 
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: data
                })
            )
        })
        .catch(err =>
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        )
}

export const viewNote = id => dispatch => {
    dispatch({
        type: FETCH_START
    });
    axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(({data}) =>
            dispatch({
                type: NOTE_FETCH_SUCCESS,
                payload: data
            })
        )
        .catch(err =>
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        )
}

export const editNote = (id, note) => dispatch => {
    dispatch({
        type: FETCH_START
    });
    axios
        .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
            title: note.title,
            textBody: note.textBody
        })
        .then(({data}) =>
            dispatch({
                type: NOTE_FETCH_SUCCESS,
                payload: data
            })
        )
        .then(() => {
            axios
                .get('https://fe-notes.herokuapp.com/note/get/all')
                .then(({data}) =>
                    dispatch({
                        type: FETCH_SUCCESS,
                        payload: data
                    })
                )
        })
        .catch(err =>
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            }))
}

export const deleteNote = id => dispatch => {
    dispatch({
        type: FETCH_START
    });
    axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(() =>
            axios
                .get('https://fe-notes.herokuapp.com/note/get/all')
                .then(({data}) =>
                    dispatch({
                        type: FETCH_SUCCESS,
                        payload: data
                    })
                )
        )
        .catch(err =>
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        )
}