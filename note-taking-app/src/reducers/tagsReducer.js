import { 
    FETCHING_TAGS, 
    FETCHED_TAGS,
    SHOW_EDIT_TAG_BOX,
    HIDE_EDIT_TAG_BOX,
    // SELECTING_NOTE,
    // ADDING_NOTE,
    // UPDATING_NOTE,
    // DELETING_NOTE,
    ERROR
} from '../actions'

const initialState = {
    tags: {},
    isFetching: false,
    error: null,
    editTagBoxOpen: false
}

export const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_TAGS:
            return {
                ...state,
                isFetching: false,
                tags: action.tags
            }
        case FETCHING_TAGS:
            return {
                ...state,
                isFetching: true,
            }
        // case SELECTING_NOTE:
        //     return {
        //         ...state,
        //         isSelecting: true,
        //     }
        // case ADDING_NOTE:
        //     return {
        //         ...state,
        //         isAdding: true,
        //     }
        // case UPDATING_NOTE:
        //     return {
        //         ...state,
        //         isSelecting: false,
        //         isUpdating: true,
        //     }
        // case DELETING_NOTE:
        //     return {
        //         ...state,
        //         isDeleting: true
        //     }
        case SHOW_EDIT_TAG_BOX:
            return {
                ...state,
                editTagBoxOpen: true,
            }
        case HIDE_EDIT_TAG_BOX:
            return {
                ...state,
                editTagBoxOpen: false,
            }
        case ERROR:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state
    }
}