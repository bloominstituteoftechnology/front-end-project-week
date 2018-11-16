import { LOADING, SUCCESS, ERROR} from '../actions/noteActions';


const initialState = {
    notes: [],
    loading:false,
    error:''
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
        return{...state, loading:true, error:null};
        case SUCCESS:
        return Object.assign({}, state, {notes:action.notes, loading:false, error: ''})
        case ERROR:
        return{...state, loading:false, error:action.errorMessage}
        default:
        return state
    }
}