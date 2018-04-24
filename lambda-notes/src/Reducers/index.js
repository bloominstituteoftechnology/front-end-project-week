import {ADD} from "../actions"

const initalState = {Note:[], value: ''}

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD:
        console.log(state)
        console.log('added')
        return Object.assign({}, state, {todos: action.payload})


        break;
        default: return state;
    }
}