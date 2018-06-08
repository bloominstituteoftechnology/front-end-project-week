import { dummydata as note} from '../../dummydata/dummydata';
import { CREATE_NOTE, FETCH_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/index-a';


const initialState = {note};

const noteReducer = (state = initialState, action) =>{
    const newState = Array.from(state.note);

    switch (action.type) {
        case CREATE_NOTE:
            Object.assign({}, state, {note:action.payload});
            return;
        case FETCH_NOTE:
            Object.assign({}, state, {note:action.payload} );
            return;
        case UPDATE_NOTE:
            Object.assign({}, state, {note:action.payload});
            return;
        case DELETE_NOTE: {
            console.log(this.newState, "DELETE_NOTE");
                state.forEach((item, index)=>{
                    if(item.id === action.payload){
                        newState.splice(index, 1);
                        return;
                    
                    }
                });
            }
            return newState;

        default:
            return state;
        }
      };

export default noteReducer;