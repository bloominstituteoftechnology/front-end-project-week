import { GET_NOTES, GET_NOTES_SUCCESS, GET_NOTES_ERROR } from '../actions/index'

const initialState = {
    notes: [],
    gettingNotes: false,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                gettingNotes: true,
            }
        case GET_NOTES_SUCCESS:
            return {
                ...state,
                gettingNotes: false,
                notes: [...action.payload]

            }
        case GET_NOTES_ERROR:
            return {
                ...state,
                gettingNotes: false,
            }
        default:
            return state
    }
}
