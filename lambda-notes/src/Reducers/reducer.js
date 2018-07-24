import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../Actions/index';

function compareValues(key, order = 'asc') {
    return function (a, b) {
        if (!a.hasOwnProperty(key) ||
            !b.hasOwnProperty(key)) {
            return 0;
        }

        let comparison = 0;
        if (a[key] > b[key]) {
            comparison = 1;
        } else if (a[key] < b[key]) {
            comparison = -1;
        }
        return (
            (order === 'desc') ?
                (comparison * -1) : comparison
        );
    };
}

const reducer = (notes = [], action) => {
    switch (action.type) {
        case ADD_NOTE:
            return notes.concat(action.payload);
        case DELETE_NOTE:
            return notes.filter(notes => notes.id !== action.id);
        case EDIT_NOTE:
            notes.splice(action.id.id, 1);
            return (notes.concat(action.id)).sort(compareValues('id', 'asc'));
        default:
            return notes
    }
}

export default reducer;
