const initialState = {
  notes: [],
  note: null,
  fetchingNotes: false,
  notesFetched: false,
  fetchingNote: false,
  editingNote: false,
  noteExists: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCHING_NOTES':
      return { ...state, fetchingNotes: true,
                         notesFetched: false };

    case 'NOTES_FETCHED':
      return { ...state, fetchingNotes: false,
                         notesFetched: true,
                         notes: action.payload };

    case 'SILENT_UPDATE':
      return { ...state, notes: action.payload };

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

    case 'ERROR':
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
