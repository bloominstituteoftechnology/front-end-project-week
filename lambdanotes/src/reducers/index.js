import {
    NEW_NOTE,
    EDIT_NOTE,
    DEL_NOTE,
    ERROR
} from '../actions';

const initialState = {
    notes: [

    ]
};

export default function notes(state = initialState, action) {
    switch (action.type) {
        case NEW_NOTE:
            return{
                ...state,
                notes: [...state.notes, { ...action.note, id:action.id }]
            };

        case EDIT_NOTE:
            return{
                ...state,
                notes:
            };

        case DEL_NOTE:
            return{
                ...state,
                notes:
            };

        case ERROR:
            return{
                ...state,
                notes:
            };

        }
}