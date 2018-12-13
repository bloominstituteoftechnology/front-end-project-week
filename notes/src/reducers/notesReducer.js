import { FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILURE,
        POSTING_NOTE, POSTING_NOTE_SUCCESS, POSTING_NOTE_FAILURE,
        EDITING_NOTE, EDITING_NOTE_SUCCESS, EDITING_NOTE_FAILURE,
        OVERLAY_TOGGLE,
        DELETING_NOTE, DELETING_NOTE_SUCCESS, DELETING_NOTE_FAILURE,
        SETTING_NOTE, SETTING_NOTE_SUCCESS, SETTING_NOTE_FAILURE,
        LOGIN_STATUS_TOGGLE,
        ATTEMPTING_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE
    } from '../actions';

const initialState = {
    notes: [],
    note: {},
    fetchingNotes: false,
    postingNote: false,
    editingNote: false,
    deletingNote: false,
    error: null,
    overlay: false,
    settingNote: false,
    loginStatus: false,
    loggingIn: true,
    userId: null,
    registering: false
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
        return {...state,
                fetchingNotes: true};
    case FETCHING_NOTES_SUCCESS:
        return {...state, 
                notes: action.payload,
                fetchingNotes: false};
    case FETCHING_NOTES_FAILURE:
        return {...state, 
            error: action.payload,
            fetchingNotes: false};
    
    
    case POSTING_NOTE:
        return{...state, postingNote: true};
    case POSTING_NOTE_SUCCESS:
        return{...state, postingNote: false};
    case POSTING_NOTE_FAILURE:
        return{...state, postingNote: false, error: action.payload};

    case EDITING_NOTE:
        return{...state, editingNote: true};
    case EDITING_NOTE_SUCCESS:
        return{...state, note: action.payload, editingNote: false }
    case EDITING_NOTE_FAILURE:
        return{...state, error: action.payload, editingNote: false }

    case OVERLAY_TOGGLE:
        return{...state, overlay: !state.overlay}
    
    case DELETING_NOTE:
        return{...state, deletingNote: true};
    case DELETING_NOTE_SUCCESS:
        return{...state, note: action.payload, deletingNote: false }
    case DELETING_NOTE_FAILURE:
        return{...state, error: action.payload, deletingNote: false }

    case SETTING_NOTE:
        return{...state, settingNote: true};
    case SETTING_NOTE_SUCCESS:
        return{...state, note: action.payload, settingNote: false }
    case SETTING_NOTE_FAILURE:
        return{...state, error: action.payload, settingNote: false }

    case LOGIN_STATUS_TOGGLE:
        return{...state, loginStatus: !state.loginStatus}

    case ATTEMPTING_LOGIN:
        return{...state, loggingIn: true};
    case LOGIN_SUCCESS:
        return{...state, userId: action.payload, loggingIn: false }
    case LOGIN_FAILURE:
        return{...state, error: action.payload, loggingIn: false }

    case ATTEMPTING_REGISTER:
        return{...state, registering: true};
    case REGISTER_SUCCESS:
        return{...state, userId: action.payload, registering: false }
    case REGISTER_FAILURE:
        return{...state, error: action.payload, registering: false }
    
    default:
      return state;
  }
};