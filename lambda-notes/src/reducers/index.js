const initialState = {
  notes: [],
  note: null,
  fetchingNotes: false,
  fetchingNote: false,
  editingNote: false,
  deletingNote: false,
  noteExists: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCHING_NOTES':
      return { ...state, fetchingNotes: true };

    case 'NOTES_FETCHED':
      return { ...state, fetchingNotes: false,
                         notes: action.payload };

    case 'FETCHING_NOTE':
      return { ...state, fetchingNote: true };

    case 'NOTE_FETCHED':
      return { ...state, fetchingNote: false,
                         noteExists: true,
                         note: action.payload };

    case 'NO_NOTE_FETCHED':
      return { ...state, fetchingNote: false,
                         noteExists: false,
                         note: null };

    case 'EDITING_NOTE':
      return { ...state, editingNote: true };

    case 'NOTE_EDITED':
      return { ...state, editingNote: false,
                         note: action.payload };

    case 'DELETING_NOTE':
      return { ...state, deletingNote: true };

    case 'NOTE_DELETED':
      return { ...state, deletingNote: false };

    case 'ERROR':
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
