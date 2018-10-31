import { FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILURE } from "../Actions";
import { ADDING_NOTES, ADDING_NOTES_SUCCESS, ADDING_NOTES_FAILURE } from "../Actions";
import { FETCHING_NOTES_BY_ID, FETCHING_NOTES_BY_ID_SUCCESS, FETCHING_NOTES_BY_ID_FAILURE } from "../Actions";
import { EDITTING_NOTES,EDITTING_NOTES_SUCCESS,EDITTING_NOTES_FAILURE } from "../Actions";
import { DELETING_NOTES,DELETING_NOTES_SUCCESS,DELETING_NOTES_FAILURE } from "../Actions";

const InitialState = {
    notes:[],
    individualNote:null,
    isFetching:false,
    isAdding:false,
    isAdded:false,
    isEditting:false,
    isEdited:false,
    isDeleted:false,
    isDeleting:false,
  }


export const NotesReducer = (state=InitialState,action) =>{

    switch(action.type){

        case FETCHING_NOTES:
        return {
            ...state,isFetching:true, isAdded:false, isDeleted:false, isEdited:false,
        }
        case FETCHING_NOTES_SUCCESS:
        return {
            ...state, notes: action.payload, isFetching: false, isAdded:false,
        }
        case FETCHING_NOTES_FAILURE:
        return {
            ...state,isFetching:false, isAdded:false,
        }
        case ADDING_NOTES:
        return {
            ...state,isAdding:true, isAdded:false,
        }
        case ADDING_NOTES_SUCCESS:
        return {
            ...state, isAdding: false, isAdded: true,
        }
        case ADDING_NOTES_FAILURE:
        return {
            ...state,isAdding:false, isAdded:false,
        }

        case FETCHING_NOTES_BY_ID:
        return {
            ...state,isFetching:true, isAdded:false,
        }
        case FETCHING_NOTES_BY_ID_SUCCESS:
        return {
            ...state, individualNote: action.payload, isFetching: false, isAdded:false,
        }
        case FETCHING_NOTES_BY_ID_FAILURE:
        return {
            ...state,isFetching:false, isAdded:false,
        }

        case EDITTING_NOTES:
        return {
            ...state,isEditting:true,isEdited:false
        }
        case EDITTING_NOTES_SUCCESS:
        return {
            ...state, individualNote: action.payload, isEditting:false, isEdited:true
        }
        case EDITTING_NOTES_FAILURE:
        return {
            ...state, isEditting:false,isEdited:false
        }

        case DELETING_NOTES:
        return {
            ...state,isDeleting:true,isDeleted:false
        }
        case DELETING_NOTES_SUCCESS:
        return {
            ...state, individualNote: action.payload, isDeleting:false, isDeleted:true
        }
        case DELETING_NOTES_FAILURE:
        return {
            ...state, isDeleting:false,isDeleted:false
        }

        default:
        return state
        


    }

  }