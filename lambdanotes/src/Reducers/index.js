import {NEW_NOTE, DELETE_NOTE, UPDATE_NOTE} from '../Actions/index';

const initialState = {
    notes: [
        {
            title:null,
            note:null
        }
    ],
}

export const noteReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_NOTE: 
            return Object.assign({}, state, {
                notes: [...state.notes, action.payload]
            } )

        case DELETE_NOTE: {
            console.log('delete', state)
            return Object.assign({}, state, {
                notes: [...state.notes.slice(0, action.payload),
                    ...state.notes.slice(action.payload + 1)]
            })
        }

        case UPDATE_NOTE: {
            return {
                ...state, 
                notes: state.notes.map(
                    (note, i) => i === action.index.index ? {
                        ...note, title: action.payload.title, note: action.payload.note}
                        :note
                    
                )
            }
        }
        default: return state;
    }
}

export default noteReducer;