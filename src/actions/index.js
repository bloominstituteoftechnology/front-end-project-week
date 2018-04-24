const CREATE_NOTE = 'create-note'
const UPDATE_NOTE = 'update-note'
const DELETE_NOTE = 'delete-note'
const FETCH_START = 'fetch-start'
const FETCH_NOTES = 'fetch-notes'
const FETCH_NOTES_SUCCESS = 'fetch-notes-success'
const FETCH_NOTE = 'fetch-note'
const FETCH_NOTE_SUCCESS = 'fetch-note-success'
const FETCH_ERROR = 'fetch-error'

const createNote = { type: CREATE_NOTE }
const updateNote = { type: UPDATE_NOTE }
const deleteNote = { type: DELETE_NOTE }
const fetchStart = { type: FETCH_START }

const fetchError = (error) => ({ type: FETCH_ERROR, payload: error })
const fetchNotesSuccess = (notes) => ({ type: FETCH_NOTE_SUCCESS, payload: notes })
const fetchNoteSuccess = (note) => ({ type: FETCH_NOTE_SUCCESS, payload: note })
