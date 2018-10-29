import { FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILURE } from "../Actions";


const InitialState = {
    notes:[],
    isFetching:false,
  }


export const NotesReducer = (state=InitialState,action) =>{

    switch(action.type){

        case FETCHING_NOTES:
        return {
            ...state,isFetching:true,
        }
        case FETCHING_NOTES_SUCCESS:
        console.log('fetting notes.. ',action.payload)
        return {
            ...state, notes: action.payload, isFetching: false
        }
        case FETCHING_NOTES_FAILURE:
        return {
            ...state,isFetching:false
        }
        default:
        return state
        


    }

  }