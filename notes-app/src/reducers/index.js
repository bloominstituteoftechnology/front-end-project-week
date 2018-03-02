// not importing yet

const noteState = { // main storage
  Notes: {},
  error: false,
}

const notes = (state = noteState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state, // copy the state (shallow copy)
        MESSAGE: 'added the note',
        Notes: {...state.Notes, [action.payload.title]: action.payload}, // has to be in brackets because it's coming in as a string (I think)
        // copy the Notes object (1 layer deep shallow since object in object)
      }
    case 'EDIT_NOTE':
      let tempObj = {
        ...state,
        MESSAGE: 'edited the note',
        Notes: {...state.Notes, [action.payload.title]: action.payload},
      }
      if (action.payload.title !== action.payload.oldtitle) {
        delete tempObj.Notes[action.payload.oldtitle]
        console.log('edited');
      }
      return tempObj;
    default:
      return state;
  }
}

export default notes;
