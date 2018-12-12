import axios from 'axios';
export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTE_SUCCESS = 'NOTE_SUCCESS';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATIVE = 'CREATIVE';
export const EDIT = 'EDIT';
export const DELETE_CONFIRM = 'DELETE_CONFIRM';
export const DELETE_OFF = 'DELETE_OFF';


export const getNotes = () => dispatch => {
    dispatch({ type: GETTING_NOTES})
    return (
        axios
            .get('http://localhost:4500/api/notes')
            // .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(({ data }) => {
                dispatch({ type: NOTE_SUCCESS, payload: data})
            })
            .catch(error => console.log(error))
    )
}
export const viewNote = (id) => dispatch => {
    return (
        axios
            .get(`http://localhost:4500/api/notes/${id}`)
            // .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(({data}) => {
                dispatch({ type: SINGLE_NOTE, payload: data.note })
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
            .post('http://localhost:4500/api/notes/new', note)
            // .post('https://fe-notes.herokuapp.com/note/create', note)
            .then(({ data }) => {
                dispatch({ type: CREATE_NOTE, payload: data })
            })
            .catch(error => console.log(error))
    )
}

export const editMode = () => dispatch => {
    dispatch({ type: EDIT })
}

export const edit = (note, noteId) => dispatch => {
    return (
        axios
            .put(`http://localhost:4500/api/notes/edit/${noteId}`, note)
            .then(({ data }) => {
                // console.log(data)
            })
            .catch(error => console.log(error))
    )
}

export const ruSure = () => dispatch => {
    dispatch({ type: DELETE_CONFIRM })
}

export const deleter = (noteId, props) => dispatch => {
    console.log(props)
    return (
        axios
            .delete(`http://localhost:4500/api/notes/delete/${noteId}`)
            .then(({ data }) => {
                dispatch({ type: DELETE_OFF });
                this.props.history.push('/');
            })
            .catch(error => console.log(error))
    )
}