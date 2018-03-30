import { 
    CREATE_NOTE, 
    EDIT_NOTE, 
    DELETE_NOTE, 
    SORT_NEWEST,
    SORT_OLDEST, 
    FETCH_NOTES,
    SEARCH
} from '../actions';

const initialState = {
    searching: false,
    sortedBy: null,
    notes:[],
    visibleNotes: [],
}

export default(state=initialState, action) => {
    switch(action.type) {
        case(FETCH_NOTES):
            return Object.assign({}, state, {
                notes: Object.values(action.notes).filter(note => note !== null),
                visibleNotes: Object.values(action.notes).filter(note => note !== null),
            });
        case(CREATE_NOTE):
            return Object.assign({}, state, {
                visibleNotes: state.notes.concat({
                    id: action.id,
                    title: action.title,
                    text: action.text
                }),
            });
        case(EDIT_NOTE):
            return Object.assign({}, state, {
                visibleNotes: state.notes.filter(note => {
                    return note.id !== action.id
                }).concat({
                    id: action.id,
                    title: action.title,
                    text:action.text,
                }), 
            });
        case(DELETE_NOTE):
            return Object.assign({}, state, {
                visibleNotes: state.notes.filter(note => note.id !== action.id),
            });
        case(SORT_OLDEST):
            return Object.assign({}, state, {
                sortedBy: 'newest',
                visibleNotes: state.notes.sort((a, b) => a.id > b.id),
            });
        case(SORT_NEWEST):
            return Object.assign({}, state, {
                sortedBy: 'oldest',
                visibleNotes: state.notes.sort((a, b) => a.id < b.id),
            });
        case(SEARCH):
            return Object.assign({}, state, {
                searching: true,
                visibleNotes: Object.values(action.notes).filter(
                    note => note !== null).filter(
                        note => note.text.includes(action.input)),
            });
        default:
            return state;
    }
}