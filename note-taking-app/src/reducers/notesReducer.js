import { 
    FETCHING_NOTES, 
    FETCHED_NOTES,
    SELECTING_NOTE,
    ADDING_NOTE,
    UPDATING_NOTE,
    // DELETING_NOTE,
    ERROR
} from '../actions'

const initialState = {
    notes: {},
    isFetching: false,
    isSelecting: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_NOTES:
            return {
                ...state,
                isFetching: false,
                notes: action.notes
            }
        case FETCHING_NOTES:
            return {
                ...state,
                isFetching: true,
                isSelecting: false,
                isAdding: false,
                isUpdating: false,
                isDeleting: false,
            }
        case SELECTING_NOTE:
            return {
                ...state,
                isSelecting: true,
            }
        case ADDING_NOTE:
            return {
                ...state,
                isAdding: true,
            }
        case UPDATING_NOTE:
            return {
                ...state,
                isSelecting: false,
                isUpdating: true,
            }
        // case DELETING_NOTE:
        //     return {
        //         ...state,
        //         isDeleting: true
        //     }
        case ERROR:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state
    }
}