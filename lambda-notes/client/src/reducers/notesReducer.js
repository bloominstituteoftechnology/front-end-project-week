import { FETCHED_NOTE,FETCHING_NOTE,ERROR_FETCHING_NOTE } from "../actions/noteActions";

const initialState = {
    fetchingNote : false,
    fetchedNote : false,
    error : null,
    notes : []
}
export const notesReducer = ( state = initialState, actions ) => {
       switch (actions.type) {
            case FETCHING_NOTE:
                return {...state, fetchingNote :  true }
            case FETCHED_NOTE : 
                return { ...state, notes : actions.payload, fetchingNote : false, fetchedNote: true }
            case ERROR_FETCHING_NOTE : 
                return { ...state, fetchingNote :  true , error : actions.payload  }
            default:
               return state;
       }
}



