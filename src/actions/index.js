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
        dispatch({ type: ADDING_NOTE });
        dispatch({ type: NOTE_ADDED, payload: note });  
    }
};


export const updateNote = note => {
    return function(dispatch) {
        dispatch({ type: UPDATING_NOTE });
        dispatch({ type: NOTE_UPDATED, payload: note });
    }
};

export const deleteNote = id => {
    return function(dispatch) {
        dispatch({ type: DELETING_NOTE });
        dispatch({ type: NOTE_DELETED, payload: id });
    }
};