import { GET_NOTES, GET_NOTE, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, ERROR } from '../actions'

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
            return Object.assign({}, initialState, { note: action.payload, })
        case( CREATE_NOTE ):
            return Object.assign({}, intialState, { notes: action.payload, })
        case( UPDATE_NOTE ):
            return Object.assign({}, intialState, { note: action.payload })
        case( DELETE_NOTE ):
            return Object.assign({}, intialState, { notes: action.payload})
        case( ERROR ):
            return
        default:
        return initialState
    }
}

export default rootReducer;