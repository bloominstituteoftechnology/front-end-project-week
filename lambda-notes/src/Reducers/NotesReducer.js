import { FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILURE } from "../Actions";
import { ADDING_NOTES, ADDING_NOTES_SUCCESS, ADDING_NOTES_FAILURE } from "../Actions";

const InitialState = {
    notes:[],
    isFetching:false,
    isAdding:false,
  }


export const NotesReducer = (state=InitialState,action) =>{

    switch(action.type){

        case FETCHING_NOTES:
        return {
            ...state,isFetching:true,
        }
        case FETCHING_NOTES_SUCCESS:
        return {
            ...state, notes: action.payload, isFetching: false
        }
        case FETCHING_NOTES_FAILURE:
        return {
            ...state,isFetching:false
        }
        case ADDING_NOTES:
        return {
            ...state,isAdding:true,
        }
        case ADDING_NOTES_SUCCESS:
        console.log('the reducer received', action.payload)
        return {
            ...state, notes: action.payload, isAdding: false
        }
        case ADDING_NOTES_FAILURE:
        return {
            ...state,isAdding:false
        }

        default:
        return state
        


    }

  }