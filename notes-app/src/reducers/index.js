// not importing yet

const noteState = {
  Notes: {},
  error: false,
}

const notes = (state = noteState, action) => {
  switch (action.type) {
    case 'VIEWING_NOTE':
      return {
        ...state,
        Notes: action.payload
      };
    case 'ADD_NOTE':
      return {
        ...state,

      }
    default:
      return state;
  }
}

export default notes;
