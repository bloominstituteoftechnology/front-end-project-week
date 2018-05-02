import { GET_NOTES, GET_NOTE, CREATE_NOTE, EDIT_NOTE, DELETE_NOTE, ERROR } from '../actions'

const initialState = {
    gettingNotes: false,
    savingNote: false,
    noteSaved: false,
    updatingNote: false,
    noteUpdated: false,
    deletingNote: false,
    noteDeleted: false,
    error: null,
    note: [],
    notes: [],

}


const rootReducer = ( intialState, action) => {
    switch(action.type) {
        case( GET_NOTES ):
            return Object.assign({}, intialState, { notes: action.payload, gettingNotes: true })
        case( GET_NOTE ):
            return
        case( CREATE_NOTE ):
            return Object.assign({}, intialState, { notes: action.payload, })
        case( EDIT_NOTE ):
            return
        case( DELETE_NOTE ):
            return
        case( ERROR ):
            return
        default:
        return initialState
    }
}

export default rootReducer;