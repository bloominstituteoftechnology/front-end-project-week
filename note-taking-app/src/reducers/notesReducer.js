import { 
    FETCHING_NOTES, 
    FETCHED_NOTES,
    SELECTING_NOTE,
    ADDING_NOTE,
    UPDATING_NOTE,
    DELETING_NOTE
} from '../actions'

const initialState = {
    notes: [],
    isFetching: false,
    isSelecting: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false
}

export const notesReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case FETCHED_NOTES:
            return {
                ...state,
                isFetching: false,
                isSelecting: false,
                isAdding: false,
                isUpdating: false,
                isDeleting: false,
                notes: action.notes
            }
        case FETCHING_NOTES:
            return {
                ...state,
                isFetching:true
            }
        case SELECTING_NOTE:
            const selectedIndex = state.notes.findIndex(note => note.id === action.note.id)
            return {
                ...state,
                isSelecting: true,
                notes: [
                    ...state.notes.slice(0,selectedIndex),
                    {
                        ...state.notes[selectedIndex],
                        selected: true 
                    },
                    ...state.notes.slice(selectedIndex+1)
                ]
            }
        case ADDING_NOTE:
            return {
                ...state,
                isFetching: false,
                isSelecting: false,
                isUpdating: false,
                isDeleting: false,
                isAdding: true
            }
        case UPDATING_NOTE:
            const updatingIndex = state.notes.findIndex(note => note.id === action.note.id)
            return {
                ...state,
                isFetching: false,
                isSelecting: false,
                isDeleting: false,
                isAdding: false,
                isUpdating: true,
                notes: [
                    ...state.notes.slice(0,updatingIndex),
                    {
                        ...state.notes[updatingIndex],
                        updating: true 
                    },
                    ...state.notes.slice(updatingIndex+1)
                ]
            }
        case DELETING_NOTE:
            return {
                ...state,
                isFetching: false,
                isSelecting: false,
                isAdding: false,
                isUpdating: false,
                isDeleting: true
            }
        default: 
            return state
    }
}