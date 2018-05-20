import { 
    SHOW_SEARCH_BOX,
    HIDE_SEARCH_BOX
} from '../actions'

const initialState = {
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
        default:
            return state
    }
}