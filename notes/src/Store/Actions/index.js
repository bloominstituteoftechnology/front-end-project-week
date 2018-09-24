import axios from 'axios';

export const ACTIONS = {
    COLLECTING_NOTES: 'COLLECTING_NOTES', NOTES_COLLECTED: 'NOTES_COLLECTED', 
    ASSEMBLING_NOTE: 'ASSEMBLING_NOTE', NOTE_ASSEMBLED: 'NOTE_ASSEMBLED', 
    REVISING_NOTE: 'REVISING_NOTE', NOTE_REVISED: 'NOTE_REVISED', 
    EXPUNGING_NOTE: 'EXPUNGING_NOTE', NOTE_EXPUNGED: 'NOTE_EXPUNGED'
}

export const collectNotes = () => dispatch => {
    console.log('Collect Notes');
    dispatch({type: ACTIONS.COLLECTING_NOTES});
    axios.get('https://killer-notes.herokuapp.com/note/GET/all')
    .then(response => (dispatch({type: ACTIONS.NOTES_COLLECTED, notes: response.data})))
    .catch(err => console.log('Unable to Collect Notes: ' + err.message))
}

// export const assembleNote = (note) => dispatch => {
//     console.log('Assemble Note');
//     dispatch({type: ACTIONS.ASSEMBLING_NOTE});
//     axios.post('https://killer-notes.herokuapp.com/note/create', {...note})
//     .then(response => (console.log(response.data)))
//     .catch(err => console.log('Unable to Assemble Note: ' + err.message))
// }

export const assembleNote = (note) => dispatch => {
    console.log('Assemble Note');
    dispatch({type: ACTIONS.ASSEMBLING_NOTE});
    axios.post('https://killer-notes.herokuapp.com/note/create', {...note})
    .then(response => (dispatch({type: ACTIONS.NOTE_ASSEMBLED, note: {id: response.data, ...note}})))
    .catch(err => console.log('Unable to Assemble Note: ' + err.message))
}

export const reviseNote = note => dispatch => {
    console.log('Revise Note');
    dispatch({type: ACTIONS.REVISING_NOTE});
    axios.put(`http://localhost:3333/api/notes/${note.id}`, {...note})
    .then(response => (dispatch({type: ACTIONS.NOTE_REVISED, notes: response.data})))
    .catch(err => console.log('Unable to Revise Note: ' + err.message))
}

export const expungeNote = noteId => dispatch => {
    console.log('Expunge Note');
    dispatch({type: ACTIONS.EXPUNGING_NOTE});
    axios.delete(`http://localhost:3333/api/notes/${noteId}`)
    .then(response => (dispatch({type: ACTIONS.NOTE_EXPUNGED, notes: response.data})))
    .catch(err => console.log('Unable to Delete Note: ' + err.message))
}