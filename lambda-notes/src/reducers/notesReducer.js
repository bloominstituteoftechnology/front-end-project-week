import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/notesActions';

export default (state = [], action) => 
    action.type === ADD_NOTE ? {...state, newNote: [action.newNote]} : action.type === UPDATE_NOTE ? {...state, newNote: [action.newNote]} : action.type === DELETE_NOTE ? state.splice(action.id) : state
