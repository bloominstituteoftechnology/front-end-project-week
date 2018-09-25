import {ADDING, ERROR} from '../actions';

const initialState = {
    notes: [
        {title: 'example title', content: 'example content'},
        {title: 'second title', content:'second example content'},
    ],
    adding: false,
    error: null
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case ADDING:
            return{
                ...state,
                notes: state.notes.concat(action.payload)
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