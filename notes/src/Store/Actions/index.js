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
    axios.get('http://localhost:3333/api/notes')
    .then(response => (dispatch({type: ACTIONS.NOTES_COLLECTED, notes: response.data})))
    .catch(err => console.log('Unable to Collect Notes: ' + err.message))
}

export const assembleNotes = note => dispatch => {
    console.log('Assemble Note');
    dispatch({type: ACTIONS.ASSEMBLING_NOTE});
    axios.post('http://localhost:3333/api/notes', {...note})
    .then(response => (dispatch({type: ACTIONS.NOTE_ASSEMBLED, notes: response.data})))
    .catch(err => console.log('Unable to Assemble Note: ' + err.message))
}

export const reviseNotes = note => dispatch => {
    console.log('Revise Note');
    dispatch({type: ACTIONS.REVISING_NOTE});
    axios.put(`http://localhost:3333/api/notes/${note.id}`, {...note})
    .then(response => (dispatch({type: ACTIONS.NOTE_REVISED, notes: response.data})))
    .catch(err => console.log('Unable to Revise Note: ' + err.message))
}

export const expungeNotes = noteId => dispatch => {
    console.log('Expunge Note');
    dispatch({type: ACTIONS.EXPUNGING_NOTE});
    axios.delete(`http://localhost:3333/api/notes/${noteId}`)
    .then(response => (dispatch({type: ACTIONS.NOTE_EXPUNGED, notes: response.data})))
    .catch(err => console.log('Unable to Delete Note: ' + err.message))
}