import {
    NOTE_CHECKED,
    NOTE_UNCHECKED,
    NOTE_CHECKED_CLEAR,
    TOGGLE_MENU,
    SET_SORT_MODE,
    ACTIVE_NOTE_HANDLER,
    SEARCH_NOTE_HANDLER,
    GET_NOTE,
    GET_NOTE_FAILURE,
    GET_NOTE_SUCCESS,
    GET_NOTES,
    GET_NOTES_FAILURE,
    GET_NOTES_SUCCESS,
    ADD_NOTE,
    ADD_NOTE_FAILURE,
    ADD_NOTE_SUCCESS,
    UPDATE_NOTE,
    UPDATE_NOTE_FAILURE,
    UPDATE_NOTE_SUCCESS,
    DELETE_NOTE,
    DELETE_NOTE_FAILURE,
    DELETE_NOTE_SUCCESS,
    SELECT_MODE_TOGGLE
  } from '../actions'
  
  
  const initialState = {
    notes: [],
    activeNote: {},
    loading: false,
    searchValue: '',
    sortMode: 'default',
    sortModes: ['default', 'alpha', 'reverse-alpha'],
    sortNum: 0,
    showMenu: false,
    checkedNotes: [],
    selectMode: false,
    error: null,
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {

      case NOTE_CHECKED : 
        return {
          ...state,
          checkedNotes: [...state.checkedNotes, action.payload]
        }

      case NOTE_UNCHECKED : 
        return {
          ...state,
          checkedNotes: state.checkedNotes.filter(id => id !== action.payload)
        }

      case NOTE_CHECKED_CLEAR : 
        return {
          ...state,
          checkedNotes: [],
        }

      case TOGGLE_MENU : return {...state, showMenu: !state.showMenu}

      case SET_SORT_MODE :
        let num = state.sortNum + 1;
        if(num >= state.sortModes.length) num = 0;
        return {
          ...state,
          sortNum: num,
          sortMode: state.sortModes[num],
        }
  
      case SEARCH_NOTE_HANDLER : 
        return {
          ...state,
          searchValue: action.payload
        }

      case ACTIVE_NOTE_HANDLER : 
        return {
          ...state,
          activeNote: {
            ...state.activeNote,
            [action.payload.name]: action.payload.value,
          }
        }
  
      case GET_NOTE : return {...state}
      case GET_NOTE_FAILURE : return {...state, loading: false, error: action.payload}
      case GET_NOTE_SUCCESS : 
        return {
          ...state, 
          loading: false,
          activeNote: action.payload
        }
  
      case GET_NOTES : return {...state, loading: true}
      case GET_NOTES_FAILURE : return {...state, loading: false, error: action.payload}
      case GET_NOTES_SUCCESS : 
        return {
          ...state, 
          loading: false,
          notes: action.payload.reverse(),
        }
  
      case ADD_NOTE : return {...state, loading: true}
      case ADD_NOTE_FAILURE : return {...state, loading: false, error: action.payload}
      case ADD_NOTE_SUCCESS : 
        return {
          ...state, 
          loading: false,
          notes: [...state.notes.reverse(), action.payload].reverse(),
        }
  
      case UPDATE_NOTE : return {...state, loading: true}
      case UPDATE_NOTE_FAILURE : return {...state, loading: false, error: action.payload}
      case UPDATE_NOTE_SUCCESS : 
        return {
          ...state, 
          loading: false,
          notes: state.notes.map(
            note => note.id === action.payload.id ? action.payload : note)
        }
  
      case DELETE_NOTE : return {...state, loading: true}
      case DELETE_NOTE_FAILURE : return {...state, loading: false, error: action.payload}
      case DELETE_NOTE_SUCCESS : 
        return {
          ...state, 
          loading: false,
          notes: state.notes.filter(note => note.id !== action.payload)
        }

      case SELECT_MODE_TOGGLE : return {...state, selectMode: action.payload}
  
      default: return {...state};
    }
  }
  