import axios from 'axios';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED  ='NOTE_ADDED';
export const ERROR_ADDING_NOTE ='ERROR_ADDING_NOTE';
let noteId = 10;

export const addNote = (note) => {
    const notes = this.props.notes.filter(
        note => note.id == this.props.match.params.id
    )[0];
    const newNotes= axios.post('http://localhost:3000/createNote',{...notes});
    return dispatch => {
        dispatch({type:ADDING_NOTE});
        notes
            .then(({data})=> {dispatch({type:NOTE_ADDED, payload:data});})
            .catch(error => {dispatch({type:ERROR_ADDING_NOTE, payload:error});});
    }
}