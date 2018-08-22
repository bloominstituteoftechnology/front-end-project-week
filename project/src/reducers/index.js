import { FETCH_NOTE, FETCHED_NOTE, ADD_NOTE, ADDED_NOTE, EDIT_NOTE, EDITED_NOTE, DELETING_NOTE, DELETED_NOTE, SELECT_ID, ERROR} from '../actions/'

const initialState = {
    notes: '',
    fetchingNotes: false,
    addingNotes: false,
    editingNote: false,
    deletingNote: false,    
    selectedId: null
}

export const noteReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_NOTE:
            return(
                {
                    ...state,
                    fetchingNotes: true,
                    notes: action.payload
                }
            )
        case FETCHED_NOTE:
            return(
                {
                    ...state,
                    fetchingNotes: false,                    
                }
            )                
        case ADD_NOTE:
            return(
                {
                    ...state,
                    addingNotes: true,
                    notes: action.payload
                }
            )
        case ADDED_NOTE:
            return(
                {
                    ...state,
                    addingNotes: false,                    
                }
            ) 
        case EDIT_NOTE:
            return(
                {
                    ...state,
                    editingNote: true,
                    notes: action.payload
                }
            )
        case EDITED_NOTE:
            return(
                {
                    ...state,
                    editingNote: false,                    
                }
            ) 
        case DELETING_NOTE:
            return(
                {
                    ...state,
                    deletingNote: true,
                    notes: action.payload
                }
            )
        case DELETED_NOTE:
            return(
                {
                    ...state,
                    deletingNote: false,                    
                }
            ) 
        case SELECT_ID:
            return(
                {
                    ...state,
                    selectedId: action.id
                }
            )
        case ERROR:
            return(
                {
                  ...state,
                  error: action.error
                }
            )
        default:
            return state;        
    }
}