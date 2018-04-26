import { NEW_NOTE, DELETE_NOTE } from "../Actions";

const inititalState = {
   notes: [
       {
           title: null,
           note: null
       }
   ],
}

export const noteReducer = (state = inititalState, action) => {
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
        default: return state;
    }
}

export default noteReducer