import{
    NOTES_FETCH_START,
    NOTES_FETCH_COMPLETE,
    NOTES_FETCH_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_COMPLETE,
    ADD_NOTE_FAILURE,
    DELETE_NOTE_START,
    DELETE_NOTE_COMPLETE,
    DELETE_NOTE_FAILURE,
    EDIT_NOTE_START,
    EDIT_NOTE_COMPLETE,
    EDIT_NOTE_FAILURE,
    SET_EDIT_NOTE,
} from '../actions'

const initialState = {
    notes: [],
    addingNote: false,
    isLoading: false,
    isDeleting: false,
    isEditing: false,
    noteToEdit:null,
    error:'',
};

export const notesReducer = (state = initialState, action) =>{
    switch(action.type) {

        case NOTES_FETCH_START:
            return { ...state, isLoading: true };
        case NOTES_FETCH_COMPLETE:
            return { ...state, isLoading: false, notes: action.payload };
        case NOTES_FETCH_FAILURE:
            console.log(action.payload);
            return { ...state, isLoading: false, error: action.payload };

        case ADD_NOTE_START:
            return { ...state, addingNote: true };
        case ADD_NOTE_COMPLETE:
            return { ...state, addingNote: false, notes: action.payload };
        case ADD_NOTE_FAILURE:
            console.log(action.payload);
            return{ ...state, addingNote: false, error: action.payload };

        case DELETE_NOTE_START:
            return { ...state, isDeleting: true };
        case DELETE_NOTE_COMPLETE:
            return { ...state, isDeleting: false, notes: action.payload };
        case DELETE_NOTE_FAILURE:
            console.log(action.payload);
            return { ...state, isDeleting: false, error: action.payload };

        case SET_EDIT_NOTE:
            const note = state.notes.find(note => note.id === action.payload);
            return { ...state, noteToEdit: note ? note : null }

        case EDIT_NOTE_START:
            return { ...state, isEditing: true };
        case EDIT_NOTE_COMPLETE:
            return { ...state, isEditing:false, notes: action.payload };

        case EDIT_NOTE_FAILURE:
            console.log(action.payload);
            return { ...state, isEditing: false, error: action.payload };

        default:
            return state;
        

    }
}