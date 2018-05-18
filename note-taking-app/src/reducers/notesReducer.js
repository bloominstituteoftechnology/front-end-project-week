import {
    GET_NOTES,
    SAVE_NOTE,
    UPDATE_NOTE,
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
        case UPDATE_NOTE:
            const index = state.notes.findIndex(note => note.id === action.note.id) 
            return { 
                notes: [
                    ...state.notes.slice(0,index),
                    state.notes[index] = action.note,
                    ...state.notes.slice(index+1)
                ] 
            }
        default:
            return state
    }
}