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
export const SORTING_NOTE = 'SORTING_NOTE'
export const SHOW_SORT_BOX = 'SHOW_SORT_BOX'
export const HIDE_SORT_BOX = 'HIDE_SORT_BOX'
export const TOGGLE_MARKDOWN= 'TOGGLE_MARKDOWN'
export const TOGGLE_CHECKLIST= 'TOGGLE_CHECKLIST'
export const SHOW_TAG_BOX = 'SHOW_TAG_BOX'
export const HIDE_TAG_BOX = 'HIDE_TAG_BOX'
export const FETCHING_TAGS = 'FETCHING_TAGS'
export const FETCHED_TAGS = 'FETCHED_TAGS'
export const SHOW_EDIT_TAG_BOX = 'SHOW_EDIT_TAG_BOX'
export const HIDE_EDIT_TAG_BOX = 'HIDE_EDIT_TAG_BOX'
export const FETCHED_TAG_OF_NOTE = 'FETCH_TAG_OF_NOTE'
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

        dispatch({ type: TOGGLE_MARKDOWN, checked: true})
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
                // note does not exist, someone already deleted recently, notify user
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
// Searching Actions
export const searchNote = (searchText) => {
    return { type: SEARCHING_NOTE, searchText }
}

export const showSearchBox = () => {
    return { type: SHOW_SEARCH_BOX }
}

export const hideSearchBox = () => {
    return { type: HIDE_SEARCH_BOX }
}
// Sorting Actions
export const sortNote = (sortType) => {
    return { type: SORTING_NOTE, sortType }
}

export const showSortBox = () => {
    return { type: SHOW_SORT_BOX }
}

export const hideSortBox = () => {
    return { type: HIDE_SORT_BOX }
}

// Toggle Tools
export const toggleMarkdown = (checked) => {
    return { type: TOGGLE_MARKDOWN, checked }
}

export const toggleChecklist = (checked) => {
    return { type: TOGGLE_CHECKLIST, checked }
}

// Tag Actions

export const showTagBox = () => {
    return { type: SHOW_TAG_BOX }
}

export const hideTagBox = () => {
    return { type: HIDE_TAG_BOX }
}

export const getTags = () => {
    let ref = db.database().ref('/tags')

    return (dispatch) => {
        dispatch({ type: FETCHING_TAGS })
        
        ref.on("value", 
        response => {
            dispatch({ type: FETCHED_TAGS, tags: response.val()})
        }, 
        error => {
            dispatch({ type: ERROR, error: error.code })
        });
    }
}

// saveTag will save note to db and return current db
export const saveTag = (tag) => {
    let ref = db.database().ref('/tags')
    let targetRef = db.database().ref(`/tags/${tag.id}`)

    return (dispatch) => {        
        targetRef.on('value', 
        response => {
            if (response.val()) {
                // tag exists, update
                targetRef.set({
                    ...tag
                })
            } else {
                // tag does not exist, add new
                ref.push(tag)
            }
        },
        error => {
            dispatch({ type: ERROR, error: error.code })
        })

        ref.on('value', 
        response => {
            dispatch({ type: FETCHED_TAGS, tags: response.val()})
        }, 
        error => {
            dispatch({ type: ERROR, error: error.code })
        })
    }
}

export const showEditTagBox = ({id, name}) => {
    return (dispatch) => { 
        dispatch({type: HIDE_EDIT_TAG_BOX })
        setTimeout(() => {
            dispatch({type: SHOW_EDIT_TAG_BOX, id, name })
        }, 500)
    }
}

export const hideEditTagBox = () => {
    return { type: HIDE_EDIT_TAG_BOX }
}

// removeTag will delete a tag from db and return current db
export const removeTag = (id) => {
    let ref = db.database().ref('/tags')
    let targetRef = db.database().ref(`/tags/${id}`)

    return (dispatch) => {
        dispatch({ type: FETCHING_TAGS })
        
        targetRef.on('value', 
        response => {
            if (response.val()) {
                // tag exists, update
                targetRef.remove()
            }
                // tag does not exist, someone already deleted recently, notify user
        },
        error => {
            dispatch({ type: ERROR, error: error.code })
        })

        ref.on('value', 
        response => {
            dispatch({ type: FETCHED_TAGS, tags: response.val()})
        }, 
        error => {
            dispatch({ type: ERROR, error: error.code })
        });
    }
}

// Tags of note actions
export const getTagOfNote = (noteId) => {
    let targetRef = db.database().ref(`/notes/${noteId}/tagOfNote`)
    
    return (dispatch) => {        
        targetRef.on('value', 
        response => {
            dispatch({ type: FETCHED_TAG_OF_NOTE, data: response.val() })
        },
        error => {
            dispatch({ type: ERROR, error: error.code })
        })
    }
}

export const removeTagOfNote = (noteId, tagId) => {
    let targetNoteRef = db.database().ref(`/notes/${noteId}/tagOfNote`)
    let targetTagOfNoteRef = db.database().ref(`/notes/${noteId}/tagOfNote/${tagId}`)
    
    return (dispatch) => {
        targetTagOfNoteRef.on('value', 
        response => {
            if (response.val()) {
                // tag exists, update
                targetTagOfNoteRef.remove()
            }
                // tag does not exist, someone already deleted recently, notify user
        },
        error => {
            dispatch({ type: ERROR, error: error.code })
        })

        targetNoteRef.on('value', 
        response => {
            dispatch({ type: FETCHED_TAG_OF_NOTE, data: response.val() })
        },
        error => {
            dispatch({ type: ERROR, error: error.code })
        })
    }
}

export const applyTag = ({noteId, tagId, tagName}) => {
    console.log(noteId, tagId, tagName)
    let targetNoteRef = db.database().ref(`/notes/${noteId}/tagOfNote`)

    targetNoteRef.child(`${tagId}`).set(tagName)

    return (dispatch) => {
        targetNoteRef.on('value', 
        response => {
            dispatch({ type: FETCHED_TAG_OF_NOTE, data: response.val() })
        },
        error => {
            dispatch({ type: ERROR, error: error.code })
        })
    }
}