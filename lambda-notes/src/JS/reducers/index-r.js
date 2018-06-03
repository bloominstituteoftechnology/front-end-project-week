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
                const indexOfNoteToDelete = state.note.findIndex((note) => {
                  return(note.id);
                })
                newState.splice(indexOfNoteToDelete, 1);
                return;
              }
        default:
            return state;
        }
      };

export default noteReducer;