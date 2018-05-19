import { 
    SEARCH_NOTE
} from '../actions'

const initialState = {
    openSearchBox: false,
    openSortBox: false
}

export const toolsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEARCH_NOTE:
            return {
                ...state,
                openSearchBox: true
            }
        default:
            return state
    }
}