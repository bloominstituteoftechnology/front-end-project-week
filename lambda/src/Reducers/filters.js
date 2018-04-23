import FILTER_NOTE from '../Actions/Notes.js';

const filter = (state = notes, action) => {
  switch (action.type) {
    case FILTER_NOTE:
      return action.filter;
    default:
      return state;
  }
}

export default filter