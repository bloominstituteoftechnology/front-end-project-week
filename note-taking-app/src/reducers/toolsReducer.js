import { 
    SHOW_SEARCH_BOX,
    HIDE_SEARCH_BOX,
    SEARCHING_NOTE,
    SHOW_SORT_BOX,
    HIDE_SORT_BOX,
    SORTING_NOTE,
} from '../actions'

const initialState = {
    searchText: '',
    searchBoxOpen: false,
    sortBoxOpen: false,
    sortType: ''
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
        default:
            return state
    }
}