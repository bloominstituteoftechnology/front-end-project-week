import { dummydata as note} from '../../dummydata/dummydata';
import { CREATE_NOTE, READ_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/index-a';


const initialState = {notes: {note}};

const noteReducer = (state = initialState, action) =>{
    console.log("state", state.notes.note);
    switch (action.type) {
        case CREATE_NOTE:
            Object.assign({}, state, {note:action.payload});
            return;
        case READ_NOTE:
            Object.assign({}, state, {note:action.payload} );
            return;
        case UPDATE_NOTE:
            Object.assign({}, state, {note:action.payload});
            return;
        case DELETE_NOTE:
            Object.assign({}, state, {note:state.notes.note.slice(action.payload).concat(state.notes.note.slice(action.payload+1))});  
            return;  
        default:
            return state;
        }
      };

export default noteReducer;