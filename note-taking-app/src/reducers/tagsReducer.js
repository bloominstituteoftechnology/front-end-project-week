import { 
    FETCHING_TAGS, 
    FETCHED_TAGS,
    SHOW_EDIT_TAG_BOX,
    HIDE_EDIT_TAG_BOX,
    FETCHED_TAG_OF_NOTE,
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
    editTagBoxOpen: false,
    updatingTag: {
        id: '',
        name: ''
    },
    tagOfNote: {}
}

export const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_TAGS:
            return {
                ...state,
                isFetching: false,
                tags: action.tags,
                editTagBoxOpen: false
            }
        case FETCHING_TAGS:
            return {
                ...state,
                isFetching: true,
            }
        case SHOW_EDIT_TAG_BOX:
            return {
                ...state,
                editTagBoxOpen: true,
                updatingTag: {
                    ...state.updatingTags,
                    id: action.id,
                    name: action.name
                }
            }
        case HIDE_EDIT_TAG_BOX:
            return {
                ...state,
                editTagBoxOpen: false,
                updatingTag: {
                    ...state.updatingTags,
                    id: '',
                    name: ''
                }
            }
        case FETCHED_TAG_OF_NOTE: 
            return {
                ...state,
                tagOfNote: action.data
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