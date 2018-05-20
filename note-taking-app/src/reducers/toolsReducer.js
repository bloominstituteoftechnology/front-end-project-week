import { 
    SHOW_SEARCH_BOX,
    HIDE_SEARCH_BOX,
    SEARCHING_NOTE,
} from '../actions'

const initialState = {
    searchText: '',
    searchBoxOpen: false,
    sortBoxOpen: false
}

export const toolsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_SEARCH_BOX:
            return {
                ...state,
                searchBoxOpen: true
            }
        case HIDE_SEARCH_BOX:
            return {
                ...state,
                searchBoxOpen: false
            }
        case SEARCHING_NOTE:
            return {
                ...state,
                searchText: action.text
            }
        default:
            return state
    }
}