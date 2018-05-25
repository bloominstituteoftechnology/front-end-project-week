// export const FETCHING_NOTES = 'FETCHING_NOTES';
// export const NOTES_FETCHED = 'NOTES_FETCHED';

export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';

export const UPDATING_NOTE = 'UPDATING_NOTE';
export const NOTE_UPDATED = 'NOTE_UPDATED';

export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';

export const ERROR = 'ERROR';


// export const fetchNotes = () => {
    
// }

export const addNote = note => {
    return function(dispatch) {
        dispatch({ type: NOTE_ADDED, payload: note });  
    }
};


export const updateNote = note => {

    
    return function(dispatch, getState) {
        dispatch({ type: UPDATING_NOTE});
            const updateNotes = () => {
                let id = parseInt(note.id, 10);
                let notes = getState().notes;
                let index = notes.findIndex(note => note.id === id);
                console.log(notes);
                return notes.splice(index, 1, note);
            }
            updateNotes
            .then(response => {
                dispatch({ type: NOTE_UPDATED, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err})
            })
    }
};

export const deleteNote = id => {
    id = parseInt(id, 10);
    let notes = this.props.notes;
    let index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1);
    console.log(notes);
    return { type: NOTE_DELETED, payload: notes }
};