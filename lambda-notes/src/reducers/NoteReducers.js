import { GETTING_NOTES, 
        RECEIVED_NOTES, 
        GET_FAILED,
        GETTING_SINGLE_NOTE,
        RECEIVED_SINGLE_NOTE,
        GET_SINGLE_FAILED,
        CREATING_NOTE,
        NOTE_CREATED,
        CREATE_FAILED,
        UPDATING_NOTE,
        NOTE_UPDATED,
        UPDATE_FAILED,
        DELETING_NOTE,
        NOTE_DELETED,
        DELETE_FAILED,
        SEARCHING_NOTES,
        SEARCH_RETURNED,
        SEARCH_FAILED} from './../actions';



        const initialState = {
            notes: [],
            note: {},
            currentlyDisplayed: [],
            gettingNotes: false,
            receivedNotes: false,
            gettingNote: false,
            receivedNote: false,
            creatingNote: false,
            noteCreated: false,
            updatingNote: false,
            noteUpdated: false,
            deletingNote: false,
            noteDeleted: false,
            searchingNotes: false,
            searchReturned: false,
            error: null
        }

        export const noteReducers = (state = initialState, {type, payload}) => {
            switch(type){
                case GETTING_NOTES:
                    return {...state, gettingNotes: true}
                case RECEIVED_NOTES:
                    return {...state, gettingNotes: false, receivedNotes: true, notes: payload}
                case GET_FAILED:
                    return {...state, gettingNotes: false, error: payload}

                case GETTING_SINGLE_NOTE:
                    return {...state, gettingNote: true}
                case RECEIVED_SINGLE_NOTE:
                    return {...state, gettingNote: false, receivedNote: true, note: payload}
                case GET_SINGLE_FAILED:
                    return {...state, gettingNote: false, error: payload}

                case CREATING_NOTE:
                    return {...state, creatingNote: true}
                case NOTE_CREATED:
                    return {...state, creatingNote: false, noteCreated: true}
                case CREATE_FAILED:
                    return {...state, creatingNote: false, error: payload}

                case UPDATING_NOTE:
                    return {...state, updatingNote: true}
                case NOTE_UPDATED:
                    return {...state, updatingNote: false, noteUpdated: true}
                case UPDATE_FAILED:
                    return {...state, updatingNote: false, error: payload}

                case DELETING_NOTE:
                    return {...state, deletingNote: true}
                case NOTE_DELETED:
                    return {...state, deletingNote: false, noteDeleted: true}
                case DELETE_FAILED:
                    return {...state, deletingNote: false, error: payload}

                case SEARCHING_NOTES:
                    return {...state, searchingNotes: true}
                case SEARCH_RETURNED:
                    return {...state, searchingNotes: false, searchReturned: true, notes: payload}
                case SEARCH_FAILED:
                    return {...state, searchingNotes: false, error: payload}

                default: 
                    return state;
            }
        } 