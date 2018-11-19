import { SUCCESS, FETCHING, ERROR, SUCCESS_SINGLE, UPDATE } from "../actions";

const initialState = {
  notes: [
    {
      tags: [],
      title: "My Very First Note",
      textBody:
        "This is the first note I have written. It will not be the last note. Nay, for it carries with it the force of a million notes. And on the wings of the note-flurry emanating from this one note, there exists the potential for a great many notes...each more powerful than the last.  Or it'll just be the one, I dunno. We'll see."
    }
  ],
  singleNote: {
    tags: [],
    title: "My Very First Note",
    textBody:
      "This is the first note I have written. It will not be the last note. Nay, for it carries with it the force of a million notes. And on the wings of the note-flurry emanating from this one note, there exists the potential for a great many notes...each more powerful than the last.  Or it'll just be the one, I dunno. We'll see."
  },
  fetching: false,
  updating: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case SUCCESS:
      return Object.assign({}, state, {
        notes: action.payload,
        fetching: false,
        error: ""
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    case SUCCESS_SINGLE:
      return Object.assign({}, state, {
        singleNote: action.payload,
        fetching: false,
        updating: false,
        error: ""
      });
    case UPDATE:
      return Object.assign({}, state, { updating: true });
    default:
      return state;
  }
};
