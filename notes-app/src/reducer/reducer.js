import { 
    FETCH, SUCCESS, FAILURE,
    ADD_FETCH, ADD_SUCCESS, ADD_FAILURE,
    DELETE_FETCH, DELETE_SUCCESS, DELETE_FAILURE,
    UPDATE_FETCH, UPDATE_SUCCESS, UPDATE_FAILURE,
    START_EDIT, RESET_EDIT,  
    SEARCH
   } from "../actions";

const initialState = 
{
    notes: [],
    filteredNotes: [],
    fetchingNotes: false,
    error: null,
    editNote: {}
}

export const axiosReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH:
            return {
                ...state,
                fetchingNotes: true
            }
        case SUCCESS: 
            return {
                ...state,
                error: null,
                fetchingNotes: false,
                notes: action.payload,
                filteredNotes: action.payload
                
            }
        case FAILURE:
            return {
                ...state,
                fetchingNotes:false,
                error: action.payload
            }

            //add conditions -------------------
        case ADD_FETCH:
            return {
                ...state,
                fetchingNotes: true
            }
        case ADD_SUCCESS:
        console.log(action.payload)
        let addPayload =  [ ...state.notes, { ...action.payload.obj, _id: action.payload.payload.success, __v: 0, tags: [] }, ];
            return {
                ...state,
                error: null,
                fetchingNotes: false,
                notes: addPayload,
                filteredNotes: addPayload,
            }
        case ADD_FAILURE:
            return {
                ...state,
                fetchingNotes:false,
                error: action.payload
            }

            //update conditions -------------------
        case UPDATE_FETCH:
            return {
                ...state,
                fetchingNotes: true
            }
        case UPDATE_SUCCESS: 
        let updatePayload = state.notes.map(note => {
            if(note._id === action.payload._id){
                return action.payload;
            }else{
                return note; 
            }
            
        })
            return {
                ...state,
                error: null,
                fetchingNotes: false,
                notes: updatePayload,
                filteredNotes: updatePayload,
            }
        case UPDATE_FAILURE:
            return {
                ...state,
                fetchingNotes:false,
                error: action.payload
            }

            //delete conditions -------------------
        case DELETE_FETCH:
            return {
                ...state,
                fetchingNotes: true
            }
        case DELETE_SUCCESS:
        console.log(action.payload.success)
        let deletePayload =   state.notes.filter(note => 
            !(note._id === action.payload._id)
        )
            return {
                ...state,
                error: null,
                fetchingNotes: false,
                notes: deletePayload,
                filteredNotes: deletePayload,
            }
        case DELETE_FAILURE:
            return {
                ...state,
                fetchingNotes:false,
                error: action.payload
            }

            // other functions =============================================================================
        case SEARCH:
            return {
                ...state,
                filteredNotes: action.payload,
            }
        

        default:
            return state;
    }
}

const otherState ={
    editNote: {}
}

export const otherReducer = (state = otherState, action) => {
    switch(action.type){
        case START_EDIT:
        console.log('edit updated')
        console.log(action.payload)
            return {
                ...state,
                editNote: action.payload
            }
        case RESET_EDIT:
        console.log('edit empty')
            return {
                ...state,
                editNote: {}
            }
        default:
            return state;
    }
}



