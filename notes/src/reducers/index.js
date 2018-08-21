import {FETCHINGNOTES,FETCHEDNOTES,FETCHINGNOTE,FETCHEDNOTE,ERROR,ADDINGNOTE,ADDEDNOTE,DELETINGNOTE,DELETEDNOTE,UPDATINGNOTE,UPDATEDNOTE} from '../actions';
const initialState={
    notes:[],
    note:[],
    fetchingNote:false,
    fetchingNotes:false,
    addingNote:false,
    updatingNote:false,
    deletingNote:false,
    error:null
}
export const notesReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCHINGNOTES:
            return Object.assign({},state,{fetchingNotes:true})
        case FETCHEDNOTES:
            return Object.assign({},state,{fetchingNotes:false,notes:action.payload})
        case FETCHINGNOTE:
            return Object.assign({},state,{fetchingNote:true})
        case FETCHEDNOTE:
            return Object.assign({},state,{fetchedNote:false,note:action.payload})
        case ERROR: 
            return Object.assign({},state,
            {smurfs: [],
            fetchingNotes: false,
            addingNote: false,
            updatingNote: false,
            deletingNote: false,
            error: action.payload})
        case ADDINGNOTE:
            return Object.assign({},state,{addingNote:true})
        case ADDEDNOTE: 
            return Object.assign({},state,{addingNote:false})
         case DELETINGNOTE:
            return Object.assign({},state,{deletingNote:true})
        case DELETEDNOTE:
            return Object.assign({},state,{deletingNote:false})
        case UPDATINGNOTE:
            return Object.assign({},state,{updatingNote:true})
        case UPDATEDNOTE:
            return Object.assign({},state,{updatingNote:false})
        default:
            return state
    }
  }