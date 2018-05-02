import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, MARK_COMPLETE} from '../reducers';
import update from 'immutability-helper';

const initialState = [
    {id: 1, title: "Note Title"},
    {id: 2, title: "Note Title"},
    {id: 3, title: "Note Title"},
    {id: 4, title: "Note Title"},
    {id: 5, title: "Note Title"},
    {id: 6, title: "Note Title"},
    {id: 7, title: "Note Title"},
    {id: 8, title: "Note Title"},
    {id: 9, title: "Note Title"}
]



export default (notes=initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
        const addedState = update(notes, {$push: [action.note]});
        return addedState;
        case MARK_COMPLETE:
        const completed = notes[action.index].completed;
        const completedState = update(notes, {[action.index]: {completed: {$set: !completed}}});
        return completedState;
        default:
        
    }
}
