import { 
    SHOW_SEARCH_BOX,
    HIDE_SEARCH_BOX,
    SEARCHING_NOTE,
    SHOW_SORT_BOX,
    HIDE_SORT_BOX,
    SORTING_NOTE,
    TOGGLE_MARKDOWN,
    TOGGLE_CHECKLIST,
    SHOW_TAG_BOX,
    HIDE_TAG_BOX,
} from '../actions'

const initialState = {
    searchText: '',
    searchBoxOpen: false,
    sortBoxOpen: false,
    tagBoxOpen: false,
    inMarkdown: true,
    inChecklist: false,
    sortType: '',
}

export const toolsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_SEARCH_BOX:
            return {
                ...state,
                searchBoxOpen: true,
                sortBoxOpen: false
            }
        case HIDE_SEARCH_BOX:
            return {
                ...state,
                searchBoxOpen: false,
                searchText: ''
            }
        case SEARCHING_NOTE:
            return {
                ...state,
                searchText: action.searchText
            }
        case SHOW_SORT_BOX:
            return {
                ...state,
                sortBoxOpen: true,
                searchBoxOpen: false
            }
        case HIDE_SORT_BOX:
            return {
                ...state,
                sortBoxOpen: false,
                searchText: ''
            }
        case SORTING_NOTE:
            return {
                ...state,
                sortBoxOpen: false,
                sortType: action.sortType
            }
        case TOGGLE_MARKDOWN:
            return {
                ...state,
                inMarkdown: action.checked
            }
        case TOGGLE_CHECKLIST:
            return {
                ...state,
                inChecklist: action.checked
            }
        case SHOW_TAG_BOX:
            return {
                ...state,
                tagBoxOpen: true
            }
        case HIDE_TAG_BOX:
            return {
                ...state,
                tagBoxOpen: false,
            }
        default:
            return state
    }
}