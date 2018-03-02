const noteState = { // main storage
    Notes: {},
    error: false,
  }
  
  const notes = (state = noteState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          MESSAGE: 'added the note',
          Notes: {...state.Notes, [action.payload.title]: action.payload}, // has to be in brackets because it's coming in as a string (I think)
        }
  
      default:
        return state;
    }
  }
  
  export default notes;