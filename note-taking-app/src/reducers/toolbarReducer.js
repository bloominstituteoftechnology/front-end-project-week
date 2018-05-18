import {
    GET_CREATE_NOTE_FORM,
    // GET_EDIT_NOTE_FORM,
    SAVE_NOTE
} from '../actions';

const noteFormState = {
    isCreating: false,
    isEditing: false,
    isSelecting: false
}

export const toolbarReducer = (state=noteFormState, action) => {
    switch (action.type) {
        case GET_CREATE_NOTE_FORM:
            return {
                isCreating: true,
                isEditing: false,
                isSelecting: false
            }
        case SAVE_NOTE: 
            return {
                isCreating: false,
                isEditing: false,
                isSelecting: false
            }
        // case GET_EDIT_NOTE_FORM:
        //     return {
        //         isCreating: false,
        //         isEditing: true,
        //         isSelecting: false
        //     }
        // case GET_SELECT_NOTE:
        //     return { 
        //         isCreating: false,
        //         isEditing: false,
        //         isSelecting: true
        //     }
        default:
            return state
    }
}