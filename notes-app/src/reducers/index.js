// not importing yet

const noteState = {
  Notes: {},
  error: false,
}

const Notes = (state = noteState, action) => {
  switch (action.type) {
    case 'VIEWING_NOTE':
      return {
        ...state,
        Notes: action.payload
      };
    default:
      return state;
  }
}

export default Notes;
