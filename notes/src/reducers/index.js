import {ADDING, VIEWING, HOME, EDITING, UPDATING, DELETING, ERROR} from '../actions';

const initialState = {
    notes: [
        {title: 'example title', content: 'example content'},
        {title: 'second title', content:'second example content'},
    ],
    adding: false,
    viewing: false,
    editing: false,
    index: -1,
    updating: false,
    error: null
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case ADDING:
            return{
                ...state,
                notes: state.notes.concat(action.payload)
            }
        case VIEWING:
            return{
                ...state,
                viewing: true,
                index: action.payload
            }
        case HOME:
            return{
                ...state,
                viewing: false,
                index: -1,
            }
        case EDITING:
            return{
                ...state,
                viewing: false,
                editing: true,
                index: action.payload
            }
        case UPDATING:
            return{
                ...state,
                editing: false,
                notes: action.payload,
                index: -1,
            }
        case DELETING:
            return{
                ...state,
                viewing: false,
                notes: action.payload
            }
        case ERROR:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default reducer;