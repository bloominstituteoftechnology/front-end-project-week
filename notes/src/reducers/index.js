import { 
    CREATE_NOTE, 
    EDIT_NOTE, 
    DELETE_NOTE, 
    SORT_NEWEST,
    SORT_OLDEST, 
    FETCH_NOTES} from '../actions';

const initialState = {
    sortedBy: null,
    notes:[]
}

export default(state=initialState, action) => {
    switch(action.type) {
        case(FETCH_NOTES):
            return Object.assign({}, state, {
                notes: action.notes
            })
        case(CREATE_NOTE):
            return Object.assign({}, state, {
                notes: state.notes.concat({
                    id: action.id,
                    title: action.title,
                    text: action.text
                }),
            });
        case(EDIT_NOTE):
            return Object.assign({}, state, {
                notes: state.notes.filter(note => note.id !== action.id).concat({
                    id: action.id,
                    title: action.title,
                    text:action.text,
                }), 
            });
        case(DELETE_NOTE):
            return Object.assign({}, state, {
                notes: state.notes.filter(note => note.id !== action.id),
            });
        case(SORT_OLDEST):
            return Object.assign({}, state, {
                sortedBy: 'newest',
                notes: state.notes.sort((a, b) => a.id > b.id),
            });
        case(SORT_NEWEST):
            return Object.assign({}, state, {
                sortedBy: 'oldest',
                notes: state.notes.sort((a, b) => a.id < b.id),
            });
        default:
            return state;
    }
}