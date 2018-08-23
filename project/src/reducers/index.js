import { FETCH_NOTE, FETCHED_NOTE, ADD_NOTE, ADDED_NOTE, EDIT_NOTE, EDITED_NOTE, DELETING_NOTE, DELETED_NOTE, SELECT_ID, ERROR} from '../actions/'

const initialState = {
    notes: '',
    fetchingNotes: false,
    fetchedNotes: false,
    addingNote: false,
    addedNote: false,
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
                    fetchedNotes: true                
                }
            )                
        case ADD_NOTE:            
            return(                
                {
                    ...state,
                    addingNote: true,
                    notes: state.notes.concat(action.payload)
                }
            )
        case ADDED_NOTE:
            return(
                {
                    ...state,
                    addingNote: false,
                    addedNote: true,                    
                }
            ) 
        case EDIT_NOTE:
            return(                
                {
                    ...state,
                    editingNote: true,
                    notes: state.notes.map(note=>
                        (note.id === state.selectedId)
                        ?action.payload
                        :note
                    ) 
                    
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
                }
            )
        case DELETED_NOTE:
            return(
                {
                    ...state,
                    deletingNote: false, 
                    notes: state.notes                   
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