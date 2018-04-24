import { NEW_NOTE } from "../Actions";

const inititalState = {
    title: 'title',
    note: 'note',
    id: 0
}

export const noteReducer = (state = inititalState, action) => {
    switch(action.type) {
        case NEW_NOTE:
        console.log(state, 'reducer')

        default: return state;
    }
}

export default noteReducer