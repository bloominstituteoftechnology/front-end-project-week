import { FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILURE } from "../Actions";
import { ADDING_NOTES, ADDING_NOTES_SUCCESS, ADDING_NOTES_FAILURE } from "../Actions";
import { FETCHING_NOTES_BY_ID, FETCHING_NOTES_BY_ID_SUCCESS, FETCHING_NOTES_BY_ID_FAILURE } from "../Actions";
const InitialState = {
    notes:[],
    isFetching:false,
    isAdding:false,
    isAdded:false,
  }


export const NotesReducer = (state=InitialState,action) =>{

    switch(action.type){

        case FETCHING_NOTES:
        return {
            ...state,isFetching:true, isAdded:false,
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
            ...state, notes: action.payload, isFetching: false, isAdded:false,
        }
        case FETCHING_NOTES_BY_ID_FAILURE:
        return {
            ...state,isFetching:false, isAdded:false,
        }

        default:
        return state
        


    }

  }