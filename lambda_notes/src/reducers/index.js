const initialState = {
  notes: [],
  transcript: '',
  isListening: false,
  isLoading: false,
  // error: null
}

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true }
    case 'GET_NOTES':
      return { ...state, notes: action.notes, isLoading: false }
    case 'ADD_NOTE':
      return { ...state, isLoading: false }
    case 'EDIT_NOTE':
      return { ...state, isLoading: false }
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.id),
        isLoading: false
      }
    case 'SPEECH':
      return { ...state, isListening: !state.isListening }
    case 'ADD_TRANSCRIPT':
      return {
        ...state,
        transcript: state
          .transcript
          .concat(` ${action.transcript}`)
          .replace(/^\s+/g, '')
        }
    default:
      return state
  }
}
