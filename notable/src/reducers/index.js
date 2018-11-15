import { ADD_NOTE, SUCCESS, FETCHING, ERROR } from "../actions";

const initialState = {
  notes: [
    {
      tags: [],
      title: "My Very First Note",
      textBody:
        "This is the first note I have written. It will not be the last note. Nay, for it carries with it the force of a million notes. And on the wings of the note-flurry emanating from this one note, there exists the potential for a great many notes...each more powerful than the last.  Or it'll just be the one, I dunno. We'll see."
    }
  ],
  fetching: false, 
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        notes: [...state.notes, action.payload]
      });
    case FETCHING:
      return Object.assign({}, state, {fetching: true});
    case SUCCESS:
      return Object.assign({}, state, {notes: action.payload});
    case ERROR:
      return Object.assign({}, state, {error: action.payload});
    default:
      return state;
  }
};
