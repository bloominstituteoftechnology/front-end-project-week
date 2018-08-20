import { FETCHING_NOTES, FETCHED_NOTES, ADDING_NOTES, ADDED_NOTES } from "../actions";

const initialState = {
    notes: [
        {
            title: 'Title 1',
            content: 'Lorem ipsum'
        },
        {
            title: 'Title 1',
            content: 'Lorem ipsum'
        },
        {
            title: 'Title 1',
            content: 'Lorem ipsum'
        }
    ],
    fetchingNotes: true,
    addingNotes: false,
    addedNotes: true
}

export const notesReducer = ( state = initialState, action) => {
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
                notes: action.payload
            }
        case ADDING_NOTES: 
            return {
                ...state,
                addingNotes: true
            }
        case ADDED_NOTES:
            return {
                ...state,
                addingNotes: false,
                addedNotes: true,
                notes: state.notes.push(action.payload)
            }
        default:
            return state
    }
}

const testNotes = [
    {
        title: 'Title 1',
        content: 'Lorem ipsum'
    },
    {
        title: 'Title 1',
        content: 'Lorem ipsum'
    },
    {
        title: 'Title 1',
        content: 'Lorem ipsum'
    }
]