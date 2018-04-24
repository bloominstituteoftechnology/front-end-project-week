import { NEW_NOTE } from "../Actions";

const inititalState = {
    title: 'title',
    note: 'note',
    id: 0
}

export const noteReducer = (state = inititalState, action) => {
    switch(action.type) {
        case NEW_NOTE: {
            console.log(action.payload, state.id)
            return {...state, title: action.payload.title, note: action.payload.note, id: state.id+1}
        }
        default: return state;
    }
}

export default noteReducer