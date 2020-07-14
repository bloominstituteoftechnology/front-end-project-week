import {FETCHING_NOTES,
        FETCHED_NOTES,
        FETCHING_ONE_NOTE,
        FETCHED_ONE_NOTE,
        ADDING_NOTE,
        ADDED_NOTE,
        UPDATING_NOTE,
        UPDATED_NOTE,
        DELETING_NOTE,
        DELETED_NOTE,
        // REGISTERING_USER,
        // REGISTERED_USER,
        // LOGGING_USER,
        // LOGGED_USER, 
        ERRORS,
        // FILTERING_NOTES,
        // FILTERED_NOTES
        } from '../actions/actions';

const initialState = {
    notes: [],
    note: [],
    user: [],
    // filtered: [],
    fetchingNotes: false,
    fetchedNotes: false,
    // filteringNotes: false,
    // filteredNotes: false,
    fetchingOneNote: false,
    fetchedOneNote: false,
    addingNote: false,
    addedNote: false,
    updatingNote: false,
    updatedNote: false,
    deletingNote: false,
    deletedNote: false,
    // registeringUser: false,
    // registeredUser: false,
    // loggingUser: false,
    // loggedUser: false,
    error: null,
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_NOTES:
            return {
                  ...state,
                fetchingNotes: true
            }
        case FETCHED_NOTES:
            return {
                 ...state,
                fetchingNotes: false,
                fetchedNotes: true,
                notes: action.payload
             }
        case FETCHING_ONE_NOTE:
            return Object.assign({}, state, {
                fetchingOneNote: true,
            });
        case FETCHED_ONE_NOTE:
            return Object.assign({}, state, {
                fetchingOneNote: false,
                fetchedOneNote: true,
                note: action.payload[0],
            });
        case ADDING_NOTE:
            return {
                ...state,
                addingNote: true,
            }
        case ADDED_NOTE:
            return Object.assign({}, state,{
                addingNote: false,
                addedNote: true,
                notes: [...state.notes, action.payload],
            })
        case UPDATING_NOTE:
            return Object.assign({}, state, {
                updatingNote: true,
            })
        case UPDATED_NOTE:
            return Object.assign({}, state, {
                updatingNote: false,
                updatedNote: true,
                notes: action.payload,
            })
        case DELETING_NOTE:
            return Object.assign({}, state, {
                deletingNote: true,
            })
        case DELETED_NOTE:
            return Object.assign({}, state, {
                deletingNote: false,
                deletedNote: true,
                notes: action.payload,
            })
        // case REGISTERING_USER:
        //     return Object.assign({}, state, {
        //         registeringUser:true,
        //     })
        // case REGISTERED_USER:
        //     return Object.assign({}, state, {
        //         registeringUser: false,
        //         registeredUser: true
        //     })
        // case LOGGING_USER:
        //     return Object.assign({}, state, {
        //         loggingUser:true,
        //     })
        // case LOGGED_USER:
        //     return Object.assign({}, state, {
        //         loggingUser: false,
        //         loggedUser: true,
        //         user: action.payload
        //     })
        case ERRORS:
            return Object.assign({}, state, {
                fetchingNotes: false,
                fetchingOneNote: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false,
                error: action.payload
            })
        default:
            return state;
    }
}

 // case FILTERING_NOTES:
        //     return {
        //         ...state,
        //         filteringNotes: true,
        //     }
        // case FILTERED_NOTES:
        //     return {
        //         ...state,
        //         filteringNotes: false,
        //         filteredNotes: true,
        //         filtered: action.payload,
        //     }