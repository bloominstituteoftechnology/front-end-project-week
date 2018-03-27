import { ADD_NOTE, DELETE_NOTE } from '../actions/notesActions';

export default (state = [], action) => 
    action.type === ADD_NOTE ? state.concat(action.newNote) : action.type === DELETE_NOTE ? state.splice(action.id) : state
