import {GET_NOTES, ADD_NOTES, FETCHING, ERROR_GETTING_NOTES, SET_SINGLE_NOTE, UPDATE_NOTE, SEARCH, RETRIEVING_SEARCH} from '../actions/';

const initialState = {
    notes: [],
    fetching:false,
    error: null,
    singleNote: [],
    searching:false,
    searchResults:[],
    retrievingSearch: true,
    firstTime:true,
};

export const notes_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {...state, fetching: action.fetching};
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload,
                fetching: false,
                firstTime:action.first_time,
            };
        case ADD_NOTES:
            return {...state, notes: action.payload};
        case SET_SINGLE_NOTE:
            return {...state, singleNote: action.payload};
        case UPDATE_NOTE:
            return {...state, notes: action.payload};
        case ERROR_GETTING_NOTES:
            return {...state, error: action.payload};
        case SEARCH:
            return {...state, searchResults:action.payload, searching:action.search, retrievingSearch:action.retrievingSearch};
        case RETRIEVING_SEARCH:
            return {...state, retrievingSearch:action.retrieving_search};
        default:
            return state;
    }
};
