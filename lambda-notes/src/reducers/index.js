import { FETCHING_NOTES, FETCHED_NOTES } from "../actions";

const initialState = {
    notes: [],
    fetchingNotes: true
}

export const notesReducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }
        case FETCHED_NOTES:
            return {
                ...state,
                fetchingNotes: false,
                notes: action.payload
            }
        default:
            return state
    }
}