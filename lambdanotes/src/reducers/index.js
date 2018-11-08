import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE } from '../actions';
import axios from "axios"; 

const initialState = {
    notes: [],
    fetchingNote: false,
    addingNote: false,
    error: null
  }

  const notesReducer = (state = initialState, action) => {
    const getNotes = axios.get('https://fe-notes.herokuapp.com/note/get/all');
    switch (action.type) {
        case DELETE_NOTE:
            state.notes.forEach((item, index) => {
                if (item._id === action.payload) {
                    getNotes.splice(index, 1);
                    return;
                }
            });
            return getNotes;
        case EDIT_NOTE:
            state.notes.forEach((item, index) => {
                if (item._id === action.payload._id) {
                    getNotes.splice(index, 1);
                    return;
                }
            });
            getNotes.push(action.payload);
            return getNotes;
        case CREATE_NOTE:
            getNotes.push(action.payload);
            return getNotes;
        default:
            return state;
    }
}

export default notesReducer;