import { ADD_NOTE } from '../Actions/index'

const reducer = (notes = [{title: 'Title', content: 'asdjfksjads', id: 0}], action) => {
    switch (action.type) {
        case ADD_NOTE:
            return notes.concat(action.payload);
        default:
            return notes
    }
}

export default reducer;
