//reducers

import { FETCHING_NOTES, NOTES_RECIEVED, ERROR, NOTE_ADDED, ADDING_NOTE, DELETING_NOTE, NOTE_DELETED, EDITING_NOTE, NOTE_EDITED} from '../actions';

const initialState = {
  notes: [],
  addingNote: false,
  noteAdded: false,
  fetchingNotes: false,
  notesRecieved: false,
  status: '',
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return  {...state,
        fetchingNotes: true,
      }
    case NOTES_RECIEVED:
      return {...state,
        fetchingNotes: false,
        notesRecieved: true,
        notes: action.payload,
      }
    case ADDING_NOTE:
      return  { ...state,
        addingNote: true,
      }
    case NOTE_ADDED:
      return  {...state,
        addingNote: false,
        noteAdded: true,
        status: action.payload,
      }
    case DELETING_NOTE:
      return {...state,
        deletingNote: true,
      }
    case NOTE_DELETED:
      return {...state,
        deletingNote: false,
        noteDeleted: true,
        status: action.payload,
      }
    case EDITING_NOTE:
      return {...state,
        editingNote: true,
      }
    case NOTE_EDITED:
      return  {...state,
        editingNote: false,
        noteEdited: true,
        status: action.payload,
      }
    case ERROR:
      return  {...state,
        fetchingNotes: false,
        notesRecieved: false,
        addingNote: false,
        noteAdded: false,
        error: true,
        status: action.payload,
      }
   

    default:
      return state;
  }
}
