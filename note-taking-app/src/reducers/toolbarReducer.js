import {
    GET_CREATE_NOTE_FORM,
    GET_EDIT_NOTE_FORM,
    UPDATE_NOTE,
    SAVE_NOTE,
    SELECT_NOTE,
    DELETE_NOTE
} from '../actions';

const noteFormState = {
    isCreating: false,
    isEditing: false,
    isSelecting: false,
    note: {
        title:'',
        content: ''
    }
}

export const toolbarReducer = (state=noteFormState, action) => {
    switch (action.type) {
        case GET_CREATE_NOTE_FORM:
            return {
                isCreating: true,
                isEditing: false,
                isSelecting: false,
                note: {
                    title:'',
                    content: ''
                }
            }
        case UPDATE_NOTE: 
            return {
                isCreating: false,
                isEditing: false,
                isSelecting: false,
                note: action.note
            }
        case SAVE_NOTE: 
            return {
                isCreating: false,
                isEditing: false,
                isSelecting: false,
                note: {
                    title:'',
                    content: ''
                }
            }
        case DELETE_NOTE: 
            return {
                isCreating: false,
                isEditing: false,
                isSelecting: false,
                note: {
                    title:'',
                    content: ''
                }
            }
        case SELECT_NOTE: 
            return {
                isCreating: false,
                isEditing: false,
                isSelecting: true,
                note: action.note
            }
        case GET_EDIT_NOTE_FORM:
            return {
                isCreating: false,
                isEditing: true,
                isSelecting: false,
                note: action.note
            }
        default:
            return state
    }
}