import { GET_NOTES, GETTING_NOTES, GET_NOTE,GETTING_NOTE, ADD_NOTE, ADDING_NOTE, EDIT_NOTE, EDITING_NOTE, DELETE_NOTE, DELETING_NOTE ,ERROR} from '../actions';

const initialState = {
    notes:[],
    gettingNotes: false,
    gettingNote:false,
    addingSmurf: false,
    editingNote:false,
    deletingNote:false,
    error: null
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type){

        case GETTING_NOTES:
        return{...state, gettingNotes: true};
        
        case GET_NOTES:
        return {...state , notes: action.payload , gettingNotes:false};
        
        case ADDING_NOTE:
        return {...state, addingNote:true};
 
        case ADD_NOTE:
        return {...state,notes: action.payload , addingNote: false };

        case GETTING_NOTE:
        return {...state, gettingNote: true};

        case GET_NOTE:
        return {...state,notes: action.payload , gettingNote: false};

        case EDITING_NOTE:
        return {...state, editingNote: true};

        case EDIT_NOTE:
        return { ...state, notes:action.payload , editingNote: false};

        case DELETING_NOTE:
        return {...state, deletingNote: true};

        case DELETE_NOTE:
        return {...state,notes:action.payload , deletingNote: false};

        case ERROR:
        return {...state, gettingNotes: false, addingNote: false, gettingNote: false, editingNote: false, deletingNote: false, error: action.error};
        default:
          return state;
    }
}