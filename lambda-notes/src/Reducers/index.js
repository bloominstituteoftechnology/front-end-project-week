import { NEW_NOTE } from "../Actions";

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
        default: return state;
    }
}

export default noteReducer