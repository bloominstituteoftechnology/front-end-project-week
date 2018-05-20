import db from '../firebase';

export const FETCHING_NOTES = 'FETCHING_NOTES'
export const FETCHED_NOTES = 'FETCHED_NOTES'
export const SELECTING_NOTE = 'SELECTING_NOTE'
export const ADDING_NOTE = 'ADDING_NOTE'
export const SAVE_NOTE = 'SAVE_NOTE'
export const UPDATING_NOTE = 'UPDATING_NOTE'
export const DELETING_NOTE = 'DELETING_NOTE'
export const SEARCHING_NOTE = 'SEARCHING_NOTE'
export const SHOW_SEARCH_BOX = 'SHOW_SEARCH_BOX'
export const HIDE_SEARCH_BOX = 'HIDE_SEARCH_BOX'
export const ERROR = 'ERROR'

export const getNotes = () => {
    let ref = db.database().ref('/notes')

    return (dispatch) => {
        dispatch({ type: FETCHING_NOTES })
        
        ref.on("value", 
        response => {
            dispatch({ type: FETCHED_NOTES, notes: response.val()})
        }, 
        error => {
            dispatch({ type: ERROR, error: error.code })
        });
    }
}

export const selectNote = (note) => {
    let ref = db.database().ref(`/notes/${note.id}`);
    return (dispatch) => {
        dispatch({ type: SELECTING_NOTE })
        
        ref.on("value", 
        response => {
            dispatch({ type: FETCHED_NOTES, notes: { [note.id] : response.val()}})
        }, 
        error => {
            dispatch({ type: ERROR, error: error.code })
        });
    }
}

// addNote will display AddNoteForm
export const addNote = () => {
    return { type: ADDING_NOTE }
}

// updateNote will display UpdateNoteForm
export const updateNote = (note) => {
    return { type: UPDATING_NOTE }
}

// saveNote will save note to db and return current db
export const saveNote = (note) => {
    let ref = db.database().ref('/notes')
    let targetRef = db.database().ref(`/notes/${note.id}`)

    return (dispatch) => {
        dispatch({ type: FETCHING_NOTES })
        
        targetRef.on('value', 
        response => {
            if (response.val()) {
                // note exists, update
                targetRef.set({
                    ...note
                })
            } else {
                // note does not exist, add new
                ref.push(note)
            }
        },
        error => {
            dispatch({ type: ERROR, error: error.code })
        })

        ref.on('value', 
        response => {
            dispatch({ type: FETCHED_NOTES, notes: response.val()})
        }, 
        error => {
            dispatch({ type: ERROR, error: error.code })
        });
    }
}

// deleteNote will display popups
export const deleteNote = (id) => { 
}

// removeNote will delete a note from db and return current db
export const removeNote = (id) => {
    let ref = db.database().ref('/notes')
    let targetRef = db.database().ref(`/notes/${id}`)

    return (dispatch) => {
        dispatch({ type: FETCHING_NOTES })
        
        targetRef.on('value', 
        response => {
            if (response.val()) {
                // note exists, update
                targetRef.remove()
            }
                // note does not exist, someone already deleted recently
        },
        error => {
            dispatch({ type: ERROR, error: error.code })
        })

        ref.on('value', 
        response => {
            dispatch({ type: FETCHED_NOTES, notes: response.val()})
        }, 
        error => {
            dispatch({ type: ERROR, error: error.code })
        });
    }
}

export const searchNote = (text) => {
    return { type: SEARCHING_NOTE, text }
}

export const showSearchBox = () => {
    return { type: SHOW_SEARCH_BOX }
}

export const hideSearchBox = () => {
    return { type: HIDE_SEARCH_BOX }
}
