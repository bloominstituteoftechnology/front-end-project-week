import {
    GET_NOTES,
    SAVE_NOTE,
} from '../actions';

const initialState = {
    notes: [],
}

export const notesReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return { notes: action.notes }
        case SAVE_NOTE:
            return { 
                notes: [
                    ...state.notes,
                    {
                        ...action.note,
                        id: action.note.title //to-do: generate id when connecting to db
                    }
                ] 
            }
        default:
            return state
    }
}